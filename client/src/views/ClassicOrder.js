import React,{useState,useContext} from 'react';
import {RestaurantsContext} from '../contexts/RestaurantsContext';
import styled from 'styled-components'
import ButtonLink from '../components/atoms/ButtonLink';
import Button from '../components/atoms/Button';

const EditSidebar= styled.div`
position:fixed;
height: 100vh;
width:400px;
right:${({isEditing}) => isEditing?'0':'-400px'};;
top:0;
`
const ClassicOrder = () => {
    const {active, restaurants, setOrder,hotMeal, setHotMeal} = useContext(RestaurantsContext);
    const [isEditing,setEditing]=useState(false);
    const pizzas = restaurants.default_meals;
    const addToOrder=()=>setOrder(prev=>[...prev,hotMeal])
    return(
        <>
        <h1>Klasyczne Menu restauracji {active}</h1>
        <ul>
            <li>Nazwa<div>{restaurants.sizes.map(item=>item+'cm  ')}</div></li>
            {pizzas.map(item=>(
                <li key={item.name}>
                    {item.name} ({item.description})
                    <div>{item.value.map((size,index)=>
                        <Button key={size} onClick={()=>setHotMeal({name:item.name, size:index, value:size,bonus:[]})}>
                            {size+' zł'}
                        </Button>)}
                    </div>
                </li>
            ))}
        </ul>
        {hotMeal&&<Button onClick={()=>setEditing(!isEditing)}>edytuj składniki</Button>}
        <EditSidebar isEditing={isEditing}>
            <Button onClick={()=>setEditing(false)}>Zakończ edycje</Button>
            {restaurants.ingredient.map((item,index)=>
                <li key={item.name}>
                    <Button onClick={()=>{
                        setHotMeal(prev=>({...prev,
                        bonus:[...hotMeal.bonus,{name:item.name,value:item.value[hotMeal.size]}]}))}}>
                        {item.name}
                    </Button>
                    <div>
                        {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                    </div>
                </li>)}
        </EditSidebar>
        <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
        <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink>
        </>
    )
}
export default ClassicOrder;