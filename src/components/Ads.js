import React, { Component } from "react";
import axios from 'axios';

class Ads extends Component {
    constructor(){
        super();
        this.state={data:"",
      service_id:null,
    timer:null}
    }

    componentDidMount(){
        this.fetchAd();
        
    }
    componentWillUnmount(){
       {if (this.state.timer !== null)clearTimeout(this.state.timer);}
      
    }
    age_group=(age)=>{
      if (age <= 18){
        return 1;
      }
      else if (age <=25){
        return 2;
      }
      else if (age <=40){
        return 3;
      }
      else{
        return null;
      }
    }

    fetchAd= async()=>{
      const age_group = this.age_group(localStorage.getItem('age'));
      const city = localStorage.getItem('city');
      const user = localStorage.getItem('email')
      const ip = (await axios.get('https://api.ipify.org?format=json')).data.ip;

      axios.post('http://localhost:8000/ad',{domain_id:1,page_name:this.props.page_name,user:user,ip_address:ip,age_group:age_group,city:city})
        .then((res)=>{
            console.log(res.data);
            this.setState({data:`http://localhost:8000/ads/${res.data.file_name}`,service_id:res.data.service_id})

        })
        this.setState({timer:setTimeout(this.fetchAd,20*1000)})
    }
    onClick=()=>{
      if (this.state.service_id !==null){
      axios.post('http://localhost:8000/click',{service_id:this.state.service_id})
    }
    }

  render() {
      const {data} =this.state
    return (
      <div>
        <img src={data} width="200" height="200" onClick={this.onClick}/>
       
      </div>
    );
  }
}

export default Ads;
