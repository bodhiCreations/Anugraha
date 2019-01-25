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
            The word ANUGRAHA was chosen as the name of this property because it
            means ‘divine blessing’ in Sanskrit. The divine aspect of the
            interpretation is important because, to build a home, to create an
            environment that is nourishing, joyful and beautiful, takes the
            assembly of both human and heavenly hands.
            <br />
            The Villa at the heart of the estate is a classic Keralan building,
            constructed more than a century ago. It was restored under the
            direction of Studio Mumbai and styled with contemporary art from the
            homeowner’s private collection, and an edit of design objects.
            <br />
            Anugraha is owned by a young family, which lives in a separate home
            on the same estate.
          </p>
        </div>
      </div>
    );
  }
}
export default AboutUs;
