import React, { useState } from 'react';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/Login';
import  Register from './components/Register';
import About from './components/About';
import DonateFunds from './components/DonateFunds';
import ProjectListing from'./components/ProjectListing';
import ProjectCreation from './components/ProjectCreation';
import Search from './components/Search';
import Contact from './components/Contact';
import ForgotPassword from './components/ForgotPassword';
import LearningPage from './components/LearningPage';
import { ProjectProvider } from './components/ProjectContext';
import Home from './components/Home';

export default function App() {
  const [projects, setProjects] = React.useState([]);

  const handleProjectCreation = (newProject) => {
    setProjects([...projects, newProject]);
  };
  return (
  <BrowserRouter>  <ProjectProvider>
  <Routes>
 
   <Route path ='/' element={<Home/>}/>
    <Route path ='/about' element={<About/>}/>
    <Route path ='/donatefunds' element={<DonateFunds/>}/>
    <Route path="/projectcreation" element={<ProjectCreation />} />
    <Route path="/projectlisting" element={<ProjectListing />} />
    <Route path ='/search' element={<Search/>}/>
    <Route path ='/contact' element={<Contact/>}/>
    <Route path ='/login' element={<Login/>}/>
    <Route path ='/register' element={<Register/>}/>
    <Route path ='/forgotpassword' element={<ForgotPassword/>}/>
    <Route path ='/learningpage' element={<LearningPage/>}/>
    </Routes> </ProjectProvider></BrowserRouter>
  )
}
