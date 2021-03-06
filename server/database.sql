CREATE DATABASE FEEED;

CREATE TABLE restaurants(
    restaurant_id SERIAL PRIMARY KEY,
    fullname VARCHAR(255),
    city VARCHAR(255),
    login VARCHAR(255),
    password VARCHAR(255),
    sizes integer [],
    default_meals json [],
    ingredient json [],
    customized json []
);
CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    rest_name VARCHAR(255),
    date VARCHAR(255),
    value VARCHAR(255),
    order_description json [],
    client_data json 
);