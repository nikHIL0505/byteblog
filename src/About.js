import React, {PureComponent} from 'react';
import image from './PngItem_464864.png';
import './About.css';

class AboutUs extends PureComponent {
    render() { 
    return (     
              <div className="about">
                <img src={image} width='100%' height='100%' alt='Page Under Construction'/>
              </div>
        )}
}
export default AboutUs;