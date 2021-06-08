import React from "react";
import axios from 'axios';
import Banner from '../components/Banner';
import Navbar from '../components/Navbar'
import {Redirect} from 'react-router-dom'
import Ads from "../components/Ads";
export default class LoginForm extends React.Component {
  constructor(props) {
    super();
    this.state={
      form:{},
      step: 1
      
    }

  }
onChangehandle=(input)=>(e)=>{
 const {form} = this.state;
 form[input] = e.target.value;
 this.setState({form})

}
Register=()=>{
   axios.post('http://localhost:5000/register',this.state.form)
  .then((res)=>{
    console.log(res);
    this.setState({step:2});
  })
  }


  render() {
    const {step} = this.state
    switch (step) {
      case 1:
        
       
    return (
      <div>
        <Navbar />
        <Banner title="Welcome" subtitle="Register Page" />
      <div>
        <form>
        USERNAME
          <input name="username" type="text" onChange={this.onChangehandle('username')} />
          <br/>
          <br/>
          
          <div>
            CITY
            <select
              name="city"
              value={values.Department}
              onChange={handleChange("city")}
            >
              <option name="city" value="chennai">
                chennai
              </option>
              <option name="city" value="coimbatore">
                coimbatore
              </option>
              <option name="city" value="nellai">
                nellai
              </option>
            </select>
          </div>
          <br/>
          <br/>
          Religion
          <input name="religion" type="text" onChange={this.onChangehandle('religion')} />
          <br/>
          <br/>
          age
          <input name="age" type="number" onChange={this.onChangehandle('age')} />
          <br/>
          <br/>
          Email
          <input name="email" type="text" onChange={this.onChangehandle('email')} />
          <br />
          <br />
          PASSWORD
          <input name="password" type="password" onChange={this.onChangehandle("password")}/>
          <br />
          <br />  
        </form>
        <button onClick={this.Register}>Register</button>
      </div>
      <Ads page_name="RegisterPage"/>
      </div>
    )
    case 2:
      return(<Redirect to={"/"} />)
  }
  
}
}
