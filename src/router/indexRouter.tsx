import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../views/login/login';
import NewSandBox from '../views/sandbox/NewSandBox';

const indexRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={localStorage.getItem('tokem') ? <NewSandBox /> : <Navigate replace to="/login" />} />
      </Routes>
    </HashRouter>
  );
};

export default indexRouter;
