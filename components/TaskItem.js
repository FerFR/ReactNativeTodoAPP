import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
const TaskItem = ({ index, title, del }) => {
    return (
        <View style={styles.container}>
            <View style={styles.indexContainer}>
                <Text style={styles.index}>{index}</Text>
            </View>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{title}</Text>
                <TouchableOpacity onPress={() => del(index)}>
                    <MaterialIcons name="delete" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default TaskItem;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        flex: 1,
        maxHeight: 100,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 40,
    },
    indexContainer: {
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#503954',
    },
    index: {
        color: 'white',
        fontSize: 30,
    },
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#503954',
        marginLeft: 20,
        borderRadius: 8,
        padding: 16,
    },
    task: {
        color: 'white',
        width: '90%',
        fontSize: 25,
    },
});
