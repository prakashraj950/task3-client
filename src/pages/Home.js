import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Footer from "../components/Footer.js";
import {Redirect} from 'react-router-dom';
import axios from "axios";
import Ads from "../components/Ads.js";
class Home extends Component {
  constructor(props){
    super(props);
    this.state={step:1,
    email:"",
  password:"",
}
  }
  


onRegisterHandle=()=>{
  console.log("helo");
  this.setState({step:2});
}
onChangehandle=(e)=>{
const name = e.target.name;
this.setState({[name]:e.target.value})
}

login=()=>{ 
  console.log("LOG");
  axios.post('http://localhost:5000/login',{email:this.state.email,password:this.state.password})
  .then((res)=>{
    console.log(res)
    if (res.data.status==="success"){
    this.props.setAppState(this.state.email,this.state.password)
    this.setState({step:3})
  }
  })
}


  render() {
    const{ step,email,password} = this.state
    switch (step) {
      case 1:
        
    return (
      <div>
        <Navbar />
        <Banner title="Welcome" subtitle="Home page" />
        <div className="container">
          <h2>Welcome</h2>
          <div>
          
              Email
              <input name="email" value={email} type="text" onChange={this.onChangehandle}/>
              <br />
              <br />
              PASSWORD
              <input name="password" type="password" value={password} onChange={this.onChangehandle} />
              <br />
              <br />
              <button onClick={this.login}>Login</button>
              Dont have an account?<button onClick={this.onRegisterHandle}>Register</button>
          
          </div>
        </div>
        <div>
          <Ads page_name="Home" />
        </div>
        <Footer />
      </div>
    );
    case 2:
      return (<Redirect to={"RegisterPage"}/>);
      case 3:
        return(<Redirect to={"LoginPage"} />);
  }
}
}
export default Home;
