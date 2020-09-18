import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
const Subtotal = () => {


    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <>
            <div className="total_topay" style={{
                border: "2px solid #ddd", height: "5rem", width: "auto",
                display: "flex", flexDirection: "column", marginTop: "2.4rem",
                position: "absolute",right: "0",top: "2rem",padding:"0.5rem"
            }}>
                <h4>Subtotal ({basket?.length} items)</h4>
                <h2>Total: <strong>{getBasketTotal(basket)}</strong></h2>

            </div>
            
        </>
    )
}


export default Subtotal;