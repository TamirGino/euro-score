import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home';
import Bets from '../../Pages/Bets';
import ProtectedRoutes from './ProtectedRoute';

const PagesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/bets" element={
        <ProtectedRoutes>
          <Bets/>
        </ProtectedRoutes>
      } />
      {/* <Route path="/projects" element={<Projects/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/contact" element={<Contact/>} /> */}
    </Routes>
  );
};

export default PagesRouter;