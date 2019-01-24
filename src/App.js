import React, { Component } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ContactUS from "./ContactUS";
import Gallery from "./Gallery";
import logo from "./logo-black.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: "1", password: "" };
    this.handleAbout = this.handleAbout.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleGallery = this.handleGallery.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleHome() {
    this.setState(state => ({
      menu: "0"
    }));
  }

  handleAbout() {
    this.setState(state => ({
      menu: "1"
    }));
  }

  handleGallery() {
    this.setState(state => ({
      menu: "2"
    }));
  }

  handleContact() {
    this.setState(state => ({
      menu: "3"
    }));
  }
  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    const showHome = this.state.menu === "0";
    const showAboutUs = this.state.menu === "1";
    const showGallery = this.state.menu === "2";
    const showContactUs = this.state.menu === "3";
    const password = this.state.password === "bodhi";

    console.log(this.state.password);
    return (
      <div className="wrapper" style={{ display: "block" }}>
        {!password && (
          <form className="app-password" onSubmit={this.handleSubmit}>
            <img src={logo} width={300} style={{ padding: "40px 20px" }} />
            <input
              type="text"
              style={{ padding: "12px 20px" }}
              value={this.state.value}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </form>
        )}
        {password && (
          <div className="wrapper" style={{ display: "block" }}>
            <div className="siteLogo" style={{ padding: "50px 0  0 50px" }}>
              <a onClick={this.handleHome} className="app-navigation">
                <img src={logo} width={300} />
              </a>
            </div>

            <div className="app-body">
              <div className="app-side-bar">
                <a onClick={this.handleAbout} className="app-navigation">
                  About us
                </a>

                <a onClick={this.handleGallery} className="app-navigation">
                  Gallery
                </a>

                <a onClick={this.handleContact} className="app-navigation">
                  Contact us
                </a>
              </div>
              <div className="contents">
                {showAboutUs && <AboutUs />}
                {showGallery && <Gallery />}
                {showContactUs && <ContactUS />}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
