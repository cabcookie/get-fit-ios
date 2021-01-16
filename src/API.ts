/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export enum TrainingType {
  RUNNING_INTERVALL = "RUNNING_INTERVALL",
  RUNNING_WITH_BREAKS = "RUNNING_WITH_BREAKS",
  RUNNING = "RUNNING",
  RUNNING_SLOWLY = "RUNNING_SLOWLY",
  WALKING = "WALKING",
  WALKING_SLOWLY = "WALKING_SLOWLY",
  RUNNING_INTERVALL_SLOWLY = "RUNNING_INTERVALL_SLOWLY",
  WALKING_INTERVALL = "WALKING_INTERVALL",
}


export type IdQuery = {
  id: string,
};

export type TrainingTypeQuery = {
  trainingType: TrainingType | null,
};

export type DateQuery = {
  date: string | null,
};

export type TrainingDetailsQuery = {
  trainingDetails:  {
    __typename: "TrainingDetails",
    totalMinutes: number | null,
    intervalls: number | null,
    minutesPerIntervall: number | null,
    minutesBetweenIntervalls: number | null,
  } | null,
};

export type ExecutionDetailsQuery = {
  executionDetails:  {
    __typename: "TrainingExecution",
    executionId: string | null,
    trainingStarted: string | null,
    trainingFinished: string | null,
  } | null,
};

export type ResultDetailsQuery = {
  resultDetails:  {
    __typename: "TrainingResults",
    resultSeconds: number | null,
    resultAverageBpm: number | null,
    resultCalories: number | null,
    resultMeters: number | null,
  } | null,
};

export type SchemaVersionQuery = {
  schemaVersion: number | null,
};
