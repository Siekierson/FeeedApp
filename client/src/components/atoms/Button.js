import React from 'react'
import styled from 'styled-components'

const ButtonIn = styled.button`
padding:20px;
`
const Button = ({children}) => {
    return(
    <ButtonIn>{children}</ButtonIn>
    )
}
export default Button;