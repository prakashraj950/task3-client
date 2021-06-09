import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Ads from "../components/Ads.js";
class Services extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Services" subtitle="this is service page" />
        <div className="container">
          <h2>Contact</h2>
          <p>This is Service page</p>

          </div>
        <Ads Page_name="services"/>
      </div>
    );
  }
}

export default Services;
