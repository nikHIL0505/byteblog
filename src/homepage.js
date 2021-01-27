import React from 'react';
import DisplayBlog from './fetchBlog';
import './App.css'

function homepage(){
   return (
          <div className="blogCardDisplay">
            <DisplayBlog />
           </div>
   )
}

export default homepage;