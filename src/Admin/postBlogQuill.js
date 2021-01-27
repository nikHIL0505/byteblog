import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
class PostBlogQuill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author:'',
            title:'',
            contents: '',
            message:'',
            count:false
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
          axios.post('http://advanceblogserver.herokuapp.com/api/posts/add-post',{
              title:this.state.title,
              content:this.state.contents,
              author:this.state.author
          })
           .then(res => this.setState({
              message:res.data.body.message,
              count:true
            }))
           .catch(err => console.log(err))
            setTimeout(()=>{
              this.props.history.push('/')
          }, 4000)
    }
    
    render() { 
        if(this.state.count){
            return (
                <h1>{this.state.message}</h1>
            )
        }
        else{
        return ( 
            <div>
              <form onSubmit={this.handleSubmit}>
              <input
              name="author"
              label="author"
              placeholder="Author name"
              value={this.state.author}
              onChange={this.handleChange}
              />
              <br/>
              <textarea
              name="title"
              label="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}/>
              <ReactQuill
              formats={this.formats}
              modules={this.modules}
              onChange={this.onChange}
              value={this.state.contents || ' '}
              />
              <Button type="submit">Post</Button>
              </form>
            </div>
         );
        }
    }
}
 
export default withRouter(PostBlogQuill);