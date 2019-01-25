import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import img1 from "./img/01.jpg";
import img2 from "./img/02.jpg";
import img3 from "./img/03.jpg";
import img4 from "./img/04.jpg";
import img5 from "./img/05.jpg";
import img6 from "./img/06.jpg";
import img7 from "./img/07.jpg";
import img8 from "./img/08.jpg";

class Gallery extends React.Component {
  render() {
    return <Tiles data={this.props.data} />;
  }
}

class Tiles extends React.Component {
  render() {
    const data = [
      {
        id: 1,
        name: "by - Anugraha",
        image: img1
      },
      {
        id: 2,
        name: "by - Anugraha",
        image: img2
      },
      {
        id: 3,
        name: "by - Anugraha",
        image: img3
      },
      {
        id: 4,
        name: "by - Anugraha",
        image: img4
      },
      {
        id: 5,
        name: "by - Anugraha",
        image: img5
      },
      {
        id: 6,
        name: "by - Anugraha",
        image: img6
      },
      {
        id: 7,
        name: "by - Anugraha",
        image: img7
      },
      {
        id: 8,
        name: "by - Anugraha",
        image: img8
      }
    ];
    return (
      <div className="tiles">
        {data.map(data => {
          return <Tile data={data} key={data.id} />;
        })}
      </div>
    );
  }
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      mouseOver: false
    };
    // Bind properties to class instance
    this._clickHandler = this._clickHandler.bind(this);
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
    this.stylesToDisplay = this.stylesToDisplay.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      this.setState({
        mouseOver: true
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false
      });
    }
  }
  _clickHandler(e) {
    e.preventDefault();
    if (this.state.open === false) {
      this.setState({
        open: true
      });
    } else {
      this.setState({
        open: false
      });
    }
  }
  stylesToDisplay() {
    if (isMobile) {
      return {
        width: "80vw",
        height: "80vw"
        // width: "62vw",
        // height: "62vw",
        // position: "absolute",
        // top: "50%",
        // left: "50%",
        // margin: "0",
        // marginTop: "-31vw",
        // marginLeft: "-31vw",
        // boxShadow: "0 0 40px 5px rgba(0, 0, 0, 0.3)",
        // transform: "none"
      };
    }
    return {
      width: "50vh",
      height: "50vh"
    };
  }

  render() {
    return (
      <div className="container">
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          onClick={this._clickHandler}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={this.stylesToDisplay()}
          className="image"
        />
        <div className="middle">
          <div className="text">{this.props.data.name}</div>
        </div>
      </div>
    );
  }
}
export default Gallery;
