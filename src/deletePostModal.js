import React from 'react';

import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalBody from 'react-bootstrap/ModalBody'

function DeleteModal(props){ 
         return ( 
            <ModalDialog>
              <ModalHeader closeButton></ModalHeader>
              <ModalBody>
                 <p>{props.message}</p>
              </ModalBody>           
            </ModalDialog>
          );
       
}
 
export default DeleteModal;