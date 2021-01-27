import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
//import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom'



class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: '',
            loading:false    
         }
         this.handleChange = this.handleChange.bind(this)
         this.handleSubmit = this.handleSubmit.bind(this)
         }

    handleChange(event){
        this.setState({
           [event.target.name]:event.target.value
        })
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
    }

    handleSubmit(event){
        event.preventDefault()
      console.log(this.state.loading)

    }
    render() { 
        return (          
           <Container component='main' maxWidth='xs'>   
               <div>
                   <Avatar variant="square">
                       L
                   </Avatar>
                   <Typography component="h1" variant="h2">
                      Signin
                   </Typography>
                    <form noValidate>
                       <Grid container spacing={2}>
                         <Grid item xs={12} sm={6}>
                           <TextField 
                           size='small'
                           fullWidth
                           id='email'
                           name='email'
                           label='Email'
                           variant="outlined"
                           value={this.state.email}
                           onChange={this.handleChange}
                           autoComplete = "email"
                           required
                           />
                          </Grid>
                         <Grid item xs={12} sm={6}>
                           <TextField 
                            type='password'
                            size='small'
                            id='password'
                            name='password'
                            label = 'Password'
                            variant="outlined"
                            fullWidth
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                           />
                          </Grid>
                        <Button
                        type='submit'
                        variant='outlined'
                        color='secondary'
                        disabled = {
                            !this.state.email || !this.state.password
                        }
                        onClick= {this.handleSubmit}
                        >
                        Signin
                        </Button>
                       </Grid>
                    </form>
                    <p>Don't have account?<Link to='/signup'>SignUp</Link></p>
               </div>

           </Container>
        
         );
    }
}
 
export default LogIn;