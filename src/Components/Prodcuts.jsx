import React from "react";
import "../css/products.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useStateValue } from '../Components/StateProvider';
import StarIcon from '@material-ui/icons/Star';

const Products = ({ id, title, rating, price, image }) => {

  const [{ basket }, dispatch] = useStateValue();

  const addProduct = () => {
  // Add products
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      }
    })
  }  
  return (
    <>
      <div className="product">
        
          <h3>{title}</h3>
          <p>
            <small>$</small>           
            <strong style={{fontSize:"1.5rem"}}>{price}</strong>
          </p>
              <div className="rating">
                  {
                      Array(rating)
                          .fill()
                          .map((_) => {
                            return <StarIcon style={{color:"#FDCC0D", marginTop:"0.5rem"}}/>
                      })
                  }
          </div>
     
    
        <img src={image} alt="img" className="img" />
        
        <div>
          <AddCircleIcon onClick={addProduct} className="btnAdd" style={{ color: "orange", fontSize: "2.5rem" }} />
        </div>
       

      </div>
    </>
  );
};

export default Products;
