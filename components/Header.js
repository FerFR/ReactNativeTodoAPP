import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({ openModal }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TODO</Text>
            <TouchableOpacity onPress={() => openModal(true)}>
                <MaterialIcons name="add-circle" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    container: {
        paddingBottom: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        maxHeight: 100,
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        width: '90%',
    },
});
