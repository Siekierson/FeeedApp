import React,{useContext,useState} from 'react';
import {RestaurantsContext} from '../../contexts/RestaurantsContext';
import ButtonLink from '../../components/atoms/ButtonLink';
import Button from '../../components/atoms/Button';
import Input from '../../components/atoms/Input';
import Wrapper from '../../components/atoms/Wrapper';
import {AlertH,List,FlexItem,FlexLabel,Form} from './styled/styledSubmit';
const SubmitOrder = () => {
    const {active,order,setOrder,restaurants} = useContext(RestaurantsContext);
    const [data,addData] = useState({});
    const [invalid,setValid] = useState(false)
    const changeOneInput = (e) =>{
        const {name,value}=e.target
        addData(prev=>({...prev,
            [name]:value
        }))
        setValid(false)
    }
    const removePizza = (index) => {
        console.log(index)
        setOrder(order.filter((item,ind) => ind !== index))
    }
    const labels = [['Imię','name'],['Nazwisko','surname' ],['Numer telefonu','phone',true,true],['Email','email'],['Miasto','city'],['Ulica','street'],['Numer domu lub bloku/mieszkania','homeNumber']]
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
            rest_name:active,
            value:`${value} zł`,
            order_description: order,
            client_data:data
        };
        if(order.length&&data.name.length&&data.surname.length&&data.phone.length===9&&data.city.length&&data.street.length&&data.homeNumber.length){fetch(`http://localhost:5000/order`,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          alert('Wysłano')
        }
        else{
            setValid(true)
        }
    }
    return(
        <Wrapper up>
        <h1 style={{'padding':'20px'}}>Podsumowanie</h1>
        <List>
            {order.map((item,index)=>(
                <li key={index}>
                    <h2>{item.name} {restaurants.sizes[item.size]}cm ({item.value} zł) </h2>
                    <h3>{item.bonus.length>0 && 'dodatkowo:'+item.bonus.map(item=>` ${item.name} (${item.value} zł)`)}</h3>
                    <Button onClick={()=>removePizza(index)}>Jednak nie chce</Button>
                </li>
            ))}
            <h2>Całkowita wartość zamówienia: {calcValue()} zł</h2>
        </List>
        <ButtonLink path='/ClassicOrPersonalize'>Zapomniałem/am czegoś</ButtonLink>
        <AlertH invalid={invalid}>Nieprawidłowo wypełniono, nie wysłano zamówienia (sprawdź uważnie wszystkie pola i zamówienie(nie można wysłać pustego zamówienia))</AlertH>
        <Form onSubmit={sendOrder}>
            {
                labels.map(item=>(
                    <FlexLabel key={item[1]}>
                        <FlexItem>{item[0]}: </FlexItem>
                        <FlexItem><Input 
                        required 
                        type={item[2]?"number":"text"} 
                        maxLength={item[3]&&"9"}
                        onInput={item[3]&&maxLengthCheck}
                        name={item[1]} 
                        onChange={changeOneInput}/>
                        <br/></FlexItem>
                    </FlexLabel>
                ))
            }
            <Button type='submit'>wyślij zamówienie</Button>
        </Form>
        </Wrapper>
    )
}
export default SubmitOrder;