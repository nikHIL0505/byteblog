import React, {useState} from 'react';
import {authMethod} from '../firebase/authMethod';

const AuthProvider = (props) => {    
   
  const [input,setInput] = useState({firstname:'',lastname:'',email:'',phoneNumber:'',password:'',confirmPassword:''})
  const [error, setError] = useState([])
  const [token, setToken] = useState(localStorage.token)

     const handleSignUp = () =>{
     // Middleware between firebase and signUp component
     if(input.password === input.confirmPassword){
     authMethod.signUp( input.email,  input.password,  setError, setToken);
    }
    else {
      setError(["Confirm password is not matching"])
    }
    }
    const handleSignIn = () => {
      authMethod.signIn( input.email, input.password, setError, setToken );
    };
    const handleSignOut = () => {
      authMethod.signOut( setError, setToken, setInput)
    } 
  
     return (
      <firebaseAuth.Provider value={{
          handleSignUp,
          handleSignIn,
          handleSignOut,
          input,
          setInput,
          error,
          setError,
          token,
      }}>
        {props.children}
      </firebaseAuth.Provider>
    )
}
export default AuthProvider;
export const firebaseAuth = React.createContext()