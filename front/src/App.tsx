// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Clients from './pages/Clients';

function App() {
  return (
    <BrowserRouter basename="/mrworld-v3">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/clients" element={<Clients />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
