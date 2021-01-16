const AWS = require("aws-sdk")
const stepFn = new AWS.StepFunctions()

exports.handler = (event, context, callback) => {
    const params = event. queryStringParameters
    stepFn.stopExecution(params, (err, data) => {
        if (err) {
            console.log("Error", err)
            const response = {
                statusCode: 500,
                body: JSON.stringify({
                    message: "An error occured when executing the Lambda function that should stop a running execution of a State Machine"
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
                    message: "StepFunction execution successfully stopped",
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
