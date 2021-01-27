import React, { Component } from 'react';
import './App.css'
//import axios from 'axios';
class RecentPost extends Component {
    constructor(props) {
        super(props);
        this.state = { 
  
         }
    }
 

    render() { 
        return ( 
             <div className="recentPost">
                <ul>
                 <li>Post1</li>
                 <li>Post2</li>
                 <li>Post3</li>
                 <li>Post4</li>
                 <li>Post5</li>
                </ul>
             </div>
         );
    }
}
 
export default RecentPost;