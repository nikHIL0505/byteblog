
//This component will fetch all blogs-data.
import React, { Component } from 'react';
import './App.js';
import axios from 'axios';
import BlogDisplay from './blogCard.js'
import helen from './components/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import kelen from './components/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg'
import Melen from './components/jake-fagan-Y7C7F26fzZM-unsplash.jpg'
import Feren from './components/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'


//import {Link} from 'react-router-dom'
class DisplayBlog extends Component {
     constructor(props) {
         super(props)
         this.state = {
             body: [],
          
            }
      }


    componentDidMount() {
              axios.get('http://advanceblogserver.herokuapp.com/api/posts/get-posts')
             .then(res => this.setState({
               body:res.data.body.posts,
              
             }))
             .catch(err => console.log(err) )
        
     }

    render() {
        const blogData = this.state.body
       return (
                <div className="BlogCard">
                  
                   {blogData.map((item, index) => {
                         let avatar = ''
                         switch(item.author){
                           case "Joseph Col": {
                             avatar = helen
                             break
                           }
                           case "Nikhil Parashar" : {
                             avatar = kelen
                             break
                           }
                           default:{
                             avatar = Melen
                           }
                         }
                         return (
                        <BlogDisplay key={item._id}  body={item} img={avatar} />
                   )})}
                
                 </div>
            )
     }
}
     
export default DisplayBlog;