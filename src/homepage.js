import React from 'react';
import DisplayBlog from './fetchBlog';
import './App.css';


function Homepage(){
  
   return (
          <div className="homePage">
             <div className="homePageTop">
                <div className="Overlay">
                   "Today a reader tomorrow a leader."
                </div>
             </div>
                <div className="homePageMiddle">
                  <DisplayBlog/> 
                </div>
           </div>
   )
}

export default Homepage;