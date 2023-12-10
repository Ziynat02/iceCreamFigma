import { useState } from "react";
import "./App.css";
import "../src/assets/image/logo.png";

function App() {
  return (
    <div className="wrapper">
      <header>
          <div className="container">
        <nav>
          <div className="navbar">
            <div className="logo">
              <img src="../src/assets/image/logo.png"/>
            </div>
            <div className="navbar_right">
              <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Testimonials</a></li>
                <li><a href="">Contact Us</a></li>
              </ul>
              <div className="btn_navbar">
                <a href="#">Buy Now</a>
              </div>
            </div>

          </div>
        </nav>
 
        <div className="header_part">
        <div className="header_text_part">
          <h5>Sweet fun, full of milk.</h5>
          <h1>
          Feel inside cold with our delicious <span>ice-cream.</span>
          </h1>
          <p>
          Some food has looked so awful that it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words.
          </p>
          <div className="btn_navbar header_btn">
                <a href="#">Buy Now</a>
              </div>
        </div>
        <div className="header_img_part">
          <img className="iceCream" src="../src/assets/image/iceCreamImg.png" alt="" />
          <img className="milk" src="../src/assets/image/milkImg.png" alt="" />
          <div className="circle"></div>
          <div className="shadow"></div>
        </div>
        </div>

        </div>
      </header>

      <section className="cards_section">
        <div className="container">
        <div className="cards">

        <div className="card">
          <div className="img_card">
            <img src="../src/assets/image/free_shipping.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Free Shipping</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../src/assets/image/quick_packgaking.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Quick Packaging</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../src/assets/image/cash_back.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>100% Money Back</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>
        <div className="card">
          <div className="img_card">
            <img src="../src/assets/image/fast_delivery.png" alt="" />
          </div>
          <div className="text_card_part">
            <h4>Fast Delivery</h4>
            <p>Last Chance! Free shipping on all orders ends today.</p>
          </div>
        </div>

        </div>
        </div>
      </section>

      <section className="brown_suagar">
        <div className="container">
          <div className="brown_part">
            <div className="brown_text_part">
              <h2>Brown Sugar Oatmea</h2>
              <p>Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous.</p>
              <div className="btn_navbar btn_brown">
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div className="brown_img_part">
              <img className="sugar" src="../src/assets/image/brownSugar.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
