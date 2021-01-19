import { DataStore } from "aws-amplify"
import { flow, get, set, map, reduce } from "lodash/fp"
import { Training } from "../../models"
import { ifThenElse, isArray, isNullOrUndefined, makeAsyncCall, makeDate, replaceNullValuesInObject } from "cbk-functional-library"
import { checkVersion } from "./training-schema-migrator"

const cleanUpFields = item => flow(
    replaceNullValuesInObject(""),
    set("date", flow(
        get("date"),
        makeDate,
    )(item)),
)(item)

const cleanUpRecord = flow(checkVersion, cleanUpFields)

export const query = filter => makeAsyncCall(ifThenElse(isNullOrUndefined,
    () => DataStore.query(Training),
    () => DataStore.query(Training, filter),
), ifThenElse(isArray,
    map(cleanUpRecord),
    cleanUpRecord,
))(filter)

export const queryAll = setData => makeAsyncCall(query, setData)()
export const getRecordById = (id, setData) => makeAsyncCall(query, setData)(id)

const getExecutionDetails = key => training => training.executionDetails && training.executionDetails[key]
export const getExecutionId = getExecutionDetails("executionId")
export const getTrainingStarted = getExecutionDetails("trainingStarted")
export const getTrainingFinished = getExecutionDetails("trainingFinished")
export const isResultDetailsEmpty = training => reduce((last, curr) => last && (curr == null || curr === ""), true)(training.resultDetails)
