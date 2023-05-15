import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './Components/NavbarComponent/Navbar';
import Footer from './Components/FooterComponent/Footer';
import Home from './Components/HomeComponent/Home';
import Login from './Components/LoginComponent/Login';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='navbar' element={<Navbar/>} />
            <Route path='footer' element={<Footer/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
