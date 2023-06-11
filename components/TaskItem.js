import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const TaskItem = ({task, handleDelete}) => {

    const navigation = useNavigation();

    return (
        <View style = { style.itemContainer }>

            <TouchableOpacity onPress={() => navigation.navigate('TaskFormsScreen', { id: task.id }) }>
                <Text style = {[ style.itemTitle, {fontWeight: 'bold'} ] }> {task.title} </Text>
                <Text style = { style.itemTitle }> {task.description}</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={{backgroundColor : '#EE5253', padding: 7, borderRadius: 5}}
                onPress={() => handleDelete(task.id)}
            >
                <Text style={{color: 'white'}}>Delete</Text>
            </TouchableOpacity>
        </View>
  )
}

const style = StyleSheet.create({
    itemContainer:{
        padding: 20,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#222f3e',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle:{
        color: '#222f3e'
    },
});
