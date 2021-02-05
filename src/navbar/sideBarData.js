import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderPlus, faSignInAlt, faInfoCircle, faUser,faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import {firebaseAuth} from '../provider/authProvider';

export const SidebarData = () => {
   
   const {token} = useContext(firebaseAuth)

   if(!token){
    return ([
      {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: 'nav-text'
      },
      {
        title: 'AboutUs',
        path: '/aboutus',
        icon: <FontAwesomeIcon icon={faInfoCircle} />,
        cName: 'nav-text'
      },
      {
        title: 'Admin',
        path: '/login',
        icon: <FontAwesomeIcon icon={faUser} />,
        cName: 'nav-text'
      },
      {
        title: 'Login',
        path: '/login',
        icon: <FontAwesomeIcon  icon={faSignInAlt}/>,
        cName: 'nav-text'
      }
    ])
  }
   else {
     return([
      {
        title: 'Home',
        path: '/',
        icon: <FontAwesomeIcon icon={faHome}/>,
        cName: 'nav-text'
      },
      {
        title: 'AboutUs',
        path: '/aboutus',
        icon: <FontAwesomeIcon icon={faInfoCircle} />,
        cName: 'nav-text'
      },
      {
        title: 'Create Post',
        path: '/editor',
        icon: <FontAwesomeIcon icon={faFolderPlus} />,
        cName: 'nav-text'
      },
      {
        title: 'LogOut',
        path: '/logout',
        icon: <FontAwesomeIcon icon={faSignOutAlt} />,
        cName: 'nav-text'
      }
     ])
   } 
};