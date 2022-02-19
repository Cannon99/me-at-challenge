import React, { useState } from 'react'
import { webViewRender, emit } from 'react-native-react-bridge/lib/web'
import * as CSS from 'csstype'
import { colors } from '../theme/styles'
import {
    Button,
    Input,
    InputLabel,
    ButtonLabel
} from '../components/register-customer-email/styled-components'
import { Constants } from '../config/constants'

const RegisterCustomerEmail: React.FC = () => {
    const closeWebView: () => void = () => {
        emit({ type: Constants.success, data: { closeWebView: true } })
    }

    const saveUser: () => void = () => {
        emit({
            type: Constants.success,
            data: { name, email, id: Math.random().toString() }
        })
        closeWebView()
    }

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    return (
        <div style={style}>
            <InputLabel>Name</InputLabel>
            <Input
                value={name}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setName(event.target.value)
                }
                placeholder="Type your name..."></Input>
            <InputLabel>Email</InputLabel>
            <Input
                value={email}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(event.target.value)
                }
                placeholder="Type your email..."></Input>
            <Button onClick={saveUser}>
                <ButtonLabel>Save</ButtonLabel>
            </Button>
            <Button onClick={closeWebView}>
                <ButtonLabel>Cancel</ButtonLabel>
            </Button>
        </div>
    )
}

const style: CSS.Properties = {
    backgroundColor: colors.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%'
}

export default webViewRender(<RegisterCustomerEmail />)
