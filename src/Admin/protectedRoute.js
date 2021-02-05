import React, {useContext} from 'react';
import {firebaseAuth} from '../provider/authProvider'; 
import {Redirect} from 'react-router-dom';

const ProtectedRoute = (props) =>{
    const Component = props.component
    const {token} = useContext(firebaseAuth)
    
   return (token ? <Component/> : <Redirect to="/login"/>)

}
export default ProtectedRoute;