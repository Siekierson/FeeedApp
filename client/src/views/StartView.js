import React,{useContext} from 'react';
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
    const {setActive} = useContext(RestaurantsContext)
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