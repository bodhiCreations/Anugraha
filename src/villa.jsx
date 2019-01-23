import React, { Component } from 'react';
import './villa.css'
import './slide.css'
import logo from './logo.png';
class Villa extends Component {
  render() {
    return (
      <div className="wrapper" style={{display: 'block'}}>
        <div id="countainer">
          <header>
            <h1 className="sitename">
              <a href="https://apologia.jp/index.html"><img  src={logo} width={500} /></a>
            </h1>
            {/* <div className="button">
              <a href="https://www.instagram.com/apologia_jp/"><img src={logo} width={29} height={30} alt /></a>
            </div> */}
          </header>
          <div id="side">
            <ul>
              <li className="shop">
                <a href="https://apologia.jp/philosophy/index.html" className="nav_shop">The Villa</a>
              </li>
              <li className="shop">
                <a href="https://apologia.jp/collection/" className="nav_shop">Collection</a>
              </li>
              <li className="stockist">
                <a href="https://apologia.jp/about/index.html">About us</a>
              </li>
            </ul>
          </div>
          {/* side */}
          {/* humMenu */}
          <div className="humMenu" id="floatBtn">
            <div className="humMenu01" />
            <div className="humMenu03" />
          </div>
          {/* //humMenu */}
          {/* gNav */}
          <nav className="gNavi" id="floatNav">
            <a href="https://apologia.jp/index.html">
              <img src="./src/logo_01.svg" width={200} /></a>
            <div className="accordion">
              <ul>
                <li>
                  <a href="https://apologia.jp/philosophy/index.html"><h5>Philosophy</h5></a>
                </li>
                <li>
                  <a className="toggle">
                    <h5>Collection</h5>
                    <p className="accordion_icon"><span /><span /></p>
                  </a>
                  <ul className="category">
                    <li>
                      <a href="https://apologia.jp/collection/">New arrival</a>
                    </li>
                    <li className="hr" style={{width: '12px', borderTop: 'solid 0.8px #fff', paddingBottom: '5px', marginTop: '5px'}} />
                    <li>
                      <a href="https://apologia.jp/collection/storage.html">Storage</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/collection/table.html">Table</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/collection/chair.html">Chair</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/collection/lighting.html">Lighting</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/collection/mirror.html">Mirror</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/collection/other.html">Other</a>
                    </li>
                    <li className="hr" style={{width: '12px', borderTop: 'solid 0.8px #fff', paddingBottom: '5px', marginTop: '5px'}} />
                    <li>
                      <a href="https://apologia.jp/collection/product.html">Product</a>
                    </li>
                  </ul>
                </li>
                <li style={{marginTop: '-10px'}}>
                  <a className="toggle">
                    <h5>About us</h5>
                    <p className="accordion_icon"><span /><span /></p>
                  </a>
                  <ul className="category">
                    <li>
                      <a href="https://apologia.jp/about/index.html">About top</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/studiolease/index.html">Studio lease</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/userguide/index.html">User guide</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/postage/index.html">Postage</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/legal/index.html">Legal</a>
                    </li>
                    <li>
                      <a href="https://apologia.jp/privacypolicy/index.html">privacy policy</a>
                    </li>
                  </ul>
                </li>
                <li style={{marginTop: '-10px'}}>
                  <a href="https://apologia.jp/contact_index/index.html"><h5>Contact</h5></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/apologia_jp/" target="_blank"><h5>Instagram</h5></a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* //gNav */}
        <div id="main_content">
          <div className="title">The Villa</div>
          <div className="hr" />
          <div id="txt_jp">
            <p>
              The word ANUGRAHA was chosen as the name of this<br />
              property because it means ‘divine blessing’ in Sanskrit.<br />
              The divine aspect of the interpretation is important because,<br />
              to build a home, to create an environment that is nourishing,<br />
              joyful and beautiful, takes the assembly of both <br />
              human and heavenly hands.
              <br />
              <br />
              The Villa at the heart of the estate is a classic Keralan building,<br />
              constructed more than a century ago. It was restored under the <br />
              direction of Studio Mumbai and styled with contemporary art<br />
              from the homeowner’s private collection, and an edit of design objects.<br />
              <br />
              <br />          
              Anugraha is owned by a young family, which lives <br />
              in a separate home on the same estate.
            </p>
          </div>
        </div>
      </div>
    );
  }
};
export default Villa;