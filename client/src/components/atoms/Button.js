import React from 'react'
import styled from 'styled-components'

const ButtonIn = styled.button`
padding:20px;
border-color:white;
background-color:transparent;
`
const Button = ({children,onClick}) => {
    return(
    <ButtonIn onClick={onClick}>{children}</ButtonIn>
    )
}
export default Button;