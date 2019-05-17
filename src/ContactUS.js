import React, { Component } from "react";
import "./style.css";
import bgImg from "./img/12.jpg";
class ContactUS extends Component {
  render() {
    return (
      <div
        className="pb-48"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          overflow: "hidden"
        }}
      >
        <div className="flex flex-col md:flex-col py-16 max-w-5xl mx-auto p-4 md:p-0">
          <div className="text-left text-2xl font-semibold pt-8 p-text-def text-white pt-48">
            For bookings and other information, get in touch...
          </div>

          <div className="text-white text-2xl">
            <div className="text-white" />
          </div>
          <p className="mt-2 text-white p-text-def">
            VILLA ANUGRAHA
            <br />
            Kottayam 686015
            <br />
            Kerala, India
            <br />
            <br />
            <i className="fas fa-envelope pr-2" />
            anugraha@gmail.com
            <br />
            <i className="fas fa-mobile-alt pr-2" />
            +91 989232 92292
            <br />
            <i className="fab fa-instagram pr-2" />
            @anugrahakerala
          </p>
        </div>
        <div className="p-48" />
      </div>
    );
  }
}
export default ContactUS;
