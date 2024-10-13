import React from 'react'

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
              </div>
            );
          })}
        </>
      )}
    </>
  );
}

export default Products