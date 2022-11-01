import React from 'react';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Converter from './components/converter';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Converter />} />
    </Routes>
  </BrowserRouter>
);

export default App;
