CREATE DATABASE FEEED;

CREATE TABLE restaurants(
    restaurant_id SERIAL PRIMARY KEY,
    fullname VARCHAR(255),
    city VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255),
    default_meals TEXT [],
    dflt_meals_desc TEXT [],
    ingredient TEXT []
);
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    date VARCHAR(255),
    order_description TEXT [],
    client_data TEXT []
);