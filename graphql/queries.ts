/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTraining = /* GraphQL */ `
  query GetTraining($id: ID!) {
    getTraining(id: $id) {
      id
      trainingType
      date
      trainingDetails {
        totalMinutes
        intervalls
        minutesPerIntervall
        minutesBetweenIntervalls
      }
      executionDetails {
        executionId
        trainingStarted
        trainingFinished
      }
      resultDetails {
        resultSeconds
        resultAverageBpm
        resultCalories
        resultMeters
      }
      schemaVersion
      runningIntervall {
        totalMinutes
        intervalls
        minutesPerIntervall
        minutesBetweenIntervalls
        intervallBpmPercentFrom
        intervallBpmPercentTo
        breakBpmPercentFrom
        breakBpmPercentTo
        resultMeters
      }
      runningWithBreaks {
        intervalls
        minutesPerIntervall
        minutesBetweenIntervalls
        runningBpmPercentFrom
        runningBpmPercentTo
        resultMeters
      }
      name
      running {
        totalMinutes
        runningBpmPercentFrom
        runningBpmPercentTo
        resultMeters
      }
      executionId
      trainingStarted
      trainingFinished
      resultSeconds
      resultAverageBpm
      resultCalories
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTrainings = /* GraphQL */ `
  query ListTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrainings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        trainingType
        date
        schemaVersion
        name
        executionId
        trainingStarted
        trainingFinished
        resultSeconds
        resultAverageBpm
        resultCalories
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTrainings = /* GraphQL */ `
  query SyncTrainings(
    $filter: ModelTrainingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrainings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        trainingType
        date
        schemaVersion
        name
        executionId
        trainingStarted
        trainingFinished
        resultSeconds
        resultAverageBpm
        resultCalories
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
