import React,{useContext} from 'react';
import {RestaurantsContext} from '../contexts/RestaurantsContext';
// import styled from 'styled-components'

const SubmitOrder = () => {
    const {order,restaurants} = useContext(RestaurantsContext);
    return(
        <>
        {console.log(restaurants)}
        <h1>Podsumowanie</h1>
        <ul>
    {order.map((item,index)=><li key={index}><h1>{item.name} {restaurants.sizes[item.size]}cm </h1>{item.bonus.length>0 && 'dodatkowo:'+item.bonus.map(item=>` ${item.name}`)}</li>)}
        </ul>
        <form>

        </form>
        </>
    )
}
export default SubmitOrder;