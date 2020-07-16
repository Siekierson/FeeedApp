import React,{useState,useContext} from 'react';
import {RestaurantsContext} from 'contexts/RestaurantsContext';
import ButtonLink from 'components/atoms/ButtonLink';
import Button from 'components/atoms/Button';
import Wrapper from 'components/atoms/Wrapper';
import {EditSidebar,SidebarList,Flex,FlexItem,Sizes} from './styled/styledClassic';
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
            <SidebarList>
            {restaurants.ingredient.map((item,index)=>
                <li key={item.name}>
                    <Button onClick={()=>isDuplicate(item)}>
                        {item.name}
                    </Button>
                    <div>
                        {hotMeal.name?item.value[hotMeal.size]+' zł':item.value.map(item=>item+'zł  ')}
                    </div>
                </li>)}
                </SidebarList>
        </EditSidebar>
        {hotMeal&&<>
        <ButtonLink onClick={addToOrder} path='/submit' >Do kasy</ButtonLink>
        <ButtonLink onClick={addToOrder} path='/ClassicOrPersonalize'>Chce kolejną</ButtonLink></>}
        </Wrapper>
    )
}
export default ClassicOrder;