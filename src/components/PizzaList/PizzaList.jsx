import axios from 'axios';
import React from 'react';
import { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem';
import {useEffect} from 'react';


function PizzaList() {

    useEffect(() => {
        refreshPizza();
    }, [])

const dispatch = useDispatch();
let ourPizzas = useSelector(store => store.pizzaReducer)

const refreshPizza = () => {
    axios({
        method: 'GET',
        url: '/api/pizza'
    })
    .then(response => {
        console.log(response.data);
        dispatch({
            type: "GET_PIZZAS",
            payload: response.data
        });
    })
    .catch(error => {
        console.log('axios get pizza error,', error);
    })

}

    return (
        <>
        <div>
            <h1>Specialty Pizzas for you</h1>
            <ul>
                {ourPizzas.map((pizza, index) => (
                    <PizzaItem key={index} pizza={pizza} />
                ))}
            </ul>
        </div>
        </>
    )

}

export default PizzaList;
