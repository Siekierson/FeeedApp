import React from 'react';
import styled from "styled-components";
import Option from '../atoms/Option';
const SelectOne = styled.select`
font-size:40px;
outline: none;
border:none;
background-color: rgb(0,0,0,.6);
border-bottom:2px solid white;
color:white;
`
const Select = ({method,data}) => {
    return(
    <SelectOne onChange={method}>
        {data.map(item=>(<Option value={item} key={item}>{item}</Option>))} 
    </SelectOne>       
    )
}
export default Select;