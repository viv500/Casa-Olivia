import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/wbpages/Homepage';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' exact element={ <Homepage />}>
        
      </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
