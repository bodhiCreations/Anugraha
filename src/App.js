import React, { Component } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ContactUS from "./ContactUS";
import Gallery from "./Gallery";
import logoBlack from "./logo-black.png";
import logoWhite from "./logo-white.png";
import bgImg from "./bg-black.jpg";
import { isMobile } from "react-device-detect";
import { slide as Menu } from "react-burger-menu";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menu: "0", menuOpen: false, password: "" };
    this.handleAbout = this.handleAbout.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleGallery = this.handleGallery.bind(this);
    this.handleHome = this.handleHome.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.wrapperStyle = this.wrapperStyle.bind(this);
    this.swapColor = this.swapColor.bind(this);
    this.logo = this.logo.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  handleHome() {
    this.setState(state => ({
      menu: "0"
    }));
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  showSettings(event) {
    event.preventDefault();
  }

  handleAbout() {
    this.setState(state => ({
      menu: "1"
    }));
    this.closeMenu();
  }

  handleGallery() {
    this.setState(state => ({
      menu: "2"
    }));
    this.closeMenu();
  }

  handleContact() {
    this.setState(state => ({
      menu: "3"
    }));
    this.closeMenu();
  }
  handleChange(event) {
    this.setState({ password: event.target.value });
  }

  wrapperStyle() {
    if (this.state.menu === "0") {
      return {
        // display: "block",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        overflow: "hidden"
        // backgroundColor: "#cccccc"
      };
    }
    return {
      display: "block"
    };
  }

  logo() {
    if (this.state.menu === "0") {
      return logoWhite;
    }
    return logoBlack;
  }

  swapColor() {
    if (this.state.menu === "0") {
      return "app-navigation-white";
    }
    return "app-navigation-black";
  }

  render() {
    const showHome = this.state.menu === "0";
    const showAboutUs = this.state.menu === "1";
    const showGallery = this.state.menu === "2";
    const showContactUs = this.state.menu === "3";
    const password = this.state.password === "bodhi";
    console.log(isMobile);
    return (
      <div className="wrapper" style={this.wrapperStyle()}>
        {!password && (
          <form className="app-password" onSubmit={this.handleSubmit}>
            <img
              src={this.logo()}
              width={300}
              style={{ padding: "40px 20px" }}
            />
            <input
              type="text"
              style={{ padding: "12px 20px" }}
              value={this.state.value}
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </form>
        )}
        {password && !isMobile && (
          <div className="wrapper" style={this.wrapperStyle()}>
            <div className="siteLogo" style={{ padding: "50px 0  0 50px" }}>
              <a onClick={this.handleHome} className="app-navigation">
                <img src={this.logo()} width={300} />
              </a>
            </div>

            <div className="app-body">
              <div className="app-side-bar">
                <a onClick={this.handleAbout} className={this.swapColor()}>
                  About us
                </a>

                <a onClick={this.handleGallery} className={this.swapColor()}>
                  Gallery
                </a>

                <a onClick={this.handleContact} className={this.swapColor()}>
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
        {password && isMobile && (
          <div className="wrapper" style={this.wrapperStyle()}>
            <div className="mobile-top-bar">
              <div
                className="siteLogo"
                style={{ padding: "50px 30px 0 20px", flex: "7" }}
              >
                <a onClick={this.handleHome} className="app-navigation">
                  <img src={this.logo()} width={250} />
                </a>
              </div>
              <div
                className="mobile-menu"
                style={{ flex: "1", padding: "10px" }}
              >
                <Menu
                  right
                  isOpen={this.state.menuOpen}
                  onStateChange={state => this.handleStateChange(state)}
                >
                  <a onClick={this.handleHome} className="app-navigation-white">
                    Home
                  </a>
                  <a
                    onClick={this.handleAbout}
                    className="app-navigation-white"
                  >
                    About us
                  </a>

                  <a
                    onClick={this.handleGallery}
                    className="app-navigation-white"
                  >
                    Gallery
                  </a>

                  <a
                    onClick={this.handleContact}
                    className="app-navigation-white"
                  >
                    Contact us
                  </a>
                </Menu>
              </div>
            </div>
            <div className="contents">
              {showAboutUs && <AboutUs />}
              {showGallery && <Gallery />}
              {showContactUs && <ContactUS />}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
