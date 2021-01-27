import React, { Component } from 'react';
import {Button} from "react-bootstrap"
import {Container, Row} from 'react-bootstrap'
import axios from "axios";
 class Postblog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : ' ',
            content: '',
            author:''
          
          }
          this.handleChange = this.handleChange.bind(this)
          this.handleSubmit = this.handleSubmit.bind(this)
      }
    handleChange(e){
      const target = e.target
      const value = target.value
      const name = target.name
      this.setState({
          [name]:value        
      })
    }
    handleSubmit(e){
      e.preventDefault()
      console.log(this.state)
      //  axios.post("https://advanceblogserver.herokuapp.com/posts/add-post",{
      //    title: this.state.title,
      //    content: this.state.content,
      //    author:this.state.author
      //  })
      // .then((res)=>console.log(res))
      // .catch((err)=>console.log(err))
    }
    render() { 
        return ( 
                 <Container>
                      <form noValidate onSubmit={this.handleSubmit}>
                         <Row>
                          <input
                           id="author"
                           type="text"
                           placeholder="Author's Name"
                           name="author"
                           label="Author Name"
                           value={this.state.author}
                           onChange = {this.handleChange}
                            required
                           />
                           </Row>
                           <Row>
                          <textarea 
                           id='title'
                           name='title'
                           placeholder="Title"
                           label='Title'
                           rows = {3}
                           cols = {100}
                           value={this.state.title}
                           onChange={this.handleChange}
                           required
                           />
                           </Row>
                           <Row>
                          <textarea
                           id='content'
                           name='content'
                           placeholder="Write your blog."
                           label='content'
                           rows = {20}
                           cols = {100}
                           value={this.state.content}
                           onChange={this.handleChange}
                           required
                           />
                           </Row>  
                          <Button 
                          type='submit'
                        >Post</Button>
                   </form>
                 </Container>
            
          );
    }
 }
 
 export default Postblog;