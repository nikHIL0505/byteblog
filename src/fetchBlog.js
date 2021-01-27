
//This component will fetch all blogs-data.


import React, { Component } from 'react';


import axios from 'axios';
import BlogDisplay from './blogCard.js'
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
               body:res.data.body.posts
             }))
             .catch(err => console.log(err) )
        
     }

    render() {
        const blogData = this.state.body
       return (
                <div>
                  <div>
                   {blogData.map((item) => <BlogDisplay key={item._id}  body={item}/>)}
                  </div>
                 </div>
            )
     }
}
     
export default DisplayBlog;