import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero-content">
        <div className="property-details">
          <h1>Featured Property</h1>
          <p>Discover your dream home with us.</p>
        </div>
        <div className="cta-form">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <button type="submit">Get More Info</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
