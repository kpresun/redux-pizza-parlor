import axios from "axios";
import CheckoutList from "../CheckoutList/CheckoutList";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CheckoutPage() {

    const customerReducer = useSelector(store => store.customerReducer);
    const cartReducer = useSelector(store => store.cartReducer);
    const history = useHistory();

    const handleCheckoutClick = () => {
        
        const orderPost = {
            customer_name: customerReducer.customerName,
            street_address: customerReducer.streetAddress,
            city: customerReducer.cityName,
            zip: customerReducer.customerZip,
            type: customerReducer.deliveryOption,
            total: cartReducer.length, //total price of all pizzas ordered.
            pizzas: cartReducer //this will reference the quantity of pizzas orderd.
        }
        console.log(orderPost);

        axios.post('/api/order', orderPost) // need to post multiple things - customer, pizza list
        .then(response => {
            console.log('success POSTing', response);
            //navigate back to "homepage"
            history.push('/');// Check to see what page will be our homepage.
            //clear out the necessary reducers (checkout reducer, customer reducer)
            customerReducer();
            cartReducer();
        })
        .catch(error => {
            console.log('error POSTing', error);
        })
    }
    return(
        <section>
            <h2>Step 3: Checkout</h2>
            {/* import customer data here:  Name, Address, delivery/pickup */}

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Cost</td>
                    </tr>
                </thead>
                <tbody>
                    <CheckoutList cartReducer={cartReducer}/>
                </tbody>
            </table>
            {/* Checkout total goes here: may need own component? */}
            <button type="button" onClick={handleCheckoutClick}>CHECKOUT</button>
        </section>
    )
}


export default CheckoutPage