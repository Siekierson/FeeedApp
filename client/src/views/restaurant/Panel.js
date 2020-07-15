import React,{useContext} from 'react';
import {SecretContext} from '../../contexts/SecretContext';
import {List,ListItem} from './StyledToPanel';
import Button from '../../components/atoms/Button';
const Panel = ()=> {
  const {active,orders,setOrders} = useContext(SecretContext);
  const refresh = async()=>{
    await fetch('http://localhost:5000/resOrders',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({restaurant:active})
  }).then(res =>res.json()).then(data=>setOrders(data.reverse()))
  }
    return (
      <div >
        <h1>Panel restauracji</h1>
        <div>
        <h2>Ostatnie zamówienia</h2>
          <List>
            {
              orders?(orders.map(item=>(
                <ListItem key={item.order_id}>
                  <h2>Data nadania: {item.date}</h2><br/>
                  <h2>Cena zamówienia: {item.value}</h2><br/>
                  <h2>Szczegóły:</h2><br/>
              {item.order_description.map((one,index)=>(<div key={index}><h3>{one.name},rozmiar:{one.size+1},cena bez dodatków:{one.value}zł</h3>{
                one.bonus.map(ingr=><h4>({ingr.name}, {ingr.value} zł),</h4>)
              }</div>))}
               <h2>Dane klienta</h2>
              <h4>Imię : {item.client_data.name}</h4>
              <h4>Nazwisko : {item.client_data.surname}</h4>
              <h4>Telefon : {item.client_data.phone}</h4>
              <h4>email : {item.client_data.email}</h4>
              <h4>Miasto : {item.client_data.city}</h4>
              <h4>ulica : {item.client_data.street}</h4>
              <h4>Nr domu lub bloku/mieszkania : {item.client_data.homeNumber}</h4>
                </ListItem>
              ))):(<Button onClick={()=>{refresh();setInterval(()=>{refresh()},60000)}}>Odśwież zamówienia</Button>)
            }
          </List>
        </div>
      </div>
    );
}
export default Panel;