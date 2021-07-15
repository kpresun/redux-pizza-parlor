import axios from "axios";
import CheckoutList from "../CheckoutList/CheckoutList";

function CheckoutPage() {

    const handleCheckoutClick = () => {
        axios.post('')
    }
    return(
        <section>
            <h2>Step 3: Checkout</h2>
            // import customer data here:  Name, Address, delivery/pickup

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