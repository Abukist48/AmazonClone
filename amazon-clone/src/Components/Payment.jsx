import React, { useEffect, useState } from "react";
import "./Payment.css";
import CheckoutProducts from "./CheckoutProducts";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { db } from "./firebase"; // Import the Firestore database instance
import axios from "./axios";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();
	const navigate = useNavigate();

	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => item.price + amount, 0);
	const stripe = useStripe();
	const elements = useElements();

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${parseInt(getBasketTotal(basket) * 100)}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [basket]);

	console.log("THE SECRET IS >>>", clientSecret);

	const handleSumite = async (event) => {
		event.preventDefault();
		setProcessing(true);
		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				navigate("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p> {user?.email}</p>
						<p> Ethiopia</p>
						<p> Addis Ababa</p>
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Review items and Delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map((item) => (
							<CheckoutProducts
								key={item.id}
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
								quantity={item.quantity}
							/>
						))}
					</div>
				</div>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSumite}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
