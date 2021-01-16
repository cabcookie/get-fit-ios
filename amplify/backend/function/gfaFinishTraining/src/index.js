/* Amplify Params - DO NOT EDIT
	API_GFATRAININGDATA_GRAPHQLAPIENDPOINTOUTPUT
	API_GFATRAININGDATA_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

require("es6-promise").polyfill()
require("isomorphic-fetch")
// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require("aws-sdk")
const AWSAppSyncClient = require("aws-appsync").default
const { AUTH_TYPE } = require("aws-appsync")
const { query, mutation } = require('./graphql')
const region = process.env.REGION
AWS.config.update({ region })
const url = process.env.API_GFATRAININGDATA_GRAPHQLAPIENDPOINTOUTPUT

const gql = require("graphql-tag")
const headers = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Headers": "*" }
const client = new AWSAppSyncClient({
    url,
    region,
    auth: {
        type: AUTH_TYPE.AWS_IAM,
        credentials: AWS.config.credentials
    },
    disableOffline: true
})
console.log("Client", client)

exports.handler = async event => {
    console.log("Event", event)
    console.log("Mutation", mutation)

    const trainingId = event.reduce((prev, curr) => prev || curr.trainingId, null)
    const trainingFinished = new Date().toISOString()

    try {
        const queryVersion = await client.query({
            query: gql(query),
            variables: {
                id: trainingId
            },
            fetchPolicy: "network-only"
        })
        
        const result = await client.mutate({
            mutation: gql(mutation),
            variables: {
                id: trainingId,
                trainingFinished,
                trainingStarted: queryVersion.data.getTraining.executionDetails.trainingStarted,
                version: queryVersion.data.getTraining._version
            },
            fetchPolicy: "no-cache",
        })
        console.log("Result", result.data)

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({
                message: "Finished training successfully.",
                trainingId,
                result: result.data,
                trainingFinished,
            }),
        }

    } catch (error) {
        console.log("Error", error)
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                message: error.message,
                error,
            }),
        }
    }
}
