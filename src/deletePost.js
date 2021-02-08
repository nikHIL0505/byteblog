import React, { Component } from 'react';
import Axios from 'axios';

import {withRouter} from 'react-router-dom'
class DeletePost extends Component {
    constructor(props){
        super(props); 
        this.state = {
            message:''
        }    
    }

    componentDidMount(){
           Axios.post('https://cors-anywhere.herokuapp.com/advanceblogserver.herokuapp.com/api/posts/delete-post',{
            id:this.props.id
        })
        .then(res => this.setState({
             message:res.data.body.message
        }))
        .catch(err => console.log(err))
        setTimeout(()=>{
            this.props.history.push('/')
        }, 3000)
     }

    render(){
        //  setTimeout(()=>{
        //      return <Redirect to='/home'/>
        //   },4000) 
    return ( 
            <div>
                <h2>{this.state.message}</h2>

            </div>
         );
    }
}
 
export default withRouter(DeletePost);