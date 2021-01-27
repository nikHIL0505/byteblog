
//This component will fetch required data from endpoint

import React, { Component } from 'react';
import './blogCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import BlogCardTime from './blogCardTime'
import ReactQuill from 'react-quill'
class BlogDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            created_at: this.props.body.created_at,
            author: this.props.body.author,
            title: this.props.body.title,
            content:  this.props.body.content
          }
          console.log(this.props.body)
    }
    render() { 
         let body = this.state.content.substring(0,180);
         body = body+"...";
         let splitString = this.props.body.title
           splitString = splitString.split(' ' ||'?'||'-').join('-') 
        return ( 
            <div className='blogBound1'>
              <div className="author_avatar">
                    <p>
                      <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                      {" "}{this.state.author}
                    </p>
                </div>
             <div className='blogText'>
               <div className='blogTitle'>
                  <Link to={`/blogs/${splitString}`} style={{textDecoration:"none"}}><h3>{this.state.title}</h3></Link>
               </div>
               <div className='blogContent'>
                 <ReactQuill
                 value={body}
                 readOnly
                 theme="bubble"
                 className="reactQuill"
                 />
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