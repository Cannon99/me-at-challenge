import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Header as HeaderComponent } from 'react-native-elements'
import { HeaderAppProps } from '../../models/props/HeaderAppProps'
import { colors, fonts } from '../../theme/styles'

const Header: (props: HeaderAppProps) => JSX.Element = (
    props: HeaderAppProps
) => {
    const leftIcon: () => JSX.Element = () => (
        <View style={styles.containerData}>
            <FontAwesomeIcon
                style={styles.icon}
                size={50}
                icon={faChampagneGlasses}
            />
        </View>
    )

    return (
        <HeaderComponent
            style={styles.containerStyle}
            containerStyle={styles.containerStyle}
            elevated={true}
            backgroundColor={colors.primary}
            leftComponent={leftIcon()}
            centerComponent={
                <View style={styles.containerData}>
                    <Text style={styles.title}>{props.title}</Text>
                </View>
            }></HeaderComponent>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        paddingVertical: 0
    },
    title: {
        color: colors.light,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: fonts.primary
    },
    containerData: {
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%'
    },
    icon: {
        color: colors.light
    }
})

export default Header
