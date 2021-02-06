import React, { useContext, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../App.css"
import LoginIllustration from "../undraw_authentication_fsn5.svg"
import {withRouter} from 'react-router-dom';
import {firebaseAuth} from '../provider/authProvider'
const  Login = (props) => {

    const {handleSignIn, input, setInput, error, setError, token} = useContext(firebaseAuth)

    useEffect(() => {
         if(token){
           setTimeout(()=>{
             props.history.push('/')
           },1000)
         }       
    })


     function handleChange(e) {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
    if (error.length > 0) {
      setError([]);
    }
  }
    const  handleSubmit = (e) => {
       e.preventDefault()
       handleSignIn()
     }
     return ( 
             <div className="LoginPageBackground">
               <div className="LoginPage">
                <img  style={{height:"180px", width:"180px"}} alt="Login" src={LoginIllustration}/>
                <div className="LoginPage1">
                  <Avatar style={{marginLeft:"36%",marginTop:"35px", width:"80px", height:"80px", backgroundColor:"rgb(221, 105, 125)"}}>
                     <FontAwesomeIcon icon={faUser} size="2x"/>
                  </Avatar>
                 <form onSubmit={handleSubmit}>
                     <div className="LoginPage2">
                        <label>Username</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        label="email"
                        placeholder="Enter Username"
                        onChange={handleChange}
                        value={input.email}
                        className="LoginInput"
                        required/>
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        label="password"
                        placeholder="Enter Password"
                        onChange={handleChange}
                        value={input.password}
                        className="LoginInput"
                        required
                        />
                        {error.length > 0 ? error.map(error => <p  style={{color:"red"}}>{error}</p>) : null}
                        <Button type="submit" variant="outline-danger">Login</Button>
                        <p>Already have an account ? <Link to="/signup">SignUp</Link></p>
                        </div>
                    </form>
                </div>
              </div>
            </div>
         );
    
}
 
export default withRouter(Login);