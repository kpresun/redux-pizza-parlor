import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function PizzaList() {

    ourPizzas = useSelector(store => store.pizzaReducer)

    axios({
        method: 'GET',
        url: '/'
    })
    .then(response => {
        console.log(response.data);
        dispatchEvent({
            type: "GET_PIZZAS",
            payload: response.data
        });
    })
    .catch(error => {
        console.log('axios get pizza error,', error);
    })
    
    return (
        <>
        <div>
            <h1>Specialty Pizzas for you</h1>
            <ul>
                {ourPizzas.map((pizza, index) => (
                    <PizzaItem key={index} thePizza={pizza} />
                ))}
            </ul>
        </div>
        </>
    )

}

export default PizzaList;
