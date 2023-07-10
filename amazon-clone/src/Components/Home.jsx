import React from "react";
import "./Home.css";
import Products from "./Products";
import FourProducts from "./FourProducts";
import WhiteFooter from "./WhiteFooter";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <div className="home_image">
          <FourProducts />
          </div>

  
          <div className="home_row">
            <Products
              id="122123123"
              title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Products
              id="121123123"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
              price={239}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>
          <div className="home_row">
            <Products
              id="120123123"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Products
              id="119123123"
              title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Products
              id="118123123"
              title="New Apple iPad Pro (12.9-inch, WiFi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="home_row">
            <Products
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120*1440"
              id="116123123"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
      <WhiteFooter/>
    </>
  );
}

export default Home;
