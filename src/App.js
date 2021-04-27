import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Routes from  './components/Routes'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
