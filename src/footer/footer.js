import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
function Footer(){
 return(
     <div className="footer">
       <div className="footerGoal">
         byteblog
       </div>
       <div className="footerNav">
             <FontAwesomeIcon icon={faInstagram} size="2x" className="font"/>
             <FontAwesomeIcon icon={faTwitter} size="2x" className="font"/>
             <FontAwesomeIcon icon={faFacebook} size="2x" className="font"/>
             <FontAwesomeIcon icon={faPinterest} size="2x" className="font"/>
       </div>
     </div>
 )

}
export default Footer;