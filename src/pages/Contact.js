import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Ads from "../components/Ads.js";
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Contact" subtitle="Please contact us" />
        <div className="container">
          <h2>Contact</h2>
          <p>This is contact page</p>

          </div>
        <Ads page_name="contact"/>
      </div>
    );
  }
}

export default About;
