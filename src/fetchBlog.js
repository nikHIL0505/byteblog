
//This component will fetch all blogs-data.
import React, { Component } from 'react';
import './App.js';
import axios from 'axios';
import BlogDisplay from './blogCard.js'
import Nikhil from './components/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg'
import Vatsalya from './components/jake-fagan-Y7C7F26fzZM-unsplash.jpg'
import Joseph from './components/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import Marie from './components/nojan-namdar-dUtizJyby4E-unsplash.jpg'
import Nikita from './components/omid-armin-xOjzehJ49Hk-unsplash.jpg'
import {Skeleton} from "@material-ui/lab"

//import {Link} from 'react-router-dom'
class DisplayBlog extends Component {
     constructor(props) {
         super(props)
         this.state = {
             body: [],
             loading:true
            }
      }


    componentDidMount() {
              axios.get('http://advanceblogserver.herokuapp.com/api/posts/get-posts')
             .then(res => this.setState({
               body:res.data.body.posts,
               loading:false
             }))
             .catch(err => console.log(err) )
        
     }

    render() {
        const blogData = this.state.body
       return (
                <div className="BlogCard">
                  {this.state.loading ? <Skeleton animation="wave" variant="rect" height="500px" width="600px" /> :
                    blogData.map((item, index) => {
                         let avatar = ''
                         switch(item.author){
                           case "Joseph Col": {
                             avatar = Joseph
                             break
                           }
                           case "Nikhil Parashar" : {
                             avatar = Nikhil
                             break
                           }
                           case "Marie Forleo" : {
                             avatar = Marie
                             break
                           }
                           case "Nikita Singh" : {
                             avatar = Nikita
                             break
                           }
                           default:{
                             avatar = Vatsalya
                           }
                         }
                         return (
                           <BlogDisplay key={item._id}  body={item} img={avatar} />
                   )})
                }
                 </div>
            )
     }
}
     
export default DisplayBlog;