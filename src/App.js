import React from 'react';
import './App.css';

// Assignment - 1
import Navbar1 from './components/coding-1/Navbar.jsx'
import Routes1 from './components/coding-1/Routes'

// Assigment - 2
import Navbar from './components/coding-2/Components/Navbar'
import Routes from  './components/coding-2/Components/Routes'
import Footer from './components/coding-2/Components/Footer.jsx'

function App() {
  return (
    <div className="App">
        {/* <Navbar1 />
        <Routes1 /> */}

        <Navbar />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
