import './App.css';
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import GreetingsStyled from './components/HelloStyled';
import ChooseComponent from './components/ChooseComponent';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:newPage" element={<ChooseComponent />} />
          <Route path="/:text/:textcolor/:displaycolor" element={<GreetingsStyled />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
