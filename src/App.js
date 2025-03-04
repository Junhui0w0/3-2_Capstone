import './App.css';

import {  Routes, Route  } from 'react-router-dom';
import React,{useRef} from 'react';

import Nav from "./component/Nav.js"

function App() {


  return (
    
    <Routes>
       <Route
        path="/"
        element={
          <div className="App">
            <Nav />
          </div>
        }
       />
    </Routes> 
  );
}


export default App;
