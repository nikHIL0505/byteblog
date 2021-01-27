//Not in use Now but will be in future

import React, { Component } from 'react';
import {EditorState,convertToRaw} from 'draft-js';
import {Editor} from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './postEditor.css'
import {Button} from 'react-bootstrap'
import axios from 'axios';
import { convertToHTML } from 'draft-convert';

class PostEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(), //To make initial value Empty
            // currentContent:'',
            author:'',
            title:''
          }
    
         this.onChange = this.onChange.bind(this)
          // this.convertContentToHTML = this.convertContentToHTML.bind(this)   
         this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        }
    
     //Change state with editor
    onChange =(editorState)=>{
        this.setState({
            editorState:editorState
        });
        // this.convertContentToHTML();
    }
    //Convert data into html
    //  convertContentToHTML = () => {
    //   const convertedContent = convertToHTML(this.state.editorState.getCurrentContent())
    //   this.setState({
    //      currentContent:convertedContent
    //   })
    //  };  
    //Set the value of title and Author name
    handleChange(event){
        const name = event.target.name
        const value = event.target.value
        this.setState({
          [name]:value
      })
    }
    //Post the data into DB
    handleSubmit(e){
        e.preventDefault();
        // const string = convertToRaw(this.state.editorState.getCurrentContent())
        // console.log(JSON.stringify(string))
            console.log(this.state.currentContent)
          //  console.log(JSON.stringify(this.state.editorState.getCurrentContent()))
              axios.post('http://advanceblogserver.herokuapp.com/api/posts/add-post',{
               title:this.state.title,
               content:this.state.editorState,
               author:this.state.author
             })
              .then(res => console.log(res))
              .catch(err => console.log(err))         
         
    }
    render() { 
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
             <Editor
              toolbarOnFocus
              editorState={this.state.editorState}
              onEditorStateChange={this.onChange}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
             />
              <Button type='submit'></Button>
             </form> 
          </div>
            );
    }
}
 
export default PostEditor;
