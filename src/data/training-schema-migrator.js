import { flow } from "lodash/fp"
import {
    TrainingType
} from "../../models"
import { ifThenElse } from "cbk-functional-library"
import { updateTrainingFinishedWithResultSeconds } from "./Trainings.data.update"

const getTotalMinutesV1 = item => item.trainingType === TrainingType.RUNNING ?
    item.running.totalMinutes :
    item.trainingType === TrainingType.RUNNING_INTERVALL ?
    item.runningIntervall.totalMinutes : null

const getIntervallsV1 = item => item.trainingType === TrainingType.RUNNING_WITH_BREAKS ?
    item.runningWithBreaks.intervalls :
    item.trainingType === TrainingType.RUNNING_INTERVALL ?
    item.runningIntervall.intervalls : null

const getMinutesPerIntervallV1 = item => item.trainingType === TrainingType.RUNNING_WITH_BREAKS ?
    item.runningWithBreaks.minutesPerIntervall :
    item.trainingType === TrainingType.RUNNING_INTERVALL ?
    item.runningIntervall.minutesPerIntervall : null

const getMinutesBetweenIntervallsV1 = item => item.trainingType === TrainingType.RUNNING_WITH_BREAKS ?
    item.runningWithBreaks.minutesBetweenIntervalls :
    item.trainingType === TrainingType.RUNNING_INTERVALL ?
    item.runningIntervall.minutesBetweenIntervalls : null

const v1_to_v2 = item => {
    updateTrainingFinishedWithResultSeconds(item)
    item.schemaVersion = 2
    return item
}

const to_v1 = item => {
    item.trainingDetails = {
        totalMinutes: getTotalMinutesV1(item),
        intervalls: getIntervallsV1(item),
        minutesPerIntervall: getMinutesPerIntervallV1(item),
        minutesBetweenIntervalls: getMinutesBetweenIntervallsV1(item),
    }
    item.executionDetails = {
        executionId: item.executionId,
        trainingStarted: item.trainingStarted,
        trainingFinished: item.trainingFinished,
    }
    item.resultDetails = {
        resultSeconds: null,
        resultAverageBpm: null,
        resultCalories: null,
        resultMeters: null,
    }
    item.runningIntervall = null
    item.runningWithBreaks = null
    item.name = null
    item.running = null
    item.executionId = null
    item.trainingStarted = null
    item.trainingFinished = null
    item.resultSeconds = null
    item.resultAverageBpm = null
    item.resultCalories = null
    item.schemaVersion = 1
    return item
}

// CURRENT SCHEMA VERSION
export const currentSchemaVersion = 2

export const checkVersionChangeOriginal = item => flow(
    ifThenElse(obj => !obj.schemaVersion, to_v1),     // if item has no schema version migrate it to v1
    ifThenElse(obj => obj.schemaVersion === 1, v1_to_v2),
)(item)

export const checkVersion = flow(
    JSON.stringify,
    JSON.parse,
    checkVersionChangeOriginal,
)
