import React from 'react'
import styled from 'styled-components'
import ButtonLink from '../components/atoms/ButtonLink';
const ClassicOrder = () => {
    const pizzas = []
    return(
        <>
        <div>Klasyczne Menu</div>
        <ul>
            {pizzas.map(item=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        <ButtonLink path='/submit' >Do kasy</ButtonLink>
        <ButtonLink path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink>
        </>
    )
}
export default ClassicOrder;