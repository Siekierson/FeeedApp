import React,{useContext,useEffect} from 'react';
import styled from 'styled-components';
import Select from '../components/molecues/Select';
import {Link} from 'react-router-dom';
import {RestaurantsContext} from '../contexts/RestaurantsContext';

const Slogan = styled.h1`
color:white;
text-align:center;
`
const CityMeal = styled.div`
text-align:center;
color:white;
`

const StartView = () => {
    const {active,setActive,setRestaurants} = useContext(RestaurantsContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/meals/${active}`).then(data=>data.json()).then(data=>setRestaurants(data)) //get restaurants and push to context
      },[active,setRestaurants])
    return(
        <>   
               <Slogan>Zamów jedzenie teraz !</Slogan>
               <CityMeal>
                   Restauracja: <Select method={e=>setActive(e.target.value)} data={['Pizzeria Karolina','Pizzeria Pepperoni']}/>
                   <br/>
                   <Link to='/ClassicOrPersonalize'>
                   <button>Następny krok</button>
                   </Link>
               </CityMeal>
        </>
    )
} 
export default StartView;