import React from "react";
import "./footer.scss";
import one from "./pic/1.png";
import two from "./pic/2.png";
import three from "./pic/3.png";
import four from "./pic/4.png";
import five from "./pic/5.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_info-first">
          <div className="logo">
            <img src={one} alt="/" />
            <img className="image" src={two} alt="/" />
          </div>
          <p className="text">
            Eventick is a global self-service ticketing platform for live
            experiences that allows anyone to create, share, find and attend
            events that fuel their passions and enrich their lives.
          </p>
          <span className="pics">
            <img src={three} alt="/" />
            <img src={four} alt="/" />
            <img src={five} alt="/" />
          </span>
        </div>
        <div className="footer_info-second">
<h3>Plan Events</h3>
<ul>
  <li>Create and Set Up</li>
  <li>Sell Tickets</li>
  <li>Online RSVP </li>
  <li>Online Events</li>
</ul>
        </div>
        <div className="footer_info-third">
        <h3>Eventick</h3>
<ul>
  <li>About Us</li>
  <li>Press</li>
  <li>Contact Us</li>
  <li>Help Center</li>
  <li>How it Works</li>
  <li>Privacy</li>
  <li>Terms</li>
</ul>
        </div>
        <div className="footer_info-forth">
          <h3>Stay in the loop</h3>
          <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
          <span className="button">
            <input type="email" placeholder="Enter your email address)"/>
            <button>Subscibe Now</button>
          </span>
        </div>
      </div>
      <div className="copyright"></div>
    </>
  );
}

export default Footer;
