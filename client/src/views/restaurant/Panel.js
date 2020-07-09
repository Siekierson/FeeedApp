import React,{useState,useEffect,useContext} from 'react';
import {SecretContext} from '../../contexts/SecretContext';
const Panel = ()=> {
  const [orders,setOrders]=useState(false);
  const {active} = useContext(SecretContext);
  const items = ()=>fetch('http://localhost:5000/resOrders',{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({restaurant:active})
  }).then(res =>res.json()).then(data=>console.log(data))
    return (
      <div>
        <h1>Panel restauracji</h1>
        <div>
          <button onClick={items}>Odśwież zamówienia</button>
          <ul>
            {
              orders.map(item=>(
                <li key={item.order_id}>
                  <h2>Data nadania: {item.date}</h2><br/>
                  <h2>Cena zamówienia: {item.value}</h2><br/>
                  <h2>Szczegóły:</h2><br/>
                  {item.order_description.map(ingr=>)}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
}
export default Panel;