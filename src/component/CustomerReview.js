import React from "react";

function CustomerReview() {
  return (
    <div>
      <section id="reviews">
        <div className="reviews-content">
          <h2>Customer Reviews</h2>
          <div className="review">
            <div className="reviewer">
              <img src={require("../Images/user1.avif")} alt="Reviewer" />
              <p>John Doe</p>
            </div>
            <p className="review-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
              lectus vel ex gravida lacinia."
            </p>
          </div>
          <div className="review">
            <div className="reviewer">
              <img src={require("../Images/user2.jpg")} alt="Reviewer" />
              <p>Jane Smith</p>
            </div>
            <p className="review-text">
              "Vestibulum non convallis massa. Vivamus et urna nec justo
              ullamcorper commodo."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerReview;
