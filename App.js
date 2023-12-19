import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./COMPONENTS/HOME/home.js"
import Employment from './COMPONENTS/EMPLOYMENT/Employment';
import Education from './COMPONENTS/EDUCATION/Education';
import Resources from './COMPONENTS/RESOURCES/Resources';
import Housing from './COMPONENTS/HOUSING/Housing';
import Contact from './COMPONENTS/CONTACT/Contact';
import Join from './COMPONENTS/JOIN/Join';
import Nav from './COMPONENTS/NAV/Nav';
import Login from './COMPONENTS/LOGIN/Login';




function App() {
  return (

 
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<Nav />}>
       <Route index element={<Home />} />
       <Route path="education" element={<Education />} />
          <Route path="employment" element={<Employment />} />
          <Route path="resources" element={<Resources />} />
          <Route path="housing" element={<Housing />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/join/createUser" element={<Join />} />
          <Route path="login" element={<Login />} />
         </Route>
       </Routes>
    </BrowserRouter> 
  );
}

export default App;

// access config file is the terminal
// sudo cat /etc/mongod.conf

