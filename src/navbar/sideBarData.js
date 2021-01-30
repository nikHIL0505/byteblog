import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFolderPlus, faSignInAlt, faInfoCircle} from '@fortawesome/free-solid-svg-icons'

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
    title: 'Add Blog',
    path: '/editor',
    icon: <FontAwesomeIcon icon={faFolderPlus} />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FontAwesomeIcon  icon={faSignInAlt}/>,
    cName: 'nav-text'
  }
];