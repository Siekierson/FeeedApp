import React, { createContext, useState } from 'react';

export const RestaurantsContext = createContext();

const RestaurantsProvider = (props) => {
  const [restaurants, setRestaurants] = useState(false);
  const [active, setActive] = useState('Pizzeria Karolina');
  const [order, setOrder] = useState([]);
  const [hotMeal, setHotMeal] = useState(false);
  return (
    <RestaurantsContext.Provider value={{restaurants, setRestaurants,active, setActive,order, setOrder,hotMeal, setHotMeal}}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}

export default RestaurantsProvider;