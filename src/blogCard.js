//This component will fetch required data from endpoint
import React, { Component } from 'react';
import './blogCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Avatar} from '@material-ui/core'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import BlogCardTime from './blogCardTime'
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
         
        }
        componentDidMount = () =>{
          if(this.state.title){
            this.setState({
              loading:false
            })
          }
        }

    render() { 
         let body = this.state.content.substring(0,300);
          body = body.split('<br/>')
        //  bodyModified = bodyModified + "...";
        body = body+"..."
         let splitString = this.props.body.title
         splitString = splitString.split('-').join('+');  
         splitString = splitString.split(' ').join('-')

        return ( 
           <Fade> 
            <div className='blogBound1'>
              <div className="author_avatar">
               <Avatar alt="N" src={this.state.img} style={{width:"50px" , height:"50px"}}/> 
                  <div>
                     <p style={{fontSize:"14px", color:"black"}}><i>Created by</i></p>
                     <p>{this.state.author}</p>
                   </div>
              </div>
             <div className='blogText'>
               <div className='blogTitle'>
                  <Link to={`/blogs/${splitString}`} style={{textDecoration:"none"}}><p>{this.state.title}</p></Link>
               </div>
               <div className='blogContent'>
                <p dangerouslySetInnerHTML={{__html :body}}/>
                 
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
          </Fade>
         );
    }
}
 
export default BlogDisplay;