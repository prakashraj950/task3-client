import React, { Component } from "react";
import axios from 'axios';

class Ads extends Component {
    constructor(){
        super();
        this.state={data:""}
    }

    componentDidMount(){
        this.fetchAd();
    }
    fetchAd=()=>{
      axios.post('http://localhost:8000/ad',{})
        .then((res)=>{
            this.setState({data:`http://localhost:8000/ads/${res.data}`})
        })
        setTimeout(this.fetchAd,20*1000)
    }

  render() {
      const {data} =this.state
    return (
      <div>
        <img src={data} width="200" height="200"/>
       
      </div>
    );
  }
}

export default Ads;
