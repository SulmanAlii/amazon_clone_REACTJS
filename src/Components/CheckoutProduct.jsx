import React from "react";
import "../css/CheckoutProduct.css";
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';



const CheckoutProduct = ({ id, title, image, price, rating }) => {
  
    const [{ basket }, dispatch] = useStateValue();

    const removeProduct = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        })  
    }
  
    return (
    <>
      <div className="cart_product">
        <div className="checkout_productt">
          <img className="check-img" src={image} alt="img" />
            <div className="checkout_details">
              
            <h3 className="title">{title}</h3>
            <p>
              <small>$ </small>
              <strong>{price}</strong>
            </p>

            <div className="checkout_rating">
              {Array(rating)
                .fill()
                .map((_) => {
                  return <StarIcon style={{color:"#FDCC0D", marginTop:"0.5rem"}}/>
                })}
            </div>
            <div>
                <IndeterminateCheckBoxIcon onClick={removeProduct} style={{cursor:"pointer"}}/>
            </div>
          </div>
            </div>
               
      </div>
    </>
  );
};

export default CheckoutProduct;
