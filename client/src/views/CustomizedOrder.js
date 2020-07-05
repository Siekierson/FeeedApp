import React,{useContext} from 'react';
import {RestaurantsContext} from '../contexts/RestaurantsContext';
// import styled from 'styled-components'
import ButtonLink from '../components/atoms/ButtonLink';
import Button from '../components/atoms/Button';

const CustomizedOrder = () => {
    const {active, restaurants, setOrder,hotMeal, setHotMeal} = useContext(RestaurantsContext);
    const ingredients = restaurants.ingredient;
    const addToOrder=()=>setOrder(prev=>[...prev,hotMeal])
    return(
        <>
        <h1>Składniki do wyboru</h1>
        <h2>Twoja kompozycja dania !</h2>
        <ul>
        <li>Wybierz rozmiar <div>{restaurants.customized.map((item,index)=><Button key={index} onClick={()=>setHotMeal({name:"Własna", size:index, value:item.value,bonus:[]})}>{item.size+'cm  '}</Button>)}</div></li>
            {ingredients.map(item=>(
                <li key={item.name}>
                <Button onClick={()=>{
                    setHotMeal(prev=>({...prev,
                    bonus:[...hotMeal.bonus,{name:item.name,value:item.value[hotMeal.size]}]}))}}>
                    {item.name}
                </Button>
                <div>
                    {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                </div>
            </li>
            ))}
        </ul>
        <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
        <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink>
        </>
    )
}
export default CustomizedOrder;