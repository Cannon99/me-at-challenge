import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MainButtonProps } from '../../models/props/MainButtonProps'
import { colors, fonts } from '../../theme/styles'

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
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginBottom: 15
    },
    text: {
        padding: 20,
        color: colors.light,
        fontFamily: fonts.primary
    }
})

export default MainButton
