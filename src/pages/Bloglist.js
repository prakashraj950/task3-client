import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import { Link } from "react-router-dom";
import Ads from "../components/Ads.js";
class Bloglist extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Welcome" subtitle="this is Blog page" />
        <div className="container">
          <h2>Blog</h2>
          <p>This is Blog page</p>
        <ul>
          <li>
              <Link  to="Blog/prakash" >
                prakash
              </Link>
            </li>
            <li>
              <Link  to="Blog/diwali" >
                diwali
              </Link>
            </li>
            <li>
              <Link  to="Blog/reactjs" >
                Reactjs
              </Link>
            </li>
            <li>
              <Link  to="Blog/javascript" >
                JavaScript
              </Link>
            </li>
          </ul>

          </div>
        <Ads page_name="Bloglist" />
      </div>
    );
  }
}

export default Bloglist;
