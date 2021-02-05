import React, {useState} from 'react';
import {authMethod} from '../firebase/authMethod';

const AuthProvider = (props) => {    
   
  const [input,setInput] = useState({firstname:'',lastname:'',email:'',phoneNumber:'',password:'',confirmPassword:''})
  const [error, setError] = useState([])
  const [token, setToken] = useState(localStorage.token)

     const handleSignUp = () =>{
     // Middleware between firebase and signUp component
     console.log("handleSignUp")
     if(input.password === input.confirmPassword){
     authMethod.signUp( input.email,  input.password,  setError, setToken);
     console.log(error,token)
    }
    else {
      setError(["Confirm password is not matching"])
    }
    }
    const handleSignIn = () => {
      console.log("handleSignIn")
      authMethod.signIn( input.email, input.password, setError, setToken );
      console.log(error, token);
    };
    const handleSignOut = () => {
      console.log("handleSignOut")
      authMethod.signOut( setError, setToken, setInput)
      console.log(error, token)
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