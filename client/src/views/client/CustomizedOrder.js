import React,{useContext,useState} from 'react';
import {RestaurantsContext} from '../../contexts/RestaurantsContext';
import styled from 'styled-components'
import ButtonLink from '../../components/atoms/ButtonLink';
import Button from '../../components/atoms/Button';

const Wrapper = styled.div`
padding: 10%;
`
const List = styled.ul`
margin:20px;
list-style:none;
`
const ListItem = styled.ul`
margin:20px;
`

const CustomizedOrder = () => {
    const { restaurants, setOrder,hotMeal, setHotMeal} = useContext(RestaurantsContext);
    const [clicked,setClicked]=useState(false)
    const ingredients = restaurants.ingredient;
    const addToOrder=()=>setOrder(prev=>[...prev,hotMeal])
    return(
        <Wrapper>
            <h1>Twoja kompozycja dania !</h1>
            <h2>Składniki do wyboru</h2>
            <List>
                <ListItem>Wybierz rozmiar 
                    <div>
                        {restaurants.customized.map((item,index)=>
                            <Button key={index} onClick={()=>{
                                setHotMeal({name:"Własna", size:index, value:item.value,bonus:[]});
                                setClicked(true);
                                }}>
                                {item.size+'cm  '}
                            </Button>)}
                    </div>
                </ListItem>
                <h3>A teraz składniki</h3>
                {clicked &&(ingredients.map(item=>(
                    <ListItem key={item.name}>
                        <Button onClick={()=>{
                            setHotMeal(prev=>({...prev,
                            bonus:[...hotMeal.bonus,{name:item.name,value:item.value[hotMeal.size]}]}))}}>
                            {item.name}
                            <div>
                            {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                        </div>
                        </Button>
                        
                    </ListItem>
                )))}
                
                <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
                <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink>
            </List>

        </Wrapper>
    )
}
export default CustomizedOrder;