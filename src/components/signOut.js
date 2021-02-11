import React, {useContext, useState,useEffect} from 'react';
import {firebaseAuth} from '../provider/authProvider';
import {Button} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
const SignOut = (props) =>{

    const {handleSignOut} = useContext(firebaseAuth)
    const [signOutModal, setSignOutModal] = useState(true)
    const [signOut, setSignOut] = useState(false)
    
    useEffect(()=>{
    if(signOut){
      handleSignOut();
      setTimeout(()=>{
         props.history.push('/')
      },10);
      setSignOut(false)
    }
    else if(!signOut && !signOutModal){
        props.history.push('/')
    }
  }, [signOut, handleSignOut, props.history, signOutModal])
    return (
         <div style={{minHeight:"100vh"}}>
        <Modal show={signOutModal} onHide={() =>setSignOutModal(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you want to LogOut</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setSignOutModal(false)}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={() =>setSignOut(true)}>
                    LogOut
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
    )
}

export default withRouter(SignOut);