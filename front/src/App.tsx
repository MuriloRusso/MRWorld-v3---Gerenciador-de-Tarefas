// App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Tasks from './pages/Tasks';
import Clients from './pages/Clients';
import { GlobalProvider } from './contexts/GlobalContext';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter basename="/mrworld-v3">
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
