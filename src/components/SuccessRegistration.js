import React, {useEffect} from 'react';
import Success from "../day26-rainbow.svg";
import {withRouter} from 'react-router-dom'
import "../App.css";

//After Successful Registration

function UserData(props) {
    useEffect(()=>{   
        setTimeout(()=>{
            props.history.push('/')
       }, 2000)

       
    })
     
     return(
         <div className="success">
             <img alt="image not found" src={Success} style={{height:"400px",width:"700px"}}/>
             <h1 style={{fontSize:"60px", color:"green"}}>You have Successfull Registered.</h1>
         </div>
         
     )
}
export default withRouter(UserData);