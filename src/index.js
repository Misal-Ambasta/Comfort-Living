import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Route} from 'react-router-dom';
import AuthContextProvider from "./components/coding-2/Context/AuthContext.jsx"

ReactDOM.render(
  <BrowserRouter>
  <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

