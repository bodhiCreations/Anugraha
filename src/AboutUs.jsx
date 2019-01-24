import React, { Component } from "react";
import "./style.css";
class AboutUs extends Component {
  render() {
    return (
      <div className="main_content">
        <div className="text-area">
          <div className="pages-title">
            About us
            <div className="pages-line" />
          </div>
          <p>
            The word ANUGRAHA was chosen as the name of this
            <br />
            property because it means ‘divine blessing’ in Sanskrit.
            <br />
            The divine aspect of the interpretation is important because,
            <br />
            to build a home, to create an environment that is nourishing,
            <br />
            joyful and beautiful, takes the assembly of both <br />
            human and heavenly hands.
            <br />
            <br />
            The Villa at the heart of the estate is a classic Keralan building,
            <br />
            constructed more than a century ago. It was restored under the{" "}
            <br />
            direction of Studio Mumbai and styled with contemporary art
            <br />
            from the homeowner’s private collection, and an edit of design
            objects.
            <br />
            <br />
            Anugraha is owned by a young family, which lives <br />
            in a separate home on the same estate.
          </p>
        </div>
      </div>
    );
  }
}
export default AboutUs;
