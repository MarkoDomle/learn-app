import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Todoo1 from './pages/VarLetConst';
import Todoo2 from './pages/Todoo2';
import Todoo3 from './pages/Todoo3';
import Hooks from './pages/Hooks';
import DataTypes from './pages/DataTypes';
import Register from './pages/Register';
import FunctionsAndScope from './pages/FunctionsAndScopes';
import Login from './pages/Login';
function App() {
  return (
    <BrowserRouter>
      {/* <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/todoo1" style={{ marginRight: '1rem' }}>Todoo 1</Link>
        <Link to="/todoo2" style={{ marginRight: '1rem' }}>Todoo 2</Link>
        <Link to="/todoo3">Todoo 3</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoo1" element={<Todoo1 />} />
        <Route path="/todoo2" element={<DataTypes />} />
        <Route path="/functionsandscope" element={<FunctionsAndScope />} />
        <Route path="/todoo3" element={<Todoo3 />} />
        <Route path="/guide1" element={<Hooks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  