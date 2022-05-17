import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import { Navigation, DiscoverPage } from './components';
import './App.scss';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<DiscoverPage/>}/>
        <Route path="/favourites" element={<></>}/>
        <Route path="/profile" element={<></>}/>
      </Routes>
    </Router>
  );
}

export default App;
