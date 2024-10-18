import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link style={{ color: "white" }} to="/home">
        Home
      </Link>
      <Link style={{ color: "white" }} to="/user">
        User
      </Link>
      <Link style={{ color: "white" }}  to="/cart">
        <div className="cart_container">
          <FaShoppingCart />
          <div className="cart_qty">0</div>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
