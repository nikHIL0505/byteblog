import React, {useContext } from 'react';
import {Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Successful from './SuccessRegistration'
import "../App.css"
import SignUpIllustration from '../undraw_welcome_cats_thqn.svg'
import {firebaseAuth} from '../provider/authProvider'
//import {withRouter} from 'react-router-dom';

 const SignUp = () => {
   
   const {handleSignUp, input, setInput, error, setError, token} = useContext(firebaseAuth)


    const handleSubmit = (e) => {
      e.preventDefault();
      handleSignUp();
    };

    const handleChange = (e) =>{
      const {name,value} = e.target
      setInput(prev => ({...prev, [name]:value}))
      if(error.length > 0){
        setError([])
      }
    }
   
    if(!token){
    return (
    <div className="signUpBackground">
      <div className="form">
        <img  style={{marginTop:"150px",height:'180px', width:"180px"}} src={SignUpIllustration} alt="SignUp"/>
        <div className ="signUpForm">
           <div className="heading">Sign Up</div>                
            <form onSubmit={handleSubmit}>
             <div className="formLayout">
               
               <input
                type="text"
                placeholder="First Name"
                name="firstname"
                value={input.firstname}
                onChange={handleChange}
                className="signUpInput"
                required
               
                />
               
               <input 
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
                className="signUpInput"
                required
               
                />
               
               <input
               type="email"
               placeholder="Email"
               name="email"
               value={input.email}
               onChange={handleChange}
               className="signUpInput"
               required
               
               />
               
               <input
                type="phone"
                name="phoneNumber"
                placeholder="Phone"
                value={input.phoneNumber}
                required
                pattern="[7-9]{1}[0-9]{9}"
                onChange={handleChange}
                className="signUpInput"
               />
                
                <input
                 type="password"
                 placeholder="Password"
                 name="password"
                 value={input.password}
                 onChange={handleChange}
                 required
                 className="signUpInput"/>
                
                <input 
                 type="password"
                 placeholder="Confirm Password"
                 name="confirmPassword"
                 value={input.confirmPassword}
                 onChange={handleChange}
                 required
                 className="signUpInput"
                 />
                 {error.length>0 ? error.map(error => <p style={{color:"red"}}>{error}</p>) : null }
                 <Button type="submit" variant="outline-success">SignUp</Button>
                 <p>Aready have an account? <Link to="/login">Login</Link></p>
               </div>
             </form>
          </div>
      </div>
      </div>
       )}
       else {
         return <Successful/>
       }
}


   

export default SignUp;