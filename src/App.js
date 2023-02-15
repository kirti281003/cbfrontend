
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Login/Signup';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import PostRegister from './components/Posts/PostRegister';
import AllPosts from './components/Posts/AllPosts';
import UserPosts from './components/Posts/UserPosts';
import About from './components/Home/About';

function App() {
  return (
   <>

    <BrowserRouter>
      <Routes>
        <Route path="/createpost" element={<PostRegister/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/posts" element={<AllPosts/>}/>
        <Route path="/posts/user" element={<UserPosts/>}/>
        <Route path="/about" element={<About/>}/>

      </Routes>
    </BrowserRouter>
    
   </>
  );
}

export default App;
