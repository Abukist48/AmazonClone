import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProducts({ id, image, title, price, rating, hideButton, quantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
			title: title,
			image: image,
			price: price,
			rating: rating,
			quantity: 1,
		});
  };

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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt={title} />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{truncate(title, 95)}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
      <p>QTY={quantity}</p>
      {!hideButton&&(<button onClick={addToBasket}>
          <strong>+</strong>
        </button>)}
        
        {!hideButton && (
          <button onClick={removeFromBasket}>
            <strong>-</strong>
          </button>
        )}
        <br />
        <div className="underline"></div>
      </div>
    </div>
  );
}

export default CheckoutProducts;
