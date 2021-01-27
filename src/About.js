import React from 'react';
import image from './PngItem_2708215.png';
import './About.css';

function AboutUs(){
    return (     
              <div>
                <img src={image} className='about'   width={850} height={500} alt='Page Under Construction'/>
                <h1 className='aboutHeading'>Page is Under Construction</h1>
             </div>
)
}
export default AboutUs;