import React from 'react';
import styled from 'styled-components';
import Select from '../components/molecues/Select';
import {Link} from 'react-router-dom';


const Slogan = styled.h1`
color:white;
text-align:center;
`
const CityMeal = styled.div`
text-align:center;
color:white;
`

const StartView = () => {
    return(
        <>
               <Slogan>Zamów jedzenie teraz !</Slogan>
               <CityMeal>
                   Miasto: <Select/><br/>
                   Restauracja: <Select/>
                   <br/>
                   <Link to='/ClassicOrPersonalize'>
                   <button>Następny krok</button>
                   </Link>
               </CityMeal>
               </>
    )
} 
export default StartView;