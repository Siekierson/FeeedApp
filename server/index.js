const express= require('express');

const app=express();
const cors= require('cors');
const pool=require('./db')
const port = 5000;
app.use(cors());
app.use(express.json());


//login

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
        const {login, password,fullname,city,default_meals,dflt_meals_desc,ingredient} = req.body;
        const toEdit=[fullname,city,default_meals,dflt_meals_desc,ingredient]
        const strings = ['fullname','city','default_meals','dflt_meals_desc','ingredient']
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


app.listen(port,()=>console.log(`Server is listening at http://localhost:${port}`));