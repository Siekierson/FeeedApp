import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";
import {SecretContext} from '../../contexts/SecretContext';
const Login = ()=>{
  const [logpass,setLogpass]=useState({});
  const {setActive} = useContext(SecretContext);
  let history = useHistory();
  const handleInputChange = (event) => {
    const { value, name } = event.target;
    setLogpass(prev=>({...prev,
      [name]: value
    }));
  }
  const onSubmit = async(e) => {
    e.preventDefault();
    const {login,password}=logpass;
    await fetch(`http://localhost:5000/logRestaurant/${login}/${password}`).then(res =>res.json()).then(data=>{
      setActive(data.fullname)
      history.push("/panel")
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
    return (
      <form onSubmit={onSubmit}>
       <h1>Zaloguj się do panelu restauracji</h1>
        <input
          type="text"
          name="login"
          onChange={handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          required
        />
       <input type="submit"/>
      </form>
    );
}
export default Login