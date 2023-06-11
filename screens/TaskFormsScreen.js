import React, {useState, useEffect} from 'react';
import { TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Layout } from '../components';
import { postTasks, getTask, updateTask } from '../api';

export const TaskFormsScreen = ({ navigation, route }) => {
  
  const [task, setTask] = useState({
    title: '',
    description: '',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (name, value) => setTask({...task, [name] : value });

  const handleSubmit = async () => {
    if (!editing) {
      await postTasks(task);
    
    } else {
      await updateTask(route.params.id, task)
    }
    
    navigation.navigate('HomeScreen');
  };

  useEffect(() => {
    if ( route.params && route.params.id ){
      navigation.setOptions({headerTitle: 'Updating a Task'});
      setEditing(true);
      
      ( async () => {
        const res = await getTask(route.params.id);
        setTask({ title: task.title, description: task.description });
      })();
    }
  }, [])
  
  return (
    <Layout>
      
      <TextInput
        style = {styles.input}
        placeholder='Write a Title'
        placeholderTextColor = '#10ac84'
        onChangeText={(text) => handleChange('title', text)}
        value={task.title}
      />

      <TextInput
        style = {styles.input}
        placeholder='Write a Description'
        placeholderTextColor = '#10ac84'
        onChangeText={(text) => handleChange('description', text)}
        value={task.description}
      />

      {
        !editing ? (
          <TouchableOpacity style = {styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Save Task</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style = {styles.buttonSave} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Update Task</Text>
          </TouchableOpacity>
        )
      }

    
    </Layout>
  )
}

const styles = StyleSheet.create({
  input: {
    width: '90%',
    fontSize: 15,
    marginBottom: 7,
    borderWidth: 1,
    borderColor: '#10ac84',
    height: 40,
    borderRadius: 10,
    padding: 10,
    textAlign: 'center'
  },
  buttonSave: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#10ac84',
    width: '90%'
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center'
  },
  buttonUpdate: {
    padding: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginBottom: 3,
    backgroundColor: "E58E26",
    width: '90%'
  }
})