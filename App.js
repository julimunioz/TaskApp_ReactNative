import React from "react";
import { Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {HomeScreen, TaskFormsScreen} from "./screens";

const Stack = createStackNavigator();

export default function App ()  {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                
                <Stack.Screen 
                    name = "HomeScreen"      
                    component = { HomeScreen }
                    options = { ({ navigation }) => ({
                        title: 'Tasks App',
                        headerStyle: {backgroundColor: "#222f3e"}, 
                        headerTitleStyle: {color: '#ffffff'},
                        headerTitleAlign: 'left',
                        headerRight: () => (
                            <TouchableOpacity onPress = { () => navigation.navigate("TaskFormsScreen") }>
                                <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New</Text>
                            </TouchableOpacity>
                        ),
                    })}
                />
                
                <Stack.Screen 
                    name = "TaskFormsScreen" 
                    component = { TaskFormsScreen } 
                    options={{
                        title: 'Create a Task',
                        headerStyle: {
                            backgroundColor: '#222f3e'
                        },
                        headerTitleStyle: {
                            color: '#ffffff'
                        },
                        headerTintColor: '#ffffff'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}