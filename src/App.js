import React from 'react';
import { BrowserRouter,Routes, Route} from 'react-router-dom';

import Navbar from './Components/NavbarComponent/Navbar';
import Footer from './Components/FooterComponent/Footer';
import Home from './Components/HomeComponent/Home';
import Login from './Components/LoginComponent/Login';
import  Dashboard  from './Components/UseDashboard/Dashboard';
import Privecy from './Components/PrivecyComponent/Privecy';

const App = () => {
  return (
    <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' exact element={<Home/>} />
            <Route path='login' element={<Login/>} />
            <Route path='privecy' element={<Privecy/>} />
            <Route path='policy' element={<Privecy/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='*' element={<Home/>} />

        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
