# FeeedApp
 
# How this looks Link: [Click](https://www.youtube.com/watch?v=_cliokYwQtQ)

## Stack
*-React
*-Node.js
*-Express.js
*-PostgreSQL

## How to power this on your mashine
You must create postgres database on your comp with 2 tables.
1.Install Postgres
2.In project terminal
...
cd server
nodemon app
...
3. In terminal out of project 
...
psql -U postgres
(write password default Siekierson)
CREATE DATABASE FEEED;
\c feeed
(copy table line 3:13 from /server/database.sql, paste in terminal, enter)
(copy table line 14:21 from /server/database.sql, paste in terminal, enter)
...
now we have database
4.We must add restaurant data to database. Open Postman. url:http://localhost:5000/addRestaurant, type:post, body (example):
...
{
"login":"Karolina"
"password":"first"
}
...
5. Next step is adding properties like city and menu. In postman:  url:http://localhost:5000/editRestaurant, type:put, body (example: down below):
...
{
        "fullname": "Pizzeria Karolina",
        "city": "Siemiatycze",
        "login": "Karolina",
        "password": "first",
        "sizes": [
            25,
            30,
            40
        ],
        "default_meals": [
            {
                "name": "Wezuwio",
                "description": "szynka ser sos",
                "value": [
                    18,
                    20,
                    22
                ]
            },
            {
                "name": "Margheritta",
                "description": "ser sos",
                "value": [
                    16,
                    18,
                    22
                ]
            },
            {
                "name": "Wiejska",
                "description": "ser sos cebula szynka",
                "value": [
                    23,
                    25,
                    26
                ]
            },
            {
                "name": "Peperonii",
                "description": "sos ser peperonii",
                "value": [
                    21,
                    22,
                    24
                ]
            }
        ],
        "ingredient": [
            {
                "name": "szynka",
                "value": [
                    2,
                    3,
                    5
                ]
            },
            {
                "name": "sos",
                "value": [
                    2,
                    3,
                    5
                ]
            },
            {
                "name": "cebula",
                "value": [
                    2,
                    3,
                    5
                ]
            },
            {
                "name": "peperonii",
                "value": [
                    2,
                    3,
                    5
                ]
            },
            {
                "name": "krewetki",
                "value": [
                    2,
                    3,
                    5
                ]
            },
            {
                "name": "rukola",
                "value": [
                    2,
                    3,
                    5
                ]
            }
        ],
        "customized": [
            {
                "size": 20,
                "value": 18
            },
            {
                "size": 35,
                "value": 18
            },
            {
                "size": 45,
                "value": 22
            }
        ]
    }
...

6. Now we can run app. We must have opened terminal with that commands:
...
cd server
nodemon app
...
7. Open new terminal without close above terminal. In new write
...
cd client
npm start
...




