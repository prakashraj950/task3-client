import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container-fluid bg-dark text-white mt-5 ">
        <div className="container">
          <div className="row py-3">
            <div className="col-md-6 text-left">
              Designed by{" "}
              <a href="#" target="_blank">
                Develop
              </a>
              &#169; {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
