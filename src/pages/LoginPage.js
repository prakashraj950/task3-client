import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import axios from "axios";
import Ads from "../components/Ads.js";
class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={ form : ""}
    
        
}
componentDidMount() {
    const email = localStorage.getItem('email')
    const password = localStorage.getItem('password')
    axios.post('http://localhost:5000/data',{email,password})
      .then(res=>{
         console.log(res.data); 
       this.setState({form:res.data})
       localStorage.setItem('age', res.data.age);
       localStorage.setItem('city', res.data.city);
    })
  }
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Welcome" subtitle="To Login Page" />
        <div className="container">
          <h2>LoginPage</h2>
          hi..{this.state.form.username}

          </div>
        <Ads page_name="LoginPage" />
      </div>
    );
  }
}

export default LoginPage;
