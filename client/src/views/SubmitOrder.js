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
    // const sendOrder = () =>{

    // }
    const  maxLengthCheck = (object) => {
        if (object.target.value.length > object.target.maxLength) {
         object.target.value = object.target.value.slice(0, object.target.maxLength)
          }
        }
    const sendFunction = (e) =>{
        e.preventDefault()
        data.name.length&&data.surname.length&&data.phone.length===9&&data.city.length&&data.street.length&&data.homeNumber.length?(console.log('tri')):(setValid(true))
    }
    return(
        <>
        <h1>Podsumowanie</h1>
        <ul>
            {order.map((item,index)=>(
                <li key={index}>
                    <h1>{item.name} {restaurants.sizes[item.size]}cm </h1>
                    <h2>{item.bonus.length>0 && 'dodatkowo:'+item.bonus.map(item=>` ${item.name}`)}</h2>
                </li>
            ))}
        </ul>
        <ButtonLink path='/ClassicOrPersonalize'>Zapomniałem/am czegoś</ButtonLink>
        <form onSubmit={sendFunction}>
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