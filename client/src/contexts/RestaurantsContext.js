import React, { createContext,useEffect, useState } from 'react';

export const RestaurantsContext = createContext();

const RestaurantsProvider = (props) => {
  const [restaurants, setRestaurants] = useState(false);
  const [active, setActive] = useState('Pizzeria Karolina');
  const [order, setOrder] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/restaurants').then(data=>data.json()).then(data=>setRestaurants(data)) //get restaurants and push to context
  },[])
  return (
    <RestaurantsContext.Provider value={{restaurants, setRestaurants,active, setActive,order, setOrder}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantsProvider;