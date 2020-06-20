import React from 'react'
import styled from 'styled-components'

const OptionOne = styled.option`
color:white;
`
const Option = ({children}) => {
    return(
    <OptionOne>{children}</OptionOne>
    )
}
export default Option;