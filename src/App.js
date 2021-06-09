import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Services from "./pages/services";
import Bloglist from "./pages/Bloglist"
import LoginPage from "./pages/LoginPage";
import React from "react";
import Blog from "./pages/Blog";
export default class App extends React.Component {
  constructor(){
    super();
    
    
}
  
  
  setAppState=(email,password)=>{
    localStorage.setItem('email',  email);
    localStorage.setItem('password', password);
    
  }
   render(){
    
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" >
            <Home setAppState={this.setAppState}/>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/RegisterPage" component={RegisterPage} />
          <Route path="/services" component={Services} />
          <Route path="/Bloglist" component={Bloglist} />
          <Route path="/Blog/:name" component={Blog} />
          <Route path="/LoginPage" >
            <LoginPage />
          </Route>
        </div>
      </Router>
    </div>
  );
}
}
