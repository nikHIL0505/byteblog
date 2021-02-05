import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Scroll extends Component {
    componentDidUpdate(prevprops) {
      if(this.props.location.pathname !== prevprops.location.pathname)
      {
          window.scrollTo(0,0 );
      }
    }    
    render() { 
        return ( null  );
    }
}
 
export default withRouter(Scroll);