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
               <Slogan> Order meal now !</Slogan>
               <CityMeal>
                   City: <Select/><br/>
                   Restaurant: <Select/>
                   <br/>
                   <Link to='/ClassicOrPersonalize'>
                   <button>Next Step</button>
                   </Link>
               </CityMeal>
               </>
    )
} 
export default StartView;