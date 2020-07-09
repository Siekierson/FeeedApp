import React, { createContext, useState } from 'react';

export const SecretContext = createContext();

const SecretProvider = (props) => {
  const [secret, setSecret] = useState(false);
  return (
    <SecretContext.Provider value={{secret, setSecret}}>
      {props.children}
    </SecretContext.Provider>
  )
}

export default SecretProvider;