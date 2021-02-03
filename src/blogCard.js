
//This component will fetch required data from endpoint

import React, { Component } from 'react';
import './blogCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Avatar} from '@material-ui/core'
//import Pic from './components/jake-fagan-Y7C7F26fzZM-unsplash.jpg'
import {Link} from 'react-router-dom'
import BlogCardTime from './blogCardTime'
import { Skeleton } from '@material-ui/lab'
class BlogDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created_at: this.props.body.created_at,
            title: this.props.body.title,
            content:  this.props.body.content,
            author : this.props.body.author,
            img:this.props.img,
            loading: true
          }
          console.log(this.props.body)
        }
        componentDidMount = () =>{
          if(this.state.title){
            this.setState({
              loading:false
            })
          }
        }

    render() { 
         let body = this.state.content.substring(0,180);
         let bodyModified = body.split('<br/>')
         bodyModified = bodyModified+"...";
         let splitString = this.props.body.title
           splitString = splitString.split(' ' ||'?').join('-') 
        return ( 
            <div className='blogBound1'>
              <div className="author_avatar">
                  { this.state.loading ? <Skeleton animation="wave" variant="circle" width={50} height={50}/> : <Avatar alt="N" src={this.state.img} style={{width:"50px" , height:"50px"}}/> }
                    
                     <p>{this.state.author}</p>
              </div>
             <div className='blogText'>
               <div className='blogTitle'>
                  <Link to={`/blogs/${splitString}`} style={{textDecoration:"none"}}><h3>{this.state.title}</h3></Link>
               </div>
               <div className='blogContent'>
                <p dangerouslySetInnerHTML={{__html :bodyModified}}/>
                 
               </div>
               </div>
                <div className="lower-area">
                   <div className="lower-area1">
                     <BlogCardTime time={this.state.created_at}/>
                   </div>
                   <div className="lower-area1 logo">
                     <FontAwesomeIcon icon={faBookmark} size="sm" style={{float:"right"}}/>
                   </div>
                </div>
          </div>
         );
    }
}
 
export default BlogDisplay;