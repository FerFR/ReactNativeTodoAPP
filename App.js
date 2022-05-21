import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import TaskItem from './components/TaskItem';
import Header from './components/Header';
import Create from './components/Create';
export default function App() {
    const [modal, setModal] = useState(false);
    const [list, setList] = useState([]);
    const createTodo = (value) => {
        let newList = [...list, value];
        setList(newList);
    };
    const deleteTodo = (indexDelete) => {
        let newList = list.filter((value, index) => {
            return index !== indexDelete;
        });
        setList(newList);
    };
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar hidden />
            <Create
                close={setModal}
                isOpen={modal}
                create={createTodo}
                list={list}
            />
            <ScrollView>
                <Header openModal={setModal} />
                {list.map((value, index) => {
                    return (
                        <TaskItem
                            key={index}
                            index={index}
                            title={value}
                            del={deleteTodo}
                        />
                    );
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2d1b30',
        padding: 20,
    },
});
