import SignUp from './components/signUp';
import LogIn from './components/login';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Navbar from './navbar/navbar'
import AboutUs from './About';
import Homepage from './homepage';
import Postblog from './Admin/postblog';
import BlogItems from "./fullBlog"
//import Practice from './Admin/postEditor'
//import PostEditor from './Admin/postEditor';
import Practice from './Admin/practice';
import PostBlogQuill from './Admin/postBlogQuill'
function App() {
  return (
       <Router>
          <Navbar/>
           <Switch>
             <Route exact path='/' component={Homepage}/>
             <Route path='/home' component={Homepage}/>
             <Route  path="/login" component={LogIn}/>
             <Route path="/aboutus" component={AboutUs}/>
             <Route path="/signup" component={SignUp}/>
             <Route path="/createblog" component={Postblog}/>
             <Route path ="/blogs/:title" component={BlogItems}/>
              <Route path= "/practice" component={Practice}/> 
             <Route path="/editorPractice" component={PostBlogQuill}/>
           </Switch>
       </Router>
              );
}
export default App;
