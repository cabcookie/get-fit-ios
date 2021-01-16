const AWS = require("aws-sdk")
const stepFn = new AWS.StepFunctions()
const STEPFN_ARN = "arn:aws:states:eu-west-1:691062780315:stateMachine:gfaSendNotifications"

exports.handler = (event, context, callback) => {
    const params = {
        stateMachineArn: STEPFN_ARN,
        input: event.queryStringParameters.data,
    }
    stepFn.startExecution(params, (err, data) => {
        if (err) {
            console.log("Error", err)
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: "An error occured when executing the Lambda function that should execute the StepFunctions"
                }),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
    
            callback(null, response)

        } else {
            console.log("Data", data)
            const response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: "StepFunctions executed",
                    input: data
                }),
                headers: {
                    "Access-Control-Allow-Origin": "*",
                }
            }
            callback(null, response)
        }
    })
}
