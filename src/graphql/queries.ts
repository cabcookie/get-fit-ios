/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const id = /* GraphQL */ `
  query Id {
    id
  }
`;
export const trainingType = /* GraphQL */ `
  query TrainingType {
    trainingType
  }
`;
export const date = /* GraphQL */ `
  query Date {
    date
  }
`;
export const trainingDetails = /* GraphQL */ `
  query TrainingDetails {
    trainingDetails {
      totalMinutes
      intervalls
      minutesPerIntervall
      minutesBetweenIntervalls
    }
  }
`;
export const executionDetails = /* GraphQL */ `
  query ExecutionDetails {
    executionDetails {
      executionId
      trainingStarted
      trainingFinished
    }
  }
`;
export const resultDetails = /* GraphQL */ `
  query ResultDetails {
    resultDetails {
      resultSeconds
      resultAverageBpm
      resultCalories
      resultMeters
    }
  }
`;
export const schemaVersion = /* GraphQL */ `
  query SchemaVersion {
    schemaVersion
  }
`;
