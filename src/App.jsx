import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import User from "./Components/User"
import PaginationProvider from "./Components/contexts/PaginationContext";
import "./App.css";

function App() {
  return (
    <PaginationProvider>
      <NavBar></NavBar>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
        <Route
          path="/product/:id"
          element={<ProductDetails></ProductDetails>}
        ></Route>
        <Route path="/user" element={<User></User>}></Route>
        <Route path="/" element={<Navigate to="/home"></Navigate>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </PaginationProvider>
  );
}

export default App;
