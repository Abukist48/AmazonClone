import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase"
import { Email } from "@mui/icons-material";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const getQuantity = (basket) => {
		return basket?.reduce((qty, item) => qty + item.quantity, 0);
	};
  const handelAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
		<>
			<div className="header">
				<Link to="/">
					<img
						className="header_logo"
						src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
						alt="Amazon Logo"
					/>
				</Link>

				<div className="header_search">
					<input className="header_searchInput" type="text" />
					<SearchIcon className="header_searchIcon" />
				</div>
				<Link to={!user && "/login"} className="header_clearlink ">
					<div onClick={handelAuthentication} className="header_option">
						<span
							style={{ textDecoration: "none" }}
							className="header_optionLineOne"
						>
							Hello {!user ? "Guest" : user.email}
						</span>

						<span className="header_optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>

				<div className="header_nav">
					<div className="header_option">
						<span className="header_optionLineOne">Returns</span>
						<span className="header_optionLineTwo">&Orders</span>
					</div>

					<div className="header_option">
						<span className="header_optionLineOne">Your</span>
						<span className="header_optionLineTwo">Prime</span>
					</div>

					<Link to="/checkout">
						<div className="header_optionBasket">
							<ShoppingBasketIcon />
							<span className="header_optionLineTwo header_basketCount">
								{/* {basket.length} */}
								{getQuantity(basket)}
							</span>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Header;
