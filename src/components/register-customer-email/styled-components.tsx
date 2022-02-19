import styled from '@emotion/styled'
import { colors } from '../../theme/styles'

export const Button = styled.button`
    border-radius: 7px;
    background: ${colors.wine};
    padding: 10px 20px;
    margin-bottom: 5px;
    width: 100%;
`

export const LabelButton = styled.label`
    color: white;
    font-weight: bold;
    font-size: 15px;
`

export const Input = styled.input`
    box-sizing: border-box;
    padding: 10px;
    border-radius: 7px;
    border: 1px solid;
    border-color: lightgray;
    width: 100%;
    max-width: 100%;
    color: gray;
    font-weight: bold;
    font-size: 15px;
    margin: 7px 0 20px 0;

    ::placeholder {
        color: lightgray;
    }
`

export const InputLabel = styled.label`
    color: gray;
    font-weight: bold;
    font-size: 15px;
`
