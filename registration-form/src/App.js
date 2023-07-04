import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import UserReadData from './pages/Users';
import Update from './pages/Update';
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
            <Route index element={<Home/>}/>
            <Route path='users' element={<UserReadData/>} /> 
            <Route path='update' element={<Update/>} />  
            <Route path='login' element={<Login/>}/>          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
