import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import ReportsList from "./components/ReportsList";
import AddReport from "./components/AddReport";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<ReportsList />} />
          <Route path="/add" element={<AddReport />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
