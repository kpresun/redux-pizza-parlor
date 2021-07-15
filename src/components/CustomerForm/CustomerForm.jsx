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

    return(

    )
}

export default CustomerForm.jsx