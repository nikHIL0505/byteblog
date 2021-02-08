import React from 'react';
import DisplayBlog from './fetchBlog';
import './App.css'
//import Logo from './logo.svg'

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
                   {/* <div className="homePageSVG">
                    <img alt="Read as much as you can"  src={Logo} width={350} height={350} style={{position:"sticky", top:"40px", marginLeft:"50%", marginTop:"80px",color:"rgb(70, 161, 184)"}}/>
                   </div> */}
                </div>
           </div>
   )
}

export default Homepage;