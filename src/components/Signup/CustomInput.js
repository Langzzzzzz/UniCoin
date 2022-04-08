import { StyleSheet, Text, View, TextInput} from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry, prefix}) => {
    return (
        <View
            style={styles.container}>
                {prefix}
            <TextInput
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9FBFC',
        width: '100%',

        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        height:40,
        textAlignVertical: 'top',

        paddingHorizontal: 10,
        paddingVertical: 12,
        marginVertical: 5,
        flexDirection: 'row',
    },
    input: {},
});