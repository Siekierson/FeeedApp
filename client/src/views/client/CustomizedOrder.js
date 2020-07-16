import React,{useContext,useState} from 'react';
import {RestaurantsContext} from '../../contexts/RestaurantsContext';
import styled from 'styled-components'
import ButtonLink from '../../components/atoms/ButtonLink';
import Button from '../../components/atoms/Button';
import Wrapper from '../../components/atoms/Wrapper'
import OpacityMotion from '../../components/atoms/OpacityMotion';
const List = styled.ul`
margin:20px;
list-style:none;
`
const ListItem = styled.ul`
margin:20px;
`

const CustomizedOrder = () => {
    const { restaurants,hotMeal,setOrder, setHotMeal} = useContext(RestaurantsContext);
    const [clicked,setClicked]=useState(false)
    const ingredients = restaurants.ingredient;
    const addToOrder=()=>setOrder(prev=>[...prev,hotMeal])
    const isDuplicate=(item)=>{
        const duplicate=hotMeal.bonus.map(i=>(i.name===item.name));
        if(duplicate.indexOf(true)===-1){setHotMeal(prev=>({...prev,
            bonus:[...hotMeal.bonus,{name:item.name,value:item.value[hotMeal.size]}]
        }))}
        }
    return(
        <Wrapper up>
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
                {clicked &&(<OpacityMotion><h3>A teraz składniki</h3>
                    {ingredients.map(item=>(
                    <ListItem key={item.name}>
                        <Button onClick={()=>isDuplicate(item)}>
                            {item.name}
                            <div>
                            {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                        </div>
                        </Button>
                        
                    </ListItem>
                ))}
                </OpacityMotion>)}
                {hotMeal&&<OpacityMotion>
        <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
        <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink></OpacityMotion>}
            </List>

        </Wrapper>
    )
}
export default CustomizedOrder;