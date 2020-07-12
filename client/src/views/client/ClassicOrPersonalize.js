import React from 'react'
import styled from 'styled-components'
import ButtonLink from '../../components/atoms/ButtonLink';
import Wrapper from '../../components/atoms/Wrapper';
const Wrappero = styled(Wrapper)`
display:flex;
justify-content: space-around;
`
const ClassicOrPersonalize = () => {
    return(
        <Wrappero>
            <ButtonLink path='/classic'>Klasyczne menu</ButtonLink>
            <ButtonLink path='/customized'>Własna kompozycja</ButtonLink> 
        </Wrappero>
    )
}
export default ClassicOrPersonalize;