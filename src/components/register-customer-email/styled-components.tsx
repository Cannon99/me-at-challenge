import styled from '@emotion/styled'
import { colors } from '../../theme/styles'

export const Button = styled.button`
    border-radius: 7px;
    background-color: ${colors.primary};
    padding: 10px 20px;
    margin-bottom: 5px;
    width: 100%;
`

export const ButtonLabel = styled.label`
    color: ${colors.light};
    font-weight: bold;
    font-size: 15px;
`

export const Input = styled.input`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid;
    border-color: ${colors.lightSupport};
    width: 100%;
    max-width: 100%;
    color: ${colors.textDark};
    font-weight: bold;
    font-size: 15px;
    margin: 7px 0 20px 0;

    ::placeholder {
        color: ${colors.lightSupport};
    }
`

export const InputLabel = styled.label`
    color: gray;
    font-weight: bold;
    font-size: 15px;
`
