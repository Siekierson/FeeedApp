import React,{useState,useContext} from 'react';
import {RestaurantsContext} from '../../contexts/RestaurantsContext';
import styled from 'styled-components'
import ButtonLink from '../../components/atoms/ButtonLink';
import Button from '../../components/atoms/Button';
import Wrapper from '../../components/atoms/Wrapper';

const EditSidebar= styled.ul`
position:fixed;
list-style:none;
transition:.5s;
height: 100vh;
width:400px;
right:${({isEditing}) => isEditing?'0':'-400px'};
top:0;
`
const Flex = styled.div`
margin:40px 20%;
width:60%;
`
const FlexItem = styled.li`
display:flex;
width:100%;
margin:30px;
justify-content:space-between;
`
const Sizes = styled.div`
display:grid;
width:35%;
font-size:1.8rem;
grid-template-columns: repeat(3,1fr);
`
const ClassicOrder = () => {
    const {active, restaurants,setOrder,hotMeal, setHotMeal} = useContext(RestaurantsContext);
    const [isEditing,setEditing]=useState(false);
    const pizzas = restaurants.default_meals;
    const addToOrder=()=>setOrder(prev=>[...prev,hotMeal])
    const isDuplicate=(item)=>{
        const duplicate=hotMeal.bonus.map(i=>(i.name===item.name));
        if(duplicate.indexOf(true)===-1){setHotMeal(prev=>({...prev,
            bonus:[...hotMeal.bonus,{name:item.name,value:item.value[hotMeal.size]}]
        }))}
        }
    return(
        <Wrapper up>
        <h1>Klasyczne Menu restauracji {active}</h1>
        <Flex>
            <FlexItem>Nazwa<Sizes>{restaurants.sizes.map(item=><h1 key={item}>{item+'cm  '}</h1>)}</Sizes></FlexItem>
            {pizzas.map(item=>(
                <FlexItem key={item.name}>
                    {item.name} ({item.description})
                    <Sizes>{item.value.map((size,index)=>
                        <Button key={size} onClick={()=>setHotMeal({name:item.name, size:index, value:size,bonus:[]})}>
                            {size+' zł'}
                        </Button>)}
                    </Sizes>
                </FlexItem>
            ))}
        </Flex>
        {hotMeal&&<Button onClick={()=>setEditing(!isEditing)}>edytuj składniki</Button>}
        <EditSidebar isEditing={isEditing}>
            <Button onClick={()=>setEditing(false)}>Zakończ edycje</Button>
            {restaurants.ingredient.map((item,index)=>
                <li key={item.name}>
                    <Button onClick={()=>isDuplicate(item)}>
                        {item.name}
                    </Button>
                    <div>
                        {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                    </div>
                </li>)}
        </EditSidebar>
        {hotMeal&&<>
        <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
        <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink></>}
        </Wrapper>
    )
}
export default ClassicOrder;