import React from 'react'
import styled from 'styled-components'
import ButtonLink from '../../components/atoms/ButtonLink';
const Wrapper = styled.div`
display:flex;
width:100%;
padding: 20% 40px 40px 40px;
justify-content: space-around;
`
const ClassicOrPersonalize = () => {
    return(
        <Wrapper>
            <ButtonLink path='/classic'>Klasyczne menu</ButtonLink>
            <ButtonLink path='/customized'>Własna kompozycja</ButtonLink> 
        </Wrapper>
    )
}
export default ClassicOrPersonalize;