import React from "react";

import "./Product.css";
import { useStateValue } from "./StateProvider";

function Products({ id, title, image, price, rating }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
        quantity: 1,
      },
    });
  };

  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{truncate(title, 100)}</p>

          <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map(() => (
                // <span>*</span>
                <p>⭐</p>
                // <p key={index}>⭐</p>
                // <p className="star">*</p>
              ))}
          </div>
        </div>
        <img src={image} alt={title} />
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </>
  );
}

export default Products;
