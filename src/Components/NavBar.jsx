import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}

export default NavBar;
