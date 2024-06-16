
import './App.css';

import React, { useState } from 'react';
import Skydine from './assets/skydinelogo.png'
import Photo1 from './assets/photo1.jpeg'
import Manchurian from './assets/manchurian.jpeg'
import Mojitos from './assets/mojitos.jpeg'
import Shahipaneer from './assets/shahipaneer.jpeg'
import Event from './assets/event1.jpg'
import Footerimg from './assets/footerimg.png'
import Skydineyellow from './assets/skydineyellow.png'

const App = () => {

  const [formData, setFormData] = useState({
    numberOfPeople: '',
    thaliType: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { numberOfPeople, thaliType } = formData;
    const phone = '9324371980';
    const message = `Hi, I want to order ${numberOfPeople} ${thaliType} Thali`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
  };

 
    const handleSubmit1 = (e) => {
      e.preventDefault();
  
      // Get form data
      const name = document.getElementById('name').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const people = document.getElementById('people').value;
      const phoneNumber = '9769622215';
  
      // Construct WhatsApp message
      const message = `Hi my name is ${name}, I want to book a table for ${people} people on ${date} at ${time}`;
  
      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
  
      // Construct WhatsApp link with the encoded message
      const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  
      // Open WhatsApp link in a new tab
      window.open(whatsappLink, '_blank');
    };
  


  return (
    <>
      <header className="header">
        <nav>
          <div className="nav__header">
            <div className="nav__logo">
              <a href="#">
                <img src={Skydineyellow} alt="logo" className="nav__logo-dark" />
                <img src="assets/logo-white.png" alt="logo" className="nav__logo-white" />
              </a>
            </div>
            <div className="nav__menu__btn" id="menu-btn">
              <i className="ri-menu-line"></i>
            </div>
          </div>
          <ul className="nav__links" id="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#menu">SPECIAL</a></li>
            <li><a href="#event">EVENTS</a></li>
            <li><a href="#event">CATERING</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
        <div className="section__container header__container" id="home">
          <div className="header__image">
            <img className='border50' src={Photo1} alt="header" />
          </div>
          <div className="header__content">
            
            <h1>Best in Taste</h1>
            <h3 className='colorwhite'>Elevate Your Tastebuds with Exquisite Rooftop Ambience and Diverse Culinary Delights</h3>
          </div>
        </div>
      </header>

      {/* <section className="section__container banner__container" id="special">
        <div className="banner__card">
          <p>TRY IT OUT TODAY</p>
          <h4>MOST POPULAR BURGER</h4>
        </div>
        <div className="banner__card">
          <p>TRY IT OUT TODAY</p>
          <h4>MORE FUN<br />MORE TASTE</h4>
        </div>
        <div className="banner__card">
          <p>TRY IT OUT TODAY</p>
          <h4>FRESH & CHILI</h4>
        </div>
      </section> */}

      <section className="section__container order__container" id="menu">
        {/* <h3>ALWAYS TASTEY BURGER</h3> */}
        <h2 className="section__header">CHOOSE & ENJOY</h2>
        <p className="section__description">
        Whether you seek classic delights or adventurous flavors, your culinary journey begins at The Skydine. Indulge in starters like paneer soya chaap manchurian, main courses like paneer butter masala, and refreshing mojitos. Welcome to the ultimate rooftop dining experience.
        </p>
        <div className="order__grid">
          <div className="order__card">
            <img src={Manchurian} alt="order" />
            <h4>Manchurian</h4>
            <p>
            At Skydine Restaurant, start your meal with our delectable Manchurian. Enjoy crispy vegetable balls tossed in a savory, spicy sauce, perfect for a flavorful beginning.
            </p>
            <a href="https://api.whatsapp.com/send?phone=9324371980&text=Hi%2C%20I%20want%20to%20order%20Manchurian%20in%20appetizers" target="_blank">
            <button className="btn">ORDER NOW</button>
  </a>
           
          </div>
          <div className="order__card">
            <img src={Shahipaneer} alt="order" />
            <h4>Paneer Butter Masala</h4>
            <p>
            Savor the rich and creamy Paneer Butter Masala at Skydine. Tender paneer cubes in a luxurious tomato gravy blend traditional spices with an irresistible taste.
            </p>
            <a href="https://api.whatsapp.com/send?phone=9324371980&text=Hi%2C%20I%20want%20to%20order%20Paneer%20Butter%20Masala%20in%20main%20course" target="_blank">
            <button className="btn">ORDER NOW</button>
            </a>
          </div>
          <div className="order__card">
            <img src={Mojitos} alt="order" />
            <h4>Mojitos</h4>
            <p>
            Refresh yourself with our signature Mojitos at Skydine. Crafted with fresh mint, zesty lime, and a touch of sweetness, they are the perfect accompaniment to your rooftop dining experience.
            </p>
            <a href="https://api.whatsapp.com/send?phone=9324371980&text=Hi%2C%20I%20want%20to%20order%20a%20Mojito%20in%20beverages" target="_blank">
            <button className="btn">ORDER NOW</button>
            </a>
          </div>
        </div>
      </section>

      <section className="section__container event__container" id="event">
        <div className="event__content">
          <div className="event__image">
            <img src={Event} alt="event" />
          </div>
          <div className="event__details">
            <h3>Discover</h3>
            <h2 className="section__header">UPCOMING EVENTS</h2>
            <p className="section__description">
              From exclusive burger tastings and chef collaborations to community
              outreach initiatives and seasonal celebrations, there's always
              something special on the horizon at Burger Company. Be the first to
              know about our upcoming events, promotions, and gatherings as we
              continue to bring joy and flavor to our cherished customers. Join us
              in creating memorable moments and delicious memories together!
            </p>
          </div>
        </div>
      </section>
<div className="catering">
      <div className=" reservation__container">
      <h3>CATERING</h3>
      <h1 className="section__header"> ORDER NOW</h1>
      <form  onSubmit={handleSubmit}>
        <input
          type="number"
          className='inputClass'
          placeholder='Number of People:'
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        />

        <select
          id="thaliType"
          name="thaliType"
          value={formData.thaliType}
          onChange={handleChange}
          required
        >
          <option value="" selected>Select Thali Type:</option>
          <option value="veg">Veg Thali</option>
          <option value="chicken">Chicken Thali</option>
          <option value="egg">Egg Thali</option>
        </select>
    <br />
        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
    </div>
      <section className="reservation" id="contact">
        <div className="section__container reservation__container">
          <h3>RESERVATION</h3>
          <h2 className="section__header">BOOK YOUR TABLE</h2>
          <form  onSubmit={handleSubmit1}>
      <input type="text" id="name" placeholder="NAME" required />
      <input type="date" id="date" placeholder="DATE" required />
      <input type="time" id="time" placeholder="TIME" required />
      <input type="number" id="people" placeholder="PEOPLE" required />
      <button className="btn" type="submit">BOOK TABLE</button>
    </form>
        </div>
       
      </section>

      <footer className="footer">
        <div className=" footer__container">
          <div className="footer__logo">
            <img src={Skydine} alt="logo" />
          </div>
          <div className="footer__content">
            <p>
              Welcome to Burger Company, where passion for exceptional food and
              genuine hospitality come together. Our story is one of dedication to
              crafting the perfect burger experience, from sourcing the finest
              ingredients to delivering unparalleled taste in every bite.
            </p>
            <div>
              <ul className="footer__links">
                <li>
                  <span><i className="ri-map-pin-2-fill"></i></span>
                  MG Road, Bangalore, 500089
                </li>
                <li>
                  <span><i className="ri-mail-fill"></i></span>
                  info@burgerhouse.com
                </li>
              </ul>
              <div className="footer__socials">
                <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                <a href="#"><i className="ri-instagram-fill"></i></a>
                <a href="#"><i className="ri-twitter-fill"></i></a>
                <a href="#"><i className="ri-whatsapp-fill"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bar">
          Copyright © 2024 Web Design Mastery. All rights reserved.
        </div>
      </footer>

      <script src="https://unpkg.com/scrollreveal"></script>
      <script src="main.js"></script>
    </>
  );
};

export default App;
