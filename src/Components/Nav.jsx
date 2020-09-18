import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../Components/StateProvider";
import Checkout from "../Components/Checkout";
import { auth } from "./firebase";

const Nav = () => {
  const [{ basket , user}] = useStateValue();

  const loginn = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="MainNav">
        <Link to="/">
          <img
            className="nav_img"
            src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
            alt="amazon"
          />
        </Link>

        <div className="nav_inputdiv">
          <input className="nav_input" type="text" />
          <SearchIcon className="searchlogo" />
        </div>

        <div className="nav_rightside">
          <Link to={!user && "/login"}>
            <div onClick={loginn} className="element">
              <span className="element_childone">Hello</span>
              <span className="element_childtwo">
                {user ? 'Sign out' : 'Sign in'}
              </span>
            </div>
          </Link>

          <div className="element">
            <span className="element_childone">Returns &</span>
            <span className="element_childtwo">Orders</span>
          </div>
          <div className="element">
            <span className="element_childone">Subscribe</span>
            <span className="element_childtwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="elementcart">
              <img
                className="cartimg"
                src="https://www.iconsdb.com/icons/preview/white/cart-70-xxl.png"
                alt="cart"
              />
              <span className="element_childcart">{basket?.length}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
