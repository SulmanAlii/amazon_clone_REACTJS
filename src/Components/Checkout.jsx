import React,{useEffect} from "react";
import { useStateValue } from "../Components/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import '../css/Checkout.css';
import firebase from 'firebase';



const Checkout = () => {
  const [{ basket }] = useStateValue();
  const [newProduct, setNewProduct] = useStateValue([]);
  
  const db = firebase.database().ref();

  db.push({
     basket
  });

  useEffect(() => {
    const database = firebase.database().ref();
    database.on("value", (snapshot) => {
      const data = snapshot.val();
      const dataArray = [];
      for(var i in data){
        dataArray.push(data[i]);
      }
      console.log(dataArray);
      setNewProduct(dataArray);
    })
  },[basket.name]);


  


  return (
    <>
      <div className="subtotal_div">
        {basket?.length <= 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          <div className="product_item">
            <h1>Your Cart: </h1>
            <hr />
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
              
          </div>
        )}

        {basket.length > 0 && <Subtotal />}
      </div>
    </>
  );
};

export default Checkout;
