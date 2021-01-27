import React, { Component } from 'react';
//import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
//import CssBaseline from "@material-ui/core/CssBaseline"
//import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link} from 'react-router-dom'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstname:'',
      lastname: '',
      email:'',
      phoneNumber:'',
      password:'',
      confirmPassword:' ',
      loading: false
     }
  }
  
	

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.setState({ loading: true });
		}
   render() { 
    return (
      <Container component="main" maxWidth="xs">
      <div >              
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form  noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
 
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                required
               />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                autoComplete="phoneNumber"
                pattern="[7-9]{1}[0-9]{9}"
                onChange={this.handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
 
                onChange={this.handleChange}
              />
            </Grid>

            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.handleSubmit}
          >
            Sign Up

          </Button>
          <Grid container justify="flex-end">
            <Grid item>
             <p>
                Already have an account? <Link to='/login'>Login</Link>
              </p>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
      );
   }
  }
   

export default SignUp;