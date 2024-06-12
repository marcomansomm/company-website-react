import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Homepage from './components/HomePage';
import Login from './components/Login';
import JoinUs from './components/JoinUs';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/"  element={<><Homepage/> </>} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/joinUs" element={<JoinUs/>}/>
          <Route path="/forgotPassword" element={<Login/>}/>
        </Routes>
      </div>
  );
}

export default App;