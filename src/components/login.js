import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser} from '@fortawesome/free-solid-svg-icons'
//import CssBaseline from '@material-ui/core/CssBaseline';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import "../App.css"

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
            <div className="LoginPage">
               <Avatar>
                    <FontAwesomeIcon icon={faUser} />
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
                     
                        <Button type="submit">Login</Button>
                        </div>
                    </form>
                
            </div>
         );
    }
}
 
export default Login;