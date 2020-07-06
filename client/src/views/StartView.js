import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import Select from '../components/molecues/Select';
import ButtonLink from '../components/atoms/ButtonLink';
import {Link} from 'react-router-dom';
import {RestaurantsContext} from '../contexts/RestaurantsContext';

const Wrapper = styled.div`
color:white;
width:100%;
padding: 20% 40px 40px 40px;
text-align:center;
`
const CityMeal = styled.div`
margin:25px 0;
`

const StartView = () => {
    const {active,setActive,setRestaurants} = useContext(RestaurantsContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/meals/${active}`).then(data=>data.json()).then(data=>setRestaurants(data)) //get restaurants and push to context
      },[active,setRestaurants])
    return(
        <Wrapper>   
            <h1>Zamów jedzenie teraz !</h1>
            <CityMeal>
                   Restauracja: <Select method={e=>setActive(e.target.value)} data={['Pizzeria Karolina','Pizzeria Pepperoni']}/>
                   <br/>
            </CityMeal>
            <ButtonLink path='/ClassicOrPersonalize'>
                   Następny krok
            </ButtonLink>
        </Wrapper>
    )
} 
export default StartView;