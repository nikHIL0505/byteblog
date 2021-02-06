import React from 'react';
import DisplayBlog from './fetchBlog';
import './App.css'
//import Logo from './logo.svg'
import TopBackground from './homepage.jpg'

function Homepage(){
  
   return (
          <div>
             <img   alt="Welcome"  src={TopBackground} width='100%' height='500px' style={{marginTop:"50px"}}/>
                <div className="homePageMiddle">
                  <div className="homePageCard">
                  <DisplayBlog/> 
                  </div>
                   {/* <div className="homePageSVG">
                    <img alt="Read as much as you can"  src={Logo} width={350} height={350} style={{position:"sticky", top:"40px", marginLeft:"50%", marginTop:"80px",color:"rgb(70, 161, 184)"}}/>
                   </div> */}
                </div>
           </div>
   )
}

export default Homepage;