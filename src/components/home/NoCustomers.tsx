import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../theme/styles'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const NoCustomers: () => JSX.Element = () => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon
                style={styles.icon}
                size={50}
                icon={faCircleXmark}
            />

            <Text style={styles.text}>No customers submitted</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '50%'
    },
    icon: {
        color: colors.textDark,
        marginBottom: 15
    },
    text: {
        color: colors.textDark,
        fontSize: 15,
        fontFamily: fonts.primary,
        textAlign: 'center'
    }
})

export default NoCustomers
