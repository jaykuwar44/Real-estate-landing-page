import React from "react";

const ContactDetails = () => {
  return (
    <section id="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <p>For inquiries and questions, please contact us:</p>
          <ul>
            <li>
              <i className="fa fa-phone"></i> Phone: +1234567890
            </li>
            <li>
              <i className="fa fa-envelope"></i> Email: info@example.com
            </li>
            <li>
              <i className="fa fa-map-marker"></i> Address: 2523 Elm Street,
              Pune
            </li>
          </ul>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;
