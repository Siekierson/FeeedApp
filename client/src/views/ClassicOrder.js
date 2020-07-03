import React,{useContext} from 'react';
import {RestaurantsContext} from '../contexts/RestaurantsContext';
// import styled from 'styled-components'
import ButtonLink from '../components/atoms/ButtonLink';
const ClassicOrder = () => {
    const {restaurants} = useContext(RestaurantsContext)
    const pizzas = []
    return(
        <>
        <h1>Klasyczne Menu</h1>
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