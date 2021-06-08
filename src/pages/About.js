import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Ads from "../components/Ads"
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="About" subtitle="This is about page" />
        <div className="container">
          <h2>About</h2>
          <p>About page</p>
        </div>
        <Ads page_name="About"/>
      </div>
    );
  }
}

export default About;
