import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Account from './pages/Account';
import Cards from './pages/Cards'; // Importa el componente Cards desde la misma carpeta
import ApplyCard from './pages/ApplyCard'; // Importa el componente ApplyCard desde la misma carpeta
import Transactions from './pages/Transactions'; 
import Loans from './pages/Loans';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/accounts" element={<Account />} />
          <Route path="/cards" element={<Cards />} /> 
          <Route path="/apply-card" element={<ApplyCard />} /> {/* Ruta para ApplyCard */}
          <Route path="/loans" element={<Loans />} />
          <Route path="/transactions" element={<Transactions />} /> 
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
