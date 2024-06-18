import React from 'react';
import { BrowserRouter as Router, Route, Routes , Navigate} from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Account from './pages/Account';
import Cards from './pages/Cards';
import ApplyCard from './pages/ApplyCard';
import Transactions from './pages/Transactions';
import Loans from './pages/Loans';
import { Login } from './pages/Login';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import store from './redux/reducers/store';
import DetailsAccount from './pages/DetailsAccount';

const App = () => {
  const loggedIn = useSelector(store => store.auth.loggedIn);

  return (
    <Router>
      <MainLayout>
        <Routes>
          {loggedIn ? (
            <>
              <Route path="/accounts" element={<Account />} />
              <Route path="/cards" element={<Cards />} />
              <Route path="/apply-card" element={<ApplyCard />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/details-account/:id" element={<DetailsAccount />} />
            </>
          ) : (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
       <Route path="*" element={<Login />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
