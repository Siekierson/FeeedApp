import React from 'react'
import styled from 'styled-components'

const ButtonIn = styled.button`
padding:20px 40px;
font-size:3rem;
border-radius:45px;
border-color:white;
background-color:transparent;
`
const Button = ({children,onClick}) => {
    return(
    <ButtonIn onClick={onClick}>{children}</ButtonIn>
    )
}
export default Button;