import React, {Suspense, lazy} from 'react';
import SignUp from './components/signUp';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import BlogItems from "./fullBlog"
import PostBlogQuill from './Admin/postBlogQuill';
import ProtectedRoute from './Admin/protectedRoute';
const Home = lazy(() => import('./homepage'));
const Navbar = lazy(() => import('./navbar/navbar'));
const Footer = lazy(() => import('./footer/footer'));
const LogIn  = lazy(() => import('./components/login'));
const AboutUs  = lazy(() => import('./About'));
const SignOut = lazy(() => import('./components/signOut'));

function App() {
  return (
       <Router>
         <Suspense fallback={<div style={{textAlign:'center',fontSize:"50px", color:"skyblue"}}>Loading...</div>}>
          <Navbar/>
           <Switch>
             
             <Route exact path='/' component={Home}/>
        
             <Route  path="/login" component={LogIn}/>
             <Route path="/aboutus" component={AboutUs}/>
             <Route path="/signup" component={SignUp}/>
             <Route path ="/blogs/:title" component={BlogItems}/>               
             <ProtectedRoute path="/editor" component={PostBlogQuill}/>
             <ProtectedRoute  path="/logout" component={SignOut}/>
           </Switch>
          <Footer/>
          </Suspense>
       </Router>
              );
}
export default App;
