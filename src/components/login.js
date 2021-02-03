import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons'
//import CssBaseline from '@material-ui/core/CssBaseline';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../App.css"
import Image2 from "../undraw_authentication_fsn5.svg"

class Login extends Component {
    state = { 
        email:'',
        password:''
     }

     handleChange = (e) => {
       const name = e.target.name
       const value = e.target.value
       this.setState({
           [name]:value
       })
     }

     handleSubmit = (e) => {
       e.preventDefault()
     }
    render() { 
        return ( 
             <div className="LoginPageBackground">
               <div className="LoginPage">
                <img  style={{height:"180px", width:"180px"}} alt="image not found" src={Image2}/>
                <div className="LoginPage1">
                  <Avatar style={{marginLeft:"36%",marginTop:"35px", width:"80px", height:"80px", backgroundColor:"rgb(221, 105, 125)"}}>
                     <FontAwesomeIcon icon={faUser} size="2x"/>
                  </Avatar>
                 <form onSubmit={this.handleSubmit}>
                     <div className="LoginPage2">
                        <label>Username</label>
                        <input 
                        type="email"
                        name="email"
                        id="email"
                        label="email"
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                        value={this.state.email}
                        className="LoginInput"
                        autoComplete
                        required/>
                        <label>Password</label>
                        <input
                        type="password"
                        name="password"
                        label="password"
                        placeholder="Enter Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        className="LoginInput"
                        required
                        />
                        <Button type="submit" variant="outline-info">Login</Button>
                        <p>Already have an account ? <Link to="/signup">SignUp</Link></p>
                        </div>
                    </form>
                </div>
              </div>
            </div>
         );
    }
}
 
export default Login;