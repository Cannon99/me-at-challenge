import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MainButtonProps } from '../../models/props/MainButtonProps'
import { colors } from '../../theme/styles'

const MainButton: (props: MainButtonProps) => JSX.Element = (
    props: MainButtonProps
) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => props.setWebViewOpened(true)}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.wine,
        borderRadius: 10
    },
    text: {
        padding: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default MainButton
