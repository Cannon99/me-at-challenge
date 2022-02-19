import React from 'react'
import { webViewRender, emit } from 'react-native-react-bridge/lib/web'
import * as CSS from 'csstype'
import styled from '@emotion/styled'

const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
`

const Root: React.FC = () => {
    const closeWebView = () => {
        emit({ type: 'success', data: { closeWebView: true } })
    }

    return (
        <div style={style}>
            <button onClick={closeWebView}>Close Web View</button>
        </div>
    )
}

const style: CSS.Properties = {
    backgroundColor: 'lightblue'
}

export default webViewRender(<Root />)
