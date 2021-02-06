//This component is for practice purpose  of dynamic routing
import React, {useContext, useState, useEffect} from 'react';
import axios from 'axios';
import DeletePost from './deletePost';
import UpdatePost from './Admin/EditPost';
import {Button} from 'react-bootstrap';
import ReactQuill from 'react-quill';
import Modal from 'react-bootstrap/Modal';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import AuthorAvatar from './authorAvatar'
import {Skeleton} from "@material-ui/lab"
import {firebaseAuth} from './provider/authProvider';
function BlogItems({match}){
     
     const [state, setState] = useState({});  
     const [deleteShow, setDeleteShow] = useState(false);  
     const [deleteHide, setDeleteHide] = useState(false); 
     const [updateShow, setUpdateShow] = useState(false);
     const [updateHide, setUpdateHide] = useState(false);
     const [loading, setLoading] = useState(true);
     const {token} = useContext(firebaseAuth);
 
     useEffect(() => {
          let addSpace = match.params.title
          addSpace = addSpace.split('-').join(' ');
          addSpace = addSpace.split('+').join('-');
          const fetchItems = () => {
              axios.get(`http://advanceblogserver.herokuapp.com/api/posts/get-posts/${addSpace}`)
               .then(res => {
                         setState(res.data.body.posts);
                         setLoading(false)
                        })
               .catch(err => console.log(err))
             };       
          fetchItems();
         }, [match.params.title])           
    
    
  
  
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
    
      <div className="fullPage">
          <div className="fullPost">
            {loading ?<div><Skeleton animation="wave"  width="80%" height={30}/><Skeleton animation="wave"  width="50%" height={30}/></div> :<div className="displayTitle">{state.title}</div>}
            
            {loading ? <Skeleton animation="wave" variant="rect" width="80%" height="100vh" style={{marginTop:"50px"}}/> : <ReactQuill
             value={state.content}
             readOnly
             theme="bubble"
             className="displayContent"
            />}
          </div>
         <div className="fullIntro">
         { loading ? <Skeleton animation="wave" variant="circle" width={120} height={120}/> : <AuthorAvatar author={state.author} />}
         { loading? <Skeleton animation="wave" height={20} width={130}/>   :<p>{state.author}</p>}
         {token ? <div className="displayButton">
          {loading ? <Skeleton animation="wave" height={40} width={30}/> : <FontAwesomeIcon icon={faTrashAlt}  style={{marginLeft:"5%",cursor:"pointer"}} size="2x"  onClick={() => setDeleteShow(true)}/>}
          <Modal show={deleteShow} onHide={() =>setDeleteShow(false)}>
                <Modal.Header closeButton>
                  <Modal.Title>Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you Sure ? This action will permanently delete your data.</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={()=>setDeleteShow(false)}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={() =>setDeleteHide(true)}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
             {loading ? <Skeleton animation="wave" height={40} width={30}/> : <FontAwesomeIcon icon={faEdit}  style={{marginLeft:"5%",cursor:"pointer"}} size="2x"  onClick={() => setUpdateShow(true)}/>}
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
              </Modal></div> : null}
        </div>
      </div> 
     )}       
}
 
export default BlogItems;