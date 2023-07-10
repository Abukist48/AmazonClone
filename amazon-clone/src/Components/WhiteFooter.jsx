import React from "react";
import "./WhiteFooter.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";


function WhiteFooter() {
  const [{ basket, user }, dispatch] = useStateValue();

	return (
		<>
			<div className="footer d-flex justify-content-center">
				<div className="upper  d-block ">
					<p className="text1 m-0  "> See personalized recommendations</p>
					<button>
						<Link className="signup" to={!user && "/login"}>
							<div>
								<small>{user ? "Sign Out" : "Sign In"}</small>
							</div>
						</Link>
					</button>
					<span className="text2 d-flex justify-content-center">
						<small> New customer? </small> <small> Start here</small>
					</span>
				</div>
			</div>
			<div className="backToTop text-center " id="home ">
				<Link className="link" to="#home">
					Back to top
				</Link>
			</div>

			<div className="list-items d-flex justify-content-center  text pt-5 text-white container-fluid">
				<div className="first-list">
					<ul>
						<h6> Get to Know Us</h6>
						<li>
							<a href="#"> Careers</a>
						</li>
						<li>
							<a href="#"> Blog</a>
						</li>
						<li>
							<a href="#">About Amazon</a>
						</li>
						<li>
							<a href="#"> investor Relations</a>
						</li>
						<li>
							<a href="#"> Amazon Device</a>
						</li>
						<li>
							<a href="#">Amazon Science</a>
						</li>
					</ul>
				</div>
				<div className="first-list">
					<ul>
						<h6> Make Money with us</h6>
						<li>
							<a href="#">Sell products in Amazon</a>
						</li>
						<li>
							<a href="#"> Sell on amazon Business</a>
						</li>
						<li>
							<a href="#">Sell apps on Amazon</a>
						</li>
						<li>
							<a href="#"> Become an affiliate</a>
						</li>
						<li>
							<a href="#"> Advertise Your Product</a>
						</li>
						<li>
							<a href="#">Self-Publish with Us</a>
						</li>
						<li>
							<a href="#">Host an Amazon Hub</a>
						</li>
						<li>
							<a href="#">See More Make Money with Us</a>
						</li>
					</ul>
				</div>
				<div className="first-list">
					<ul>
						<h6> Amazon Payment Products</h6>
						<li>
							<a href="#"> Amazon Business card</a>
						</li>
						<li>
							<a href="#"> Shop with Points</a>
						</li>
						<li>
							<a href="#">Relode Your Balance</a>
						</li>
						<li>
							<a href="#"> Amazon currency Converter</a>
						</li>
					</ul>
				</div>
				<div className="first-list">
					<ul>
						<h6>Let Us Help You</h6>
						<li>
							<a href="#"> Amazon and COVID-19</a>
						</li>
						<li>
							<a href="#"> Your Account</a>
						</li>
						<li>
							<a href="#">Your Orders</a>
						</li>
						<li>
							<a href="#"> Shipping rates & Policies</a>
						</li>
						<li>
							<a href="#"> Returns & Replacements</a>
						</li>
						<li>
							<a href="#">Manage your Content and Devices</a>
						</li>
						<li>
							<a href="#">Amazon Assistant</a>
						</li>
						<li>
							<a href="#">Help</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<img></img>
			</div>
		</>
	);
}

export default WhiteFooter;
