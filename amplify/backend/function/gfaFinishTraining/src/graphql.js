module.exports = {
    query: `query GetVersion(
        $id: ID!
    ) {
        getTraining(id: $id) {
            id
            _version
            executionDetails {
                trainingStarted
            }
        }
    }`,
    mutation: `mutation UpdateTraining(
        $id: ID!,
        $trainingFinished: String,
        $trainingStarted: String,
        $version: Int
    ) {
        updateTraining(input: {
            id: $id
            executionDetails: {
                trainingFinished: $trainingFinished
                trainingStarted: $trainingStarted
                executionId: ""
            }
            _version: $version
        }) {
            id
            _lastChangedAt
            _version
            date
            trainingType
            schemaVersion
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
        }
    }`,
}
