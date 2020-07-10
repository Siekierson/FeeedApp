import React, { createContext, useState } from 'react';

export const SecretContext = createContext();

const SecretProvider = (props) => {
  const [active, setActive] = useState(false);
  const [orders, setOrders] = useState(false);
  return (
    <SecretContext.Provider value={{active, setActive,orders, setOrders}}>
      {props.children}
    </SecretContext.Provider>
  )
}

export default SecretProvider;