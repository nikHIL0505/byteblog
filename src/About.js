import React from 'react';
import image from './PngItem_464864.png';
import './About.css';

function AboutUs(){
    return (     
              <div className="about">
               <div>
                <img src={image}  width={850} height={500} alt='Page Under Construction'/>
                <h1 className='aboutHeading'>Page is Under Construction</h1>
               </div>
              </div>
)
}
export default AboutUs;