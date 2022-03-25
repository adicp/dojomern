import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import HelloStyled from './components/HelloStyled';
import ChooseComponent from './components/ChooseComponent';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:newPage" element={<ChooseComponent />} />
          <Route path="/:text/:textcolor/:displaycolor" element={<HelloStyled />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
