import React from 'react';
import DisplayBlog from './fetchBlog';
import './App.css'
import Logo from './logo.svg'
import Photo from './homepage.jpg'

function homepage(){
   return (
          <div>
             <img src={Photo} width='100%' height='500px'/>
                <div className="homePageMiddle">
                  <div className="homePageCard">
                    <DisplayBlog/>
                  </div>
                  <div className="homePageSVG">
                     <img src={Logo} width={350} height={350}/>
                   </div>
                </div>
           </div>
   )
}

export default homepage;