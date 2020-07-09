import React, { createContext, useState } from 'react';

export const SecretContext = createContext();

const SecretProvider = (props) => {
  const [active, setActive] = useState(false);
  return (
    <SecretContext.Provider value={{active, setActive}}>
      {props.children}
    </SecretContext.Provider>
  )
}

export default SecretProvider;