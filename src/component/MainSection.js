import React from "react";

function MainSection() {
  return (
    <div>
      <section id="main">
        <div className="main-content">
          <h2>Property Features</h2>
          <div className="property-features">
            <div className="feature">
              <i className="fa fa-bed"></i>
              <p>3 Bedrooms</p>
            </div>
            <div className="feature">
              <i className="fa fa-bath"></i>
              <p>2 Bathrooms</p>
            </div>
            <div className="feature">
              <i className="fa fa-car"></i>
              <p>2 Car Garage</p>
            </div>
          </div>
          <div className="property-location">
            <h3>Location</h3>
            <p>2523 Elm Street, Pune</p>
          </div>
          <div className="property-price">
            <h3>Price</h3>
            <p>$450,000</p>
          </div>
          <div className="property-images">
            <img src={require("../Images/img-1.jpg")} alt="Property" />
            <img src={require("../Images/img-2.jpg")} alt="Property" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainSection;
