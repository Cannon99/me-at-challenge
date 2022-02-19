import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import { Message, useWebViewMessage } from 'react-native-react-bridge'
import { StyleSheet, View } from 'react-native'
import Header from '../components/home/Header'
import { colors } from '../theme/styles'
import MainButton from '../components/home/MainButton'
import { WebViewData } from '../models/custom/WebViewData'
import { Customer } from '../models/custom/Customer'
import RegisterCustomerEmail from '../webview-pages/RegisterCustomerEmail'

const Home: () => JSX.Element = () => {
    const [customers, setCustomers] = useState<Customer[]>([])
    const [webViewOpened, setWebViewOpened] = useState<boolean>(false)

    useEffect(() => {
        console.log(customers)
    }, [customers])

    const webViewHandler: (message: Message<WebViewData | Customer>) => void = (
        message: Message<WebViewData | Customer>
    ) => {
        if ((message.data as WebViewData).closeWebView) {
            setWebViewOpened(false)
        } else if (message.data as Customer) {
            setCustomers([...customers, message.data as Customer])
        }
    }
    const { ref, onMessage, emit } = useWebViewMessage(webViewHandler)

    const getWebView: () => JSX.Element = () => (
        <WebView
            ref={ref}
            source={{ html: RegisterCustomerEmail }}
            onMessage={onMessage}
            containerStyle={styles.webView}
        />
    )

    return webViewOpened ? (
        getWebView()
    ) : (
        <>
            <Header title="Beverage Inc."></Header>
            <View style={styles.mainContainer}>
                <MainButton
                    title="Open Web"
                    setWebViewOpened={setWebViewOpened}></MainButton>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: colors.light
    },
    webView: {
        display: 'flex',
        flex: 1,
        height: '100%'
    }
})

export default Home
