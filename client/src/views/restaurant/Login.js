import React, { useState,useContext } from 'react';
import { useHistory } from "react-router-dom";
import {SecretContext} from '../../contexts/SecretContext';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
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
        <Input
          type="text"
          name="login"
          onChange={handleInputChange}
          required
        /><br/>
        <Input
          type="password"
          name="password"
          onChange={handleInputChange}
          required
        /><br/>
       <Button type="submit">Przejdź</Button>
      </form>
    );
}
export default Login