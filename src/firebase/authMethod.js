 import firebaseConfig from './firebaseIndex'
 import firebase from 'firebase'

 export const authMethod = {
     
     // Auth method for signUp
      signUp: (email, password, setError, setToken) => {
         firebase.auth().createUserWithEmailAndPassword(email,password)
          .then(async res => {
            const token = await Object.entries(res.user)[5][1].b  
             // set token to localStorage

             localStorage.setItem('token', token)
             
             setToken(window.localStorage.token)
             console.log(res)
          })
          .catch(err => {
                setError(prev =>([...prev, err.message]))
             })
       },

      // Auth method for signIn
      signIn: (email, password, setError, setToken) => {
          
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(async res => {
              const token = await Object.entries(res.user)[5][1].b

              localStorage.setItem('token', token);
              setToken(window.localStorage.token);
              console.log(res)
          })
          .catch(err => {
              setError(prev => ([...prev,err.message]))
          })


      },
//      // Auth method for SignOut
      signOut: (setError, setToken, setInput) => {
         firebase.auth().signOut()
         .then(res => {
             localStorage.removeItem('token')
             setToken(null)
             setInput("")
             console.log(res)
         })
         .catch(err => {
             setError(prev => ([...prev,err.message]))
             localStorage.removeItem('token')
             setToken(null)
             setInput("")
         })
      }


};