import React from "react";
import "./navbar.css";
const navbar = () => {
  return (
    <div>
      <nav>
        <div className="left">
          <img src="logo1.png" width={40} height={40} />
          <h1>shopify</h1>
          <ul>
            <li>
              <a href="#">
                <select name="" id="">
                  <option value="">Solution</option>
                </select>
              </a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">
                <select name="" id="">
                  <option value="">whats's New</option>
                </select>
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </div>
        <div className="right">
          <ul>
            <li>Log in</li>
          </ul>
            <button>Start free trail</button>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
