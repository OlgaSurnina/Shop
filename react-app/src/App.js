import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PageNotFound from './components/PageNotFound/PageNotFound';
import PageIndex from './components/PageIndex/PageIndex';
import PageProduct from './components/PageProduct/PageProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/:prodId" element={<PageProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
