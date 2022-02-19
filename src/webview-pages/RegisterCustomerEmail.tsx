import React, { useState } from 'react'
import { webViewRender, emit } from 'react-native-react-bridge/lib/web'
import * as CSS from 'csstype'
import { colors } from '../theme/styles'
import {
    Button,
    Input,
    InputLabel,
    LabelButton
} from '../components/register-customer-email/styled-components'

const Root: React.FC = () => {
    const closeWebView: () => void = () => {
        emit({ type: 'success', data: { closeWebView: true } })
    }

    const saveUser: () => void = () => {
        emit({ type: 'success', data: { name, email } })
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
                <LabelButton>Save</LabelButton>
            </Button>
            <Button onClick={closeWebView}>
                <LabelButton>Cancel</LabelButton>
            </Button>
        </div>
    )
}

const style: CSS.Properties = {
    backgroundColor: colors.light,
    height: '100%',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%'
}

export default webViewRender(<Root />)
