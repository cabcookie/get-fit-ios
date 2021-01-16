export const schema = {
    "models": {
        "Training": {
            "name": "Training",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "trainingType": {
                    "name": "trainingType",
                    "isArray": false,
                    "type": {
                        "enum": "TrainingType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "date": {
                    "name": "date",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingDetails": {
                    "name": "trainingDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "TrainingDetails"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "executionDetails": {
                    "name": "executionDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "TrainingExecution"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "resultDetails": {
                    "name": "resultDetails",
                    "isArray": false,
                    "type": {
                        "nonModel": "TrainingResults"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "schemaVersion": {
                    "name": "schemaVersion",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "runningIntervall": {
                    "name": "runningIntervall",
                    "isArray": false,
                    "type": {
                        "nonModel": "RunningIntervall"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "runningWithBreaks": {
                    "name": "runningWithBreaks",
                    "isArray": false,
                    "type": {
                        "nonModel": "RunningWithBreaks"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "running": {
                    "name": "running",
                    "isArray": false,
                    "type": {
                        "nonModel": "Running"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "executionId": {
                    "name": "executionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingStarted": {
                    "name": "trainingStarted",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingFinished": {
                    "name": "trainingFinished",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "resultSeconds": {
                    "name": "resultSeconds",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultAverageBpm": {
                    "name": "resultAverageBpm",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultCalories": {
                    "name": "resultCalories",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Trainings",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "aws_iam",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "read",
                                    "update",
                                    "delete"
                                ],
                                "identityClaim": "cognito:username"
                            },
                            {
                                "allow": "public",
                                "provider": "iam",
                                "operations": [
                                    "read"
                                ]
                            },
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "read"
                                ]
                            },
                            {
                                "groupClaim": "cognito:groups",
                                "provider": "userPools",
                                "allow": "groups",
                                "groups": [
                                    "everyone"
                                ],
                                "operations": [
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "username": {
                    "name": "username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "birthYear": {
                    "name": "birthYear",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "iftttTrigger": {
                    "name": "iftttTrigger",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "iftttKey": {
                    "name": "iftttKey",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "schemaVersion": {
                    "name": "schemaVersion",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "operations": [
                                    "create",
                                    "read",
                                    "update"
                                ],
                                "identityClaim": "cognito:username"
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "TrainingType": {
            "name": "TrainingType",
            "values": [
                "RUNNING_INTERVALL",
                "RUNNING_WITH_BREAKS",
                "RUNNING",
                "RUNNING_SLOWLY",
                "WALKING",
                "WALKING_SLOWLY",
                "RUNNING_INTERVALL_SLOWLY",
                "WALKING_INTERVALL"
            ]
        }
    },
    "nonModels": {
        "TrainingDetails": {
            "name": "TrainingDetails",
            "fields": {
                "totalMinutes": {
                    "name": "totalMinutes",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "intervalls": {
                    "name": "intervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesPerIntervall": {
                    "name": "minutesPerIntervall",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesBetweenIntervalls": {
                    "name": "minutesBetweenIntervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TrainingExecution": {
            "name": "TrainingExecution",
            "fields": {
                "executionId": {
                    "name": "executionId",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingStarted": {
                    "name": "trainingStarted",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "trainingFinished": {
                    "name": "trainingFinished",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "TrainingResults": {
            "name": "TrainingResults",
            "fields": {
                "resultSeconds": {
                    "name": "resultSeconds",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultAverageBpm": {
                    "name": "resultAverageBpm",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultCalories": {
                    "name": "resultCalories",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultMeters": {
                    "name": "resultMeters",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RunningIntervall": {
            "name": "RunningIntervall",
            "fields": {
                "totalMinutes": {
                    "name": "totalMinutes",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "intervalls": {
                    "name": "intervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesPerIntervall": {
                    "name": "minutesPerIntervall",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesBetweenIntervalls": {
                    "name": "minutesBetweenIntervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "intervallBpmPercentFrom": {
                    "name": "intervallBpmPercentFrom",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "intervallBpmPercentTo": {
                    "name": "intervallBpmPercentTo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "breakBpmPercentFrom": {
                    "name": "breakBpmPercentFrom",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "breakBpmPercentTo": {
                    "name": "breakBpmPercentTo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultMeters": {
                    "name": "resultMeters",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "RunningWithBreaks": {
            "name": "RunningWithBreaks",
            "fields": {
                "intervalls": {
                    "name": "intervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesPerIntervall": {
                    "name": "minutesPerIntervall",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "minutesBetweenIntervalls": {
                    "name": "minutesBetweenIntervalls",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "runningBpmPercentFrom": {
                    "name": "runningBpmPercentFrom",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "runningBpmPercentTo": {
                    "name": "runningBpmPercentTo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultMeters": {
                    "name": "resultMeters",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Running": {
            "name": "Running",
            "fields": {
                "totalMinutes": {
                    "name": "totalMinutes",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "runningBpmPercentFrom": {
                    "name": "runningBpmPercentFrom",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "runningBpmPercentTo": {
                    "name": "runningBpmPercentTo",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "resultMeters": {
                    "name": "resultMeters",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "7df253dc4fb837218427ac04876805ec"
};