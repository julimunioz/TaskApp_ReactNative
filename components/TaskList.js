import React, {useState, useEffect, useCallback} from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import {deleteTasks, getTasks} from '../api';
import {TaskItem} from './'

export const TaskList = () => {
 
    const [tasks, setTasks] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    const isFocused = useIsFocused();

    const loadTasks = async () => {
        const resp = await getTasks();
        setTasks(resp);
    }

    useEffect(() => {
       loadTasks();
    }, [isFocused]);

    const handleDelete = async (id) => {
        await deleteTasks(id);
        await loadTasks();
    }
        
    const renderItem = ({item}) => {
        return <TaskItem task={item} handleDelete={handleDelete}></TaskItem>
    };

    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        await loadTasks();
        setRefreshing(false);
    });
    

    return (
        <FlatList 
            style={{width: '100%'}}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}

