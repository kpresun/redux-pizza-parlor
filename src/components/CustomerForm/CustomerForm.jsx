import axios from 'axios';
import {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';

function CustomerForm () {
    
    const dispatch = useDispatch();
    const [customerName, setCustomerName] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [cityName, setCityName] = useState('');
    const [customerZip, setCustomerZip] = useState('');
    const [deliveryOption, setDeliveryOption] = useState('');


    useEffect(() => {
    console.log(customerName);
    }, []);

    const handleSubmit = event => {
        event.preventDefault();
        //need to pass this to Customer Reducer.

        dispatch({
            type: 'ADD_NEW_CUSTOMER',
            payload: {customerName, streetAddress, cityName, customerZip, deliveryOption}
        })
    }

    return (
        <form className="addCustomer" onSubmit={handleSubmit}>
            <input value={customerName} placeholder="Name" 
                onChange={(event) => 
                setCustomerName(event.target.value)}/>
            <input value={streetAddress} placeholder="Street Address" 
                onChange={(event) => 
                setStreetAddress(event.target.value)}/>
            <input value={cityName} placeholder="City" 
                onChange={(event) => 
                setCityName(event.target.value)}/>
            <input value={customerZip} placeholder="Zip Code" 
                onChange={(event) => 
                setCustomerZip(event.target.value)}/>
            <input type="radio" name="deliveryOption" value="Pickup" onChange={(event) => setDeliveryOption(event.target.value)}/>Pickup
            <input type="radio" name="deliveryOption" value="Delivery" onChange={(event) => setDeliveryOption(event.target.value)}/>Delivery
            <button type="submit">Next</button>
        </form>
        )
}

export default CustomerForm;