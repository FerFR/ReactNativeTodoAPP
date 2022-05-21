import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    TextInput,
    Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Create = ({ isOpen, close, create }) => {
    const [value, setValue] = useState('');
    const handleSubmit = () => {
        if (!Boolean(value)) return;
        create(value);
        setValue('');
        close(false);
    };
    return (
        <Modal
            statusBarTranslucent={true}
            animationType="fade"
            transparent={true}
            visible={isOpen}
        >
            <View style={styles.container}>
                <View style={styles.blackscreen} />
                <View style={styles.modal}>
                    <View style={styles.header}>
                        <Text style={styles.text}>Create new Rule</Text>
                        <TouchableOpacity onPress={() => close(false)}>
                            <MaterialIcons
                                name="close"
                                color="white"
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TextInput
                            style={styles.input}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                        />
                        <Button
                            title="Create"
                            color="purple"
                            onPress={handleSubmit}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};
export default Create;
const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
    },
    container: {
        position: 'relative',
        flex: 1,
    },
    blackscreen: {
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    modal: {
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#2d1b30',
        width: 300,
        height: 200,
        top: '10%',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 50,
    },
    input: {
        height: 50,
        backgroundColor: '#503954',
        color: 'white',
        borderRadius: 4,
        paddingHorizontal: 15,
        fontSize: 20,
    },
});
