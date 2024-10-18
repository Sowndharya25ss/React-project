import React from 'react'
import { BiSolidPlusSquare } from "react-icons/bi";
import { BiSolidMinusSquare } from "react-icons/bi";

function Products(props) {
    const {filteredSortedGroupedArr} = props
  return (
    <>
      {filteredSortedGroupedArr.length == 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {filteredSortedGroupedArr.map((product, idx) => {
            return (
              <div className="product_item" key={idx}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="product_image"
                />
                <div className="product_meta">
                  <p className="product_title">{product.title}</p>
                  <p className="product_price">{product.price}</p>
                </div>

                <div className="add_to_cart_container">
                  <BiSolidMinusSquare style={{ fontSize:"large" }} />
                  <div>0</div>
                  <BiSolidPlusSquare style={{ fontSize: "large" }} />
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Products