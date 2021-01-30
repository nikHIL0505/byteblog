import SignUp from './components/signUp';
import LogIn from './components/login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import AboutUs from './About';
import Homepage from './homepage';
import BlogItems from "./fullBlog"
import Scroll from './scrollOn';
import PostBlogQuill from './Admin/postBlogQuill'
function App() {
  return (
       <Router>
          <Navbar/>
          <Scroll/>
           <Switch>
             <Route exact path='/' component={Homepage}/>
             <Route  path="/login" component={LogIn}/>
             <Route path="/aboutus" component={AboutUs}/>
             <Route path="/signup" component={SignUp}/>
             <Route path ="/blogs/:title" component={BlogItems}/>               
             <Route path="/editor" component={PostBlogQuill}/>
           </Switch>
          <Footer/>
       </Router>
              );
}
export default App;
