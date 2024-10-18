import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Cart from "./Pages/Cart";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Pages/PageNotFound";
import User from "./Pages/User";
import "./App.css";
import Home from "./Pages/Home";
import PaginationProvider from "./contexts/PaginationContext";

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
