// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");
require("dotenv").config;
const stripe = require("stripe")(process.env.SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	// console.log('Payment Recieved for this amount >>> ', total);
	try {
		const paymentIntent = await stripe.paymentIntents.create({
			amount: total, //subunits of the currency
			currency: "usd",
		});
		// ok - Created
		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	} catch (error) {
		console.log(error.message);
	}
});

app.listen(10000, (error) => {
	if (error) {
		console.log(error);
	} else {
		console.log("connected to 10000");
	}
});
// exports.api = functions.https.onRequest(app);
