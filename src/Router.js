import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RenderData from './components/RenderData';
import AddData from './components/AddData';
import Home from './components/Home';
import SharedLayout from './SharedLayout';
const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='add' element={<AddData />} />
          <Route path='show' element={<RenderData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default router;
