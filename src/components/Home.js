import React from 'react';
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* Product id, title, price, rating, image */}
            <div className="home__row">
            <Product
            id="21452863"
            title="The Energy Bus lean startup: how constant innovation creates radically successful
            businesses paperback"
            price={12.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81oSdLIKdWL.jpg"
            />
            <Product
            id="3168549"
            title="
            Redragon K582 SURARA RGB LED Backlit Mechanical Gaming Keyboard with104 Keys-Linear and Quiet-Red Switches"
            price={49.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61nmLAAtdlL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="28431562"
            title="Microsoft Xbox One X 1Tb Console With Wireless Controller: Xbox One X Enhanced, Hdr, Native 4K, Ultra Hd"
            price={299.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61ux1cU49XL._SL1300_.jpg"
            />
            <Product
            id="13452185"
            title="
            Halo: The Master Chief Collection"
            price={19.95}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/719G5ws-qmL._SL1500_.jpg"
            />
            <Product
            id="72103562"
            title="Intel Core i9-9900K Desktop Processor 8 Cores up to 5.0 GHz Turbo unlocked LGA1151 300 Series 95W"
            price={448.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71RsweT83eL._AC_SL1500_.jpg"
            />
            </div>
            <div className="home__row">
            <Product
            id="61302548"
            title="LG 34WK650-W 34 UltraWide 21:9 IPS Monitor with HDR10 and FreeSync (2018),black/white"
            price={396.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/819F1MjJJ8L._AC_SL1500_.jpg"
            />
            </div>
            
            {/* Product */}
        </div>
    );
}

export default Home;
