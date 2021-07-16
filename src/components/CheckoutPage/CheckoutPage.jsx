import axios from "axios";
import CheckoutList from "../CheckoutList/CheckoutList";

function CheckoutPage() {

    const handleCheckoutClick = () => {
        axios.post('/api/router', ) // need to post multiple things - customer, pizza list
        .then(response => {
            console.log('success POSTing', response);
            //navigate back to "homepage"
            //clear out the necessary reducers (checkout reducer, customer reducer)

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
                    <CheckoutList />
                </tbody>
            </table>
            {/* Checkout total goes here: may need own component? */}
            <button type="button" onClick={handleCheckoutClick}>CHECKOUT</button>
        </section>
    )
}


export default CheckoutPage