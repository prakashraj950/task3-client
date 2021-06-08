import React, { Component } from "react";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
import Ads from "../components/Ads";
import axios from "axios";
class Blog extends Component { 
   constructor(props){
       super(props);
       this.state={data:""}
    
   }

   componentDidMount(){
    const {match: { params }} = this.props;
    console.log(params.name);
       axios.get(`http://localhost:5000/Blog/${params.name}`)
       .then((res)=>{
         console.log(res);
           this.setState({data:res.data})
       })
   }
    
  
    render() {
      const {match: { params }} = this.props;
    return (
      <div>
        <Navbar />
        <Banner title="Blog" subtitle="This is about page" />
        <div className="container">
          <h2>{params.name}</h2>
          <p>{this.state.data}</p>
        </div>
        <div>
          <Ads page_name={`Blog/${params.name}`} />
        </div>
      </div>
    );
  }
}


export default Blog;
