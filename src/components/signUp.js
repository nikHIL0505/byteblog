
import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Successful from './SuccessRegistration'
import "../App.css"
import Image from '../undraw_welcome_cats_thqn.svg'
import auth from '../firebase'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstname:'',
      lastname: '',
      email:'',
      phoneNumber:'',
      password:'',
      confirmPassword:'',
      message:'',
      loading:false
     }
     this.handleChange = this.handleChange.bind(this)
     this.handleSubmit = this.handleSubmit.bind(this)
  }
  
	

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
    event.preventDefault();
       if(this.state.password !== this.state.confirmPassword){
         this.setState({
           message:"Passwords are not matching."
         })
       }
       else{
         auth.createUserWithEmailAndPassword(this.state.email,this.state.password)
          .then((userCredential)=>{
             console.log(userCredential);
         })
         .catch((err) => console.log(err))

         this.setState({
          message:"",
          loading:true
        });
       }
		}
   render() { 
     if(this.state.loading){
       return(
         <Successful/>
       )
    }
    else{
    return (
    <div className="signUpBackground">
      <div className="form">
        <img  style={{marginTop:"150px",height:'180px', width:"180px"}}src={Image} alt="image not found"/>
        <div className ="signUpForm">
           <div className="heading">Sign Up</div>                
            <form onSubmit={this.handleSubmit}>
             <div className="formLayout">
               
               <input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={this.state.firstname}
                onChange={this.handleChange}
                className="signUpInput"
                required
               
                />
               
               <input 
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={this.state.lastname}
                onChange={this.handleChange}
                className="signUpInput"
                required
               
                />
               
               <input
               type="email"
               placeholder="Email"
               name="email"
               value={this.state.email}
               onChange={this.handleChange}
               className="signUpInput"
               required
               
               />
               
               <input
                type="phone"
                name="phoneNumber"
                placeholder="Phone"
                value={this.state.phoneNumber}
                required
                pattern="[7-9]{1}[0-9]{9}"
                onChange={this.handleChange}
                className="signUpInput"
               />
                
                <input
                 type="password"
                 placeholder="Password"
                 name="password"
                 value={this.state.password}
                 onChange={this.handleChange}
                 required
                 className="signUpInput"/>
                
                <input 
                 type="password"
                 placeholder="Confirm Password"
                 name="confirmPassword"
                 value={this.state.confirmPassword}
                 onChange={this.handleChange}
                 required
                 className="signUpInput"
                 />
                 <p style={{color:"red"}}>{this.state.message}</p>
                 <Button type="submit" variant="outline-info">SignUp</Button>
                 <p>Aready have an account? <Link to="/login">Login</Link></p>
               </div>
             </form>
          </div>
      </div>
      </div>
       )
     }
  }
}
   

export default SignUp;