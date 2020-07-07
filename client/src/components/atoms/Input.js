import React from 'react';
import styled from 'styled-components';

const InputIn=styled.input`
background-color:transparent;
padding:1px;
font-size:3rem;
outline:none;
border:none;
border-bottom:2px solid white;
`

const Input = (props) => {

    return(
        <InputIn {...props}/>
    )
}
export default Input;