// Will show avatar
import React, { useEffect, useState } from 'react';
import Nikhil from './components/imansyah-muhamad-putera-n4KewLKFOZw-unsplash.jpg'
import Vatsalya from './components/jake-fagan-Y7C7F26fzZM-unsplash.jpg'
import Joseph from './components/joseph-gonzalez-iFgRcqHznqg-unsplash.jpg'
import Marie from './components/nojan-namdar-dUtizJyby4E-unsplash.jpg'
import Nikita from './components/omid-armin-xOjzehJ49Hk-unsplash.jpg'
import {Avatar} from '@material-ui/core'
import './App.css'
 function AuthorAvatar(props) {
      
    const [state, setState] = useState({})

    useEffect(()=>{
        setState(props.author)
    },[props.author])

         if(state==='Joseph Col'){
            return (
            <Avatar alt="J" src={Joseph}  style={{width:"50px", height:"50px"}}/>
            )}
         else if(state==="Nikhil Parashar"){
            return (
                <Avatar alt="N" src={Nikhil}  style={{width:"50px", height:"50px"}} />
            )} 
        else if(state==="Marie Forleo"){
            return ( 
                <Avatar alt="P" src={Marie} style={{width:"50px", height:"50px"}}/>
             )
            }
        else if(state==="Nikita Singh"){
            return(
                <Avatar alt="N" src={Nikita}  style={{width:"50px", height:"50px"}} />
            )
        }
        else {
            return(
                <Avatar alt="N" src={Vatsalya} style={{width:"50px", height:"50px"}}/>
            )
        }
        
}
 
export default AuthorAvatar;