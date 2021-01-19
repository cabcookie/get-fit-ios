import { DataStore } from "aws-amplify"
import { flow, map, keys, forEach } from "lodash/fp"
import { Training } from "../../models"
import { addDays, addSeconds, ifThenElse, isArray, isNullOrUndefined, makeAsyncCall, makeDate, toISOString } from "cbk-functional-library"
import { checkVersionChangeOriginal } from "./training-schema-migrator"

const cloneUpdateAndSaveARecord = updFn => item => flow(
    Training.copyOf,
    DataStore.save,
)(item, upd => {
    checkVersionChangeOriginal(upd)
    updFn(upd)
})
const getRecordCloneUpdateAndSave = updFn => filter => makeAsyncCall(ifThenElse(isNullOrUndefined,
    () => DataStore.query(Training),
    () => DataStore.query(Training, filter),
), ifThenElse(isArray,
    map(cloneUpdateAndSaveARecord(updFn)),
    cloneUpdateAndSaveARecord(updFn),
))(filter)

export const updateTrainingDates = (date, deferDays) => getRecordCloneUpdateAndSave(upd => {
    upd.date = flow(
        makeDate,
        addDays(deferDays),
        toISOString,
    )(upd.date)
})(item => item.date("ge", toISOString(date)))

export const updateExecutionData = id => data => getRecordCloneUpdateAndSave(upd => {
    upd.executionDetails = {
        executionId: data.executionArn,
        trainingStarted: data.startDate,
        trainingFinished: "",
    }
})(id)

const hasTrainingStartedAndResultSeconds = item =>
    item.executionDetails &&
    item.executionDetails.trainingStarted &&
    item.resultDetails &&
    item.resultDetails.resultSeconds

const updateTrainingFinished = item => {
    item.executionDetails.trainingFinished = flow(
        addSeconds,
        toISOString,
    )(item.executionDetails.trainingStarted, item.resultDetails.resultSeconds)
    return item
}

export const updateTrainingFinishedWithResultSeconds = ifThenElse(hasTrainingStartedAndResultSeconds, updateTrainingFinished)

export const updateTrainingDetails = id => resultDetails => getRecordCloneUpdateAndSave(upd => flow(
    keys,
    forEach(key => upd.resultDetails[key] = resultDetails[key]),
    item => updateTrainingFinishedWithResultSeconds(upd),
)(resultDetails))(id)

export const updateTrainingRecord = updFn => trainingObj => getRecordCloneUpdateAndSave(updFn)(trainingObj.id)
