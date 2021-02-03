import React, { useEffect, useState } from 'react';
import helen from './components/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import kelen from './components/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg'
import Melen from './components/jake-fagan-Y7C7F26fzZM-unsplash.jpg'
import Feren from './components/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import {Avatar} from '@material-ui/core'
import './App.css'
 function AuthorAvatar(props) {
      
    const [state, setState] = useState({})

    useEffect(()=>{
        setState(props.author)
    })

         if(state==='Joseph Col'){
            return (
            <Avatar alt="J" src={helen}  style={{width:"120px", height:"120px"}}/>
            )}
         else if(state==="Nikhil Parashar"){
            return (
                <Avatar alt="N" src={kelen}  style={{width:"120px", height:"120px"}} />
            )} 
        else {
            return ( 
                <Avatar alt="P"  style={{width:"120px", height:"120px"}}/>
             )
        };
}
 
export default AuthorAvatar;