/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      username
      birthYear
      iftttTrigger
      iftttKey
      schemaVersion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      username
      birthYear
      iftttTrigger
      iftttKey
      schemaVersion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      username
      birthYear
      iftttTrigger
      iftttKey
      schemaVersion
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateTraining = /* GraphQL */ `
  subscription OnCreateTraining($owner: String) {
    onCreateTraining(owner: $owner) {
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
export const onUpdateTraining = /* GraphQL */ `
  subscription OnUpdateTraining($owner: String) {
    onUpdateTraining(owner: $owner) {
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
export const onDeleteTraining = /* GraphQL */ `
  subscription OnDeleteTraining($owner: String) {
    onDeleteTraining(owner: $owner) {
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
