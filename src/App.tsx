import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import logo from './logo.svg';
import Navigation from "./components/navigation/navigation";
import './App.css';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes/>
    </Router>
  );
}

export default App;
