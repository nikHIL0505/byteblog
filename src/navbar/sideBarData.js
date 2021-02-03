import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderPlus, faSignInAlt, faInfoCircle, faUser} from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
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
];