import React from 'react'
// import styled from 'styled-components'
import ButtonLink from '../components/atoms/ButtonLink';

const CustomizedOrder = () => {
    const ingredients = []
    return(
        <>
        <div>Składniki do wyboru</div>
        <ul>
            {ingredients.map(item=>(
                <li key={item}>{item}</li>
            ))}
        </ul>
        <ButtonLink path='/submit' >Do kasy</ButtonLink>
        <ButtonLink path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink>
        </>
    )
}
export default CustomizedOrder;