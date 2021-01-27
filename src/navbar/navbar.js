import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
//import Style from './App.css'
import './navbar.css'
export default function Navbar() {
  
  return (
    <nav>
       <div className="nav-logo">
         <div>byteblog</div>
       </div>
       <ul className="nav-links">
          <Link to="/home" style={{textDecoration:"none"}}>
            <li>
            <FontAwesomeIcon icon={faHome} size="lg"/>
              <h5>Home</h5> 
            </li>
           </Link>
          <Link to="/aboutus" style={{textDecoration:"none"}}>
            <li>
              <FontAwesomeIcon icon={faInfoCircle} size="lg"/>
               <h5>AboutUs</h5>
            </li>
          </Link>
          <Link to="/editorPractice" style={{textDecoration:"none"}}>
            <li>
              <FontAwesomeIcon icon={faFolderPlus} size="lg"/>
              <h5>NewPost</h5>
            </li>
          </Link>
       </ul>
    </nav>
  );
}

