import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" />
    </Routes>
  </BrowserRouter>
);

export default App;
