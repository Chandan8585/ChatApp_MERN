
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
import ChatPage from './Pages/chatPage/ChatPage';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route path='/chats' element={<ChatPage/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/login' element={<Login/>} />
      </Routes>
      
      </BrowserRouter>
  
    </div>
  );
}

export default App;
