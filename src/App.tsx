import React from 'react';
import IndexRouter from './router/indexRouter';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <IndexRouter></IndexRouter>
      </BrowserRouter>
    </div>
  );
}

export default App;
