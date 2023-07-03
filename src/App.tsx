import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

import ProjectsPage from './projects/ProjectsPage';
import HomePage from './home/HomePage';

const App: React.FC = () => {
   return (
      <Router>
         <div className='container'>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/projects' element={<ProjectsPage />} />
            </Routes>
         </div>
      </Router>
      
   );
}

export default App;
