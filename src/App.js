import React, { Component } from "react";
import "./App.css";
import AboutUs from "./AboutUs";
import ContactUS from "./ContactUS";
import Gallery from "./Gallery";
import logoBlack from "./logo-black.png";
import logoWhite from "./logo-white.png";
import bgImg from "./assets/bg-dark.jpg";
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
    this.closeMenu();
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

  logo() {
    if (this.state.menu === "0") {
      return logoBlack;
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
    const password = this.state.password === "manju";
    return (
      <div className="h-screen">
        {!password && (
          <form
            style={{
              backgroundImage: `url(${bgImg})`,
              backgroundSize: "cover",
              overflow: "hidden"
            }}
            className="flex flex-col h-screen justify-center items-center text-center"
            onSubmit={this.handleSubmit}
          >
            <div className="bg-white opacity-25 m-auto p-4 w-full md:max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg">
              <div className="p-2 ">
                <div className="font-semibold text-xl mb-2">
                  Welcome to Villa Anugraha. <br />
                  To enter the website, please use your password
                </div>
              </div>
              <input
                type="text"
                className="opacity-100 text-center appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
                value={this.state.value}
                placeholder="Enter Password"
                onChange={this.handleChange}
              />
              <div className="px-6 py-4 opacity-100">
                <div className="opacity-100 font-semibold text-xl mb-2">
                  Welcome to Villa Anugraha.
                </div>
              </div>
            </div>
          </form>
        )}
        <div className="w-full flex flex-row nav justify-between">
          {password && (
            <div className="mt-10 ml-4">
              <a onClick={this.handleHome} className="">
                <img src={this.logo()} width={250} />
              </a>
            </div>
          )}
          {password && (
            <div className="mr-6 pr-6">
              <Menu
                right
                isOpen={this.state.menuOpen}
                onStateChange={state => this.handleStateChange(state)}
              >
                <a onClick={this.handleHome} className="app-navigation-white">
                  HOME
                </a>
                <a onClick={this.handleAbout} className="app-navigation-white">
                  ANUGRAHA
                </a>

                <a
                  onClick={this.handleGallery}
                  className="app-navigation-white"
                >
                  GALLERY
                </a>

                <a
                  onClick={this.handleContact}
                  className="app-navigation-white"
                >
                  CONTACT US
                </a>
              </Menu>
            </div>
          )}
        </div>
        <div className="contents">
          {showAboutUs && <AboutUs />}
          {showGallery && <Gallery />}
          {showContactUs && <ContactUS />}
        </div>
      </div>

      // <div className="wrapper bg-center">

      //   {password && (
      //     <div className="h-screen flex flex-col">
      //       <div className="flex flex-col flex sm:flex-row flex-col bg-white flex justify-between">
      //         <div className="flex flex-row justify-between">
      //           <div className="">
      //             <a onClick={this.handleHome} className="">
      //               <img src={this.logo()} width={250} />
      //             </a>
      //           </div>
      //           <div className="">

      //           </div>
      //         </div>
      //         <div className="contents">
      //           {showAboutUs && <AboutUs />}
      //           {showGallery && <Gallery />}
      //           {showContactUs && <ContactUS />}
      //         </div>
      //       </div>
      //     </div>
      //   )}
      // </div>
    );
  }
}

export default App;
