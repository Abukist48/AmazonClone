import React from "react";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function SubTotalUnderCart() {
  const [{ basket }, dispatch] = useStateValue();
  const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => amount + item.price * item.quantity, 0);
  const getQuantity = (basket) => {
    return basket?.reduce((qty, item) => qty + item.quantity, 0);
  };
  return (
    <div>
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({getQuantity(basket)}{" "}
              {getQuantity(basket) === 1 ? "item" : "items"}):{" "}
              <strong>{value}</strong>
            </p>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default SubTotalUnderCart;
