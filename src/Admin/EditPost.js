import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {Button} from 'react-bootstrap';
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import '../App.css'

class UpdatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:this.props.author,
            title:this.props.title,
            contents: this.props.content,
            count:true,
            message:'',
            id:this.props.id
          }
        this.modules = {
            toolbar: [
              [{ 'font': [] }],
              [{ 'size': ['small', false,'large','huge'] }],
              ['bold', 'italic', 'underline'],
              [{'list': 'ordered'}, {'list': 'bullet'}],
              [{ 'align': [] }],
              [{ 'color': [] }, { 'background': [] }],
              ['clean']
            ]
        };
    
        this.formats = [
            'font',
            'size',
            'bold', 'italic', 'underline',
            'list', 'bullet',
            'align',
            'color', 'background'
        ];

        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)       
    }
     
    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
            [name]:value
        })
    }
    onChange = (content, delta, source, editor) => { 
        this.setState({
            contents:content
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
          axios.post('http://advanceblogserver.herokuapp.com/api/posts/edit-post',{
              id: this.state.id,
              data: {
                      title:this.state.title,
                      content:this.state.contents,
                      author:this.state.author
                      }
          })
          .then(res =>this.setState({
             count:false,
             message:res.data.body.message
          }))
          .catch(err => console.log(err))
             setTimeout(()=>{
               this.props.history.push('/')
           }, 3000)
    }
    render() {
                if(this.state.count){ 
                return ( 
              <div className="editorDiv">
                 <form onSubmit={this.handleSubmit}>
                  <input
                    name="author"
                    label="author"
                    placeholder="Author name"
                    value={this.state.author}
                    onChange={this.handleChange}
                    className="editorInput"
                   />
              
                   <textarea
                    name="title"
                    label="title"
                    placeholder="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    className="editorTextArea"/>
                  <ReactQuill
                    formats={this.formats}
                    modules={this.modules}
                    onChange={this.onChange}
                    value={this.state.contents || ' '}
                    className="editorQuill"  
                  />
                  <br/>
                   <Button type="submit" variant="outline-secondary" size="lg" block>Update</Button>
                </form>
            </div>
         );
      }
      else {
         return(
           <h1>{this.state.message}</h1>
         )
      }
    }
}
 
export default withRouter(UpdatePost);