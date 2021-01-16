/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteTraining = /* GraphQL */ `
  mutation DeleteTraining(
    $input: DeleteTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    deleteTraining(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTraining = /* GraphQL */ `
  mutation CreateTraining(
    $input: CreateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    createTraining(input: $input, condition: $condition) {
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
export const updateTraining = /* GraphQL */ `
  mutation UpdateTraining(
    $input: UpdateTrainingInput!
    $condition: ModelTrainingConditionInput
  ) {
    updateTraining(input: $input, condition: $condition) {
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
