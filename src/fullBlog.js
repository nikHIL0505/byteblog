//This component is for practice purpose  of dynamic routing

import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import DeletePostModal from './deletePostModal';
import DeletePost from './deletePost';
import UpdatePost from './Admin/EditPost';
import {Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Modal from 'react-bootstrap/Modal';
import './App.css';
//import ModalHeader from 'react-bootstrap/ModalHeader'
//import ModalBody from 'react-bootstrap/ModalBody'
//import ModalFooter from 'react-bootstrap/ModalFooter'
// import {convertToHTML} from 'draft-convert'
// import {EditorState,convertFromRaw, convertFromHTML} from 'draft-js';
// import {Editor} from "react-draft-wysiwyg";
function BlogItems({match}){
     
     const [state, setState] = useState({});  
     const [deleteShow, setDeleteShow] = useState(false);  
     const [deleteHide, setDeleteHide] = useState(false); 
     const [updateShow, setUpdateShow] = useState(false);
     const [updateHide, setUpdateHide] = useState(false);

     useEffect(() => {
           let addSpace = match.params.title
          addSpace = addSpace.split('-').join(' ');
          addSpace = addSpace.split('?').join('&')
         
          const fetchItems = async() => {
          await axios.get(`http://advanceblogserver.herokuapp.com/api/posts/get-posts/${addSpace}`)
               .then(res => setState(res.data.body.posts))
               .catch(err => console.log(err))
             };       
          fetchItems()
          console.log(match)
         },[])           
    
    if(deleteHide){
      return(
        <DeletePost id={state._id}/>
      )
    }  
    else if(updateHide){
      return(
        <UpdatePost id={state._id} title={state.title} content={state.content} author={state.author}/>
      )
    }
    else{
     return(
      <div className="fullPost">
         <h1>{state.title}</h1>
         <p><i>{state.author}</i></p>
         <ReactQuill
         value={state.content}
         readOnly
         theme="bubble"
         />
        <Button variant="outline-danger" onClick={() => setDeleteShow(true)}>Delete</Button>
         <Modal show={deleteShow} onHide={() =>setDeleteShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you Sure ? This action will permanently delete your data.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setDeleteShow(false)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() =>setDeleteHide(true)}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
              <Button variant="outline-info" onClick={() => setUpdateShow(true)}>Update</Button>
            <Modal show={updateShow} onHide={() =>setUpdateShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you Sure updation needed?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setUpdateShow(false)}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() =>setUpdateHide(true)}>
                    Update
                  </Button>
                </Modal.Footer>
              </Modal>
      </div>
     )}
           
}
 
export default BlogItems;