import React, { useState } from 'react'
import WebView from 'react-native-webview'
import { Message, useWebViewMessage } from 'react-native-react-bridge'
import { StyleSheet, View } from 'react-native'
import RegisterEmail from '../webview-pages/RegisterEmail'
import Header from '../components/home/Header'
import { colors } from '../theme/styles'
import MainButton from '../components/home/MainButton'
import { WebViewData } from '../models/custom/WebViewData'

const Home: () => JSX.Element = () => {
    const [webViewOpened, setWebViewOpened] = useState(false)

    const webViewHandler: (message: Message<WebViewData>) => void = (
        message: Message<WebViewData>
    ) => {
        if (message.data.closeWebView) {
            setWebViewOpened(false)
        }
    }
    const { ref, onMessage, emit } = useWebViewMessage(webViewHandler)

    const getWebView: () => JSX.Element = () => (
        <WebView
            ref={ref}
            source={{ html: RegisterEmail }}
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
        height: '100%'
    }
})

export default Home
