import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import Wrapper from 'components/atoms/Wrapper';
import Select from 'components/molecues/Select';
import ButtonLink from 'components/atoms/ButtonLink';
import {RestaurantsContext} from 'contexts/RestaurantsContext';

const CityMeal = styled.div`
margin:25px 0;
`
const Right = styled.div`
position:fixed;
top:5px;
right:5px;
`

const StartView = () => {
    const {active,setActive,setRestaurants} = useContext(RestaurantsContext);
    useEffect(()=>{
        fetch(`http://localhost:5000/meals/${active}`).then(data=>data.json()).then(data=>setRestaurants(data)) //get restaurants and push to context
      },[active,setRestaurants])
    return(
        <Wrapper maxs>   
            <h1>Zamów jedzenie teraz !</h1>
            <CityMeal>
                   Restauracja: <Select method={e=>setActive(e.target.value)} data={['Pizzeria Karolina','Pizzeria Pepperoni']}/>
                   <br/>
            </CityMeal>
            <ButtonLink path='/ClassicOrPersonalize'>
                   Następny krok
            </ButtonLink>
            <Right><ButtonLink path='/restaurant'>Panel</ButtonLink></Right>
        </Wrapper>
    )
} 
export default StartView;