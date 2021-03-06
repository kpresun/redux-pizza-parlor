import React from 'react';
import axios from 'axios';
import './App.css';
import CustomerForm from '../CustomerForm/CustomerForm';
import PizzaList from '../PizzaList/PizzaList';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>

      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <CustomerForm />
      <PizzaList />
      <CheckoutPage />
    </div>
    
  );
}

export default App;
