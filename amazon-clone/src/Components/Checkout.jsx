import React from "react";
import "./Checkout.css";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProducts from "./CheckoutProducts";
import SubTotalUnderCart from "./SubTotalUnderCart";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout_left">
          <img
            className="checkout_ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          />
          <h3>Hello</h3>
          <h2 className="checkout_title">Your shopping Basket</h2>

          {basket.map((items) => (
            <CheckoutProducts
              id={items.id}
              title={items.title}
              image={items.image}
              price={items.price}
              rating={items.rating}
              quantity={items.quantity}
            />
          ))}
          {/* <CheckoutProducts /> */}
        </div>
        <div className="checkout_right subTotal_checkOut">
          <br />
          {/* <h2>
            <SubTotalUnderCart />
          </h2> */}
          <SubTotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
