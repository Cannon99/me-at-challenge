import React, { useEffect, useState } from 'react'
import WebView from 'react-native-webview'
import { Message, useWebViewMessage } from 'react-native-react-bridge'
import { StyleSheet, View, VirtualizedList } from 'react-native'
import Header from '../components/home/Header'
import { colors } from '../theme/styles'
import MainButton from '../components/home/MainButton'
import { WebViewData } from '../models/custom/WebViewData'
import { Customer } from '../models/custom/Customer'
import RegisterCustomerEmail from '../webview-pages/RegisterCustomerEmail'
import CustomerItem from '../components/home/CustomerItem'
import NoCustomers from '../components/home/NoCustomers'

const Home: () => JSX.Element = () => {
    const [customers, setCustomers] = useState<Customer[]>([])
    const [webViewOpened, setWebViewOpened] = useState<boolean>(false)

    useEffect(() => {}, [customers])

    const webViewHandler: (message: Message<WebViewData | Customer>) => void = (
        message: Message<WebViewData | Customer>
    ) => {
        if (message.type && (message.data as WebViewData).closeWebView) {
            setWebViewOpened(false)
        } else if (message.type && (message.data as Customer)) {
            setCustomers([...customers, message.data as Customer])
        }
    }
    const { ref, onMessage, emit } = useWebViewMessage(webViewHandler)

    const getWebView: () => JSX.Element = () => (
        <WebView
            ref={ref}
            source={{ html: RegisterCustomerEmail }}
            onMessage={onMessage}
        />
    )

    const deleteCustomer: (selectedId: string) => void = (
        selectedId: string
    ) => {
        console.log(selectedId)
        setCustomers(
            [...customers].filter(
                (customer: Customer, index: number) => selectedId != customer.id
            )
        )
    }

    return webViewOpened ? (
        getWebView()
    ) : (
        <>
            <Header title="Beverage Inc."></Header>
            <View style={styles.mainContainer}>
                <>
                    <MainButton
                        title="Register User From WebView"
                        setWebViewOpened={setWebViewOpened}></MainButton>
                </>
                {customers.length > 0 ? (
                    <VirtualizedList
                        style={styles.listContainer}
                        data={customers}
                        renderItem={({ item }) => {
                            return (
                                <CustomerItem
                                    name={item.name}
                                    email={item.email}
                                    id={item.id}
                                    deleteCustomer={
                                        deleteCustomer
                                    }></CustomerItem>
                            )
                        }}
                        keyExtractor={(customer: Customer, index: number) =>
                            index.toString()
                        }
                        getItemCount={() => customers.length}
                        getItem={(customers: Customer[], index: number) =>
                            customers[index]
                        }
                    />
                ) : (
                    <NoCustomers />
                )}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        padding: '5%',
        backgroundColor: colors.light
    },
    listContainer: {
        width: '100%'
    }
})

export default Home
