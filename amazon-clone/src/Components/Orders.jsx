import React, { useEffect, useState } from "react";
import "./orders.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import Order from "./Order";
import { useNavigate } from "react-router-dom";
function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);
const navigate=useNavigate();
  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      // setOrders([]);
      navigate('/login')
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
