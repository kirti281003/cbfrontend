
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PostRegister from './components/Posts/PostRegister';
import AllPosts from './components/Posts/AllPosts';
import UserPosts from './components/Posts/UserPosts';
import About from './components/Home/About';
import Home from './components/Home/Home';
import Explore from './components/Home/ExplorePage';
import Header from './components/Header/Header';
import User from './components/User/User';
import { useSelector } from 'react-redux';
import Header2 from './components/Header/Header2';

function App() {
  const{isAuthenticated}=useSelector(state=>state.user)
  if(!isAuthenticated)
  {
  return (
   
   <>

    <BrowserRouter>
      <Header/>  
      <Routes>
        <Route path="/createpost" element={<PostRegister/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/posts" element={<AllPosts/>}/>
        <Route path="/posts/user" element={<UserPosts/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="/user/:username" element={<User/>}/>
        
      

      </Routes>
    </BrowserRouter>
    
   </>
    )}
    else
    {
      return(
        <>

        <BrowserRouter>
          <Header2/>  
          <Routes>
            <Route path="/createpost" element={<PostRegister/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/posts" element={<AllPosts/>}/>
            <Route path="/posts/user" element={<UserPosts/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/explore" element={<Explore/>}/>
            <Route path="/user/:username" element={<User/>}/>
            
          
    
          </Routes>
        </BrowserRouter>
        
       </>

      )
    }
}

export default App;
