import React,{useContext,useState} from 'react';
import {RestaurantsContext} from '../contexts/RestaurantsContext';
import ButtonLink from '../components/atoms/ButtonLink';
import styled from 'styled-components'

const AlertH = styled.h2`
color:red;
display:${({invalid})=>invalid?'block':'none'};
`

const SubmitOrder = () => {
    const {order,restaurants} = useContext(RestaurantsContext);
    const [data,addData] = useState({});
    const [invalid,setValid] = useState(false)
    const changeOneInput = (e) =>{
        const {className,value}=e.target
        addData(prev=>({...prev,
            [className]:value
        }))
        setValid(false)
    }
    const  maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }
    const calcValue=()=>{
        let value=0;
        order.forEach(item=>{
            value+=item.value;
            item.bonus.map(bon=>value+=bon.value)
        })
        return value
    }
    const sendOrder =(e) =>{  
        e.preventDefault()
        const value=calcValue();  
        const body = {
            date: new Date().toLocaleString(),
            value:`${value} zł`,
            order_description: order,
            client_data:data
        }
        order.length&&data.name.length&&data.surname.length&&data.phone.length===9&&data.city.length&&data.street.length&&data.homeNumber.length?(fetch(`http://localhost:5000/order`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          }).then(data=>console.log(data))):(setValid(true))
    }
    return(
        <>
        <h1>Podsumowanie</h1>
        <ul>
            {order.map((item,index)=>(
                <li key={index}>
                    <h1>{item.name} {restaurants.sizes[item.size]}cm ({item.value} zł) </h1>
                    <h2>{item.bonus.length>0 && 'dodatkowo:'+item.bonus.map(item=>` ${item.name} (${item.value} zł)`)}</h2>
                </li>
            ))}
        </ul>
        <ButtonLink path='/ClassicOrPersonalize'>Zapomniałem/am czegoś</ButtonLink>
        <form onSubmit={sendOrder}>
            <AlertH invalid={invalid}>Nieprawidłowo wypełniono, nie wysłano zamówienia (sprawdź uważnie wszystkie pola)</AlertH>
            <label>Imię: <input required className='name' onChange={changeOneInput}/></label><br/>
            <label>Nazwisko: <input required className='surname' onChange={changeOneInput}/></label><br/>
            <label>Numer telefonu: <input required type='number' maxLength="9" onInput={maxLengthCheck} className='phone' onChange={changeOneInput} /></label><br/>
            <label>Email: <input  className='email' onChange={changeOneInput} /></label><br/>
            <label>Miasto: <input required className='city' onChange={changeOneInput}/></label><br/>
            <label>Ulica: <input required className='street' onChange={changeOneInput}/></label><br/>
            <label>Numer domu lub bloku/mieszkania: <input required type='number' className='homeNumber' onChange={changeOneInput}/></label><br/>
            <button type='submit'>złóż zamówienie</button>
        </form>
        </>
    )
}
export default SubmitOrder;