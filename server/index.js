const express= require('express');


const app=express();
const cors= require('cors');
const pool=require('./db')
const port = 5000;
app.use(cors());
app.use(express.json());

//
/////Restaurants methods
//

//get restaurants

app.get('/restaurants',async (req,res)=>{
    try{
        const restaurants= await pool.query('SELECT * FROM restaurants')
        res.json(restaurants.rows)
    }catch(err){
        console.log(err.massage)
    }
})

//add restaurant

app.post('/addRestaurant',async(req,res)=>{
    try{
        const {login, password} = req.body;
        // check if user exist in database
        const newRestaurant = null
        const newRest=async()=>{
            newRestaurant=await pool.query("INSERT INTO restaurants (login, password) VALUES($1,$2) RETURNING*",[login, password]);
        } 
        const isExist= await pool.query('SELECT * FROM restaurants WHERE login= $1',[login])
        isExist.rows.length?res.json('restaurant is existing'):(newRest())        
        res.end()
        
    }catch(err){
        console.log(err.massage)
    }
})

// editing restaurant properties

app.put('/editRestaurant',async(req,res)=>{
    try{
        const {login, password,fullname,city,sizes,default_meals,ingredient,customized} = req.body;
        const toEdit=[fullname,city,sizes,default_meals,ingredient,customized]
        const strings = ['fullname','city','sizes','default_meals','ingredient','customized']
        const newRestaurant = null
        const addProperties=async()=>{
            toEdit.forEach((item,index)=> typeof(item)==='undefined'?(null):(pool.query(`UPDATE restaurants SET ${strings[index]} = $1 WHERE restaurant_id=${existRow.restaurant_id}`,[item])))
        } 
        
        const isExist= await pool.query('SELECT * FROM restaurants WHERE login= $1',[login]);
        const existRow = isExist.rows[0];
        existRow.password===password?(addProperties()):(res.json('invalid password'))        
        res.end()
        
    }catch(err){
        console.log(err.massage)
    }
})
app.delete('/deleteRestaurant/:id/:login/:password',async(req,res)=>{
    try{
        const {login, password,id} = req.params;
       
        const isExist= await pool.query('SELECT * FROM restaurants WHERE login= $1',[login]);
        const existRow = isExist.rows[0];
        (String(existRow.restaurant_id)===id&&existRow.password===password)?(await pool.query('DELETE FROM restaurants WHERE restaurant_id = $1',[id])):(res.json('sth gone incorrect'))   
        res.end();
    }catch(err){
        console.log(err.massage)
    }
})

// get meals
app.get('/meals/:name',async (req,res)=>{
    try{
        const {name}= req.params;
        const restaurants= await pool.query('SELECT * FROM restaurants');
        const restaurant = restaurants.rows.filter(item=>item.fullname===name);
        const {sizes,default_meals,ingredient,customized}=restaurant[0]
        res.json({sizes:sizes,default_meals:default_meals,ingredient:ingredient,customized:customized})
    }catch(err){
        console.log(err.massage)
    }
})

//
/////Orders methods
//

//get orders

app.get('/orders',async (req,res)=>{
    try{
        const orders= await pool.query('SELECT * FROM orders')
        res.json(orders.rows)
    }catch(err){
        console.log(err.massage)
    }
})

//create order

app.post('/order',async (req,res)=>{
    try{
        const {date,rest_name,value,order_description,client_data} = req.body;
        const newOrder=await pool.query("INSERT INTO orders (date,rest_name,value,order_description,client_data) VALUES($1,$2,$3,$4,$5) RETURNING*",[date,rest_name,value,order_description,client_data]);
        // console.log(req.body)
        res.json(newOrder)
    }catch(err){
        console.log(err.massage)
    }
})

//delete order

app.delete('/order/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const order=await pool.query('DELETE FROM orders WHERE order_id = $1',[id]);
        res.end(order)
    }catch(err){
        console.log(err.massage)
    }
})
// //all
// app.delete('/orders',async (req,res)=>{
//     try{
//         const orders= await pool.query('DELETE * FROM orders')
//         // res.json(orders)
//         console.log(orders)
//     }catch(err){
//         console.log(err.massage)
//     } v
// })

//Restaurant authentication

app.get('/logRestaurant/:login/:password',async (req,res)=>{
    try{
        const {login, password} = req.params;
        const rest= await pool.query('SELECT * FROM restaurants WHERE login= $1',[login]);
        if(rest.rows[0].password==password){
            res.json(rest.rows[0])
        }
       res.end()
    }catch(err){
        console.log(err.massage)
    }
})

//get orders to restaurant

app.post('/resOrders',async (req,res)=>{
    try{
        const {restaurant} = req.body;
        const orders= await pool.query('SELECT * FROM orders WHERE rest_name= $1',[restaurant]);
        res.json(orders.rows)
    }catch(err){
        console.log(err.massage)
    }
})



app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`));