import axios from 'axios';
import {useState, useEffect} from 'react';

function CustomerForm ({refreshCustomer}) {

    const [customerName, setCustomerName] = useState();

    useEffect(() => {
    console.log(customerName);
    }, []);

    const handleSubmit = event => {

        axios.post('/api/order',{customerName})
        .then(response =>{
        console.log(`What is the POST response`,response.data);
        refreshCustomer();
        setCustomerName('');
        })
        .catch(error => {
            console.log('Error in POST. Please try again.', error);
        });
    }

    return (
        <form className="addCustomer" onSubmit={handleSubmit}>
            <input value={customerName} placeholder="Name" 
                onChange={(event) => 
                setCustomerName(event.target.customer_name)}/>
            <input value={customerName} placeholder="Street Address" 
                onChange={(event) => 
                setCustomerName(event.target.street_address)}/>
            <input value={customerName} placeholder="City" 
                onChange={(event) => 
                setCustomerName(event.target.city)}/>
            <input value={customerName} placeholder="Zip Code" 
                onChange={(event) => 
                setCustomerName(event.target.zip)}/>
            <button type="radio">Pickup</button>
            <button>Delivery</button>
            <button type="submit">Next</button>
        </form>
    )
}

export default CustomerForm;

