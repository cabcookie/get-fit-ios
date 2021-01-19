import { DataStore } from "aws-amplify"
import { Training } from "../../models"
import { filter } from "cbk-functional-library"
import { flow } from "lodash/fp"
import { getRecordById, queryAll } from "./Trainings.data.query"

const filterByOpenTrainings = (onlyOpenTrainings, setTrainings) => flow(
    filter(training => training.resultDetails.resultSeconds > 10 ? !onlyOpenTrainings : onlyOpenTrainings),
    setTrainings,
)

export const observeTrainings = (onlyOpenTrainings, setTrainings) => () => {
    // if onlyOpenTrainings is false it will only return finished trainings
    queryAll(filterByOpenTrainings(onlyOpenTrainings, setTrainings))
    const subscription = DataStore.observe(Training).subscribe(() => queryAll(filterByOpenTrainings(onlyOpenTrainings, setTrainings)))
    return () => subscription.unsubscribe()
}

export const observeRecord = (id, setData) => {
    getRecordById(id, setData)
    const subscription = DataStore.observe(Training, id).subscribe(() => getRecordById(id, setData))
    return () => subscription.unsubscribe()
}
