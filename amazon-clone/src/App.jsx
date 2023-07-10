import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import { useStateValue } from "./Components/StateProvider";
import { auth } from "./Components/firebase";
import Payment from "./Components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Orders from "./Components/Orders";
import WhiteFooter from "./Components/WhiteFooter";
import SharedLayout from "./Components/SharedLayout";
const promise = loadStripe(
	"pk_test_51NOKgzCVjTKe8xPdI4Cg8Jbie1nipQqYtyXhLtBmmTamEgmv6ALf19GZ1eZJVhswdvgi2Cd1vSj1YmxKzvJ8ZQTB00O5yVoaMU"
);
function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, [dispatch]);

	return (
		<>
			<Router>
				{/* <Header /> */}
				<Routes>
					<Route path="/" element={<SharedLayout />}>
						<Route path="/orders" element={<Orders />} />
						<Route
							path="/payment"
							element={
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							}
						/>
						<Route path="/payment" element={<Payment />} />
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
					</Route>
					<Route path="/login" element={<Login />}></Route>
				</Routes>
				{/* <WhiteFooter /> */}
			</Router>
		</>
	);
}

export default App;
