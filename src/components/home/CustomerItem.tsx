import { faClose, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { Divider } from 'react-native-elements'
import { Customer } from '../../models/custom/Customer'
import { colors, fonts } from '../../theme/styles'

const CustomerItem: (props: Customer) => JSX.Element = (props: any) => {
    useEffect(() => {
        console.log('Rei', props)
    })

    return (
        <View style={styles.containerCard}>
            <View style={styles.containerRow}>
                <FontAwesomeIcon style={styles.icon} size={22} icon={faUser} />
                <Text style={styles.text}>{props.name}</Text>
                <View style={styles.containerClose}>
                    <TouchableWithoutFeedback
                        onPress={() => props.deleteCustomer(props.id)}>
                        <FontAwesomeIcon
                            style={styles.closeIcon}
                            size={22}
                            icon={faClose}
                        />
                    </TouchableWithoutFeedback>
                </View>
            </View>

            <Divider color={colors.textDark} />
            <View style={styles.containerRow}>
                <FontAwesomeIcon
                    style={styles.icon}
                    size={22}
                    icon={faEnvelope}
                />
                <Text style={styles.text}>{props.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        backgroundColor: colors.lightSupport,
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        elevation: 5
    },
    containerRow: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10
    },
    icon: {
        color: colors.textDark,
        marginRight: 20
    },
    containerClose: {
        display: 'flex',
        alignItems: 'flex-end',
        flex: 1
    },
    closeIcon: {
        color: colors.textDark
    },
    text: {
        color: colors.textDark,
        fontSize: 15,
        fontFamily: fonts.primary
    }
})

export default CustomerItem
