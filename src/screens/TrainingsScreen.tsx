import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from '../components/Themed'

type TrainingType = "WALKING" | "RUNNING"
type Training = {
    id: string
    date: string
    trainingDetails: {
        totalMinutes: Number
    }
    trainingType: TrainingType
}
type SetDataFunction = (data: Training[]) => void

const fetchTrainings = (setData: SetDataFunction) => {
    setData([{
        id: "1",
        date: "2020-05-17T23:00:00.000Z",
        trainingDetails: {
            totalMinutes: 30
        },
        trainingType: "WALKING",
    },{
        id: "2",
        date: "2020-05-20T23:00:00.000Z",
        trainingDetails: {
            totalMinutes: 40
        },
        trainingType: "RUNNING",
    },{
        id: "3",
        date: "2020-05-25T23:00:00.000Z",
        trainingDetails: {
            totalMinutes: 50
        },
        trainingType: "WALKING",
    }])
}

const initialTrainingValue: Training[] = []

export default function TrainingsScreen() {
    const [trainings, setTraining] = useState(initialTrainingValue)
    useEffect(() => fetchTrainings(setTraining), [])

    return (
        <View style={styles.container} >
            <Text style={styles.title}>
                Here we will show the trainings
            </Text>
            <View
                style={styles.separator}
                lightColor = "#eee"
                darkColor = "rgba(255,255,255,0.1)"
            />
            {
                trainings.map((training, index) => (
                    <View key={training.id || index} style={styles.training}>
                        <Text style={styles.trainingName}>
                            {training.trainingType}
                        </Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    training: {
        marginBottom: 15,
    },
    trainingName: {
        fontSize: 18,
    },
})