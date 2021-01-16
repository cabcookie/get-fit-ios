import { Ionicons, FontAwesome5 } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import TrainingsScreen from '../screens/TrainingsScreen'
import HistoryScreen from '../screens/HistoryScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { BottomTabParamList, TrainingsParamList, HistoryParamList, ProfileParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme()

    return (
        <BottomTab.Navigator
            initialRouteName="Trainings"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
            <BottomTab.Screen
                name="Trainings"
                component={TrainingsNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="running" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="History"
                component={HistoryNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="user-alt" color={color} />
                }}
            />
        </BottomTab.Navigator>
    )
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <FontAwesome5 size={30} style={{ marginBottom: -3 }} {...props} />
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TrainingsStack = createStackNavigator<TrainingsParamList>()

function TrainingsNavigator() {
    return (
        <TrainingsStack.Navigator>
            <TrainingsStack.Screen
                name="TrainingsScreen"
                component={TrainingsScreen}
                options={{ headerTitle: 'Trainings' }}
            />
        </TrainingsStack.Navigator>
    )
}

const HistoryStack = createStackNavigator<HistoryParamList>()

function HistoryNavigator() {
    return (
        <HistoryStack.Navigator>
            <HistoryStack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{ headerTitle: 'History' }}
            />
        </HistoryStack.Navigator>
    )
}

const ProfileStack = createStackNavigator<ProfileParamList>()

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{ headerTitle: "Profile" }}
            />
        </ProfileStack.Navigator>
    )
}
