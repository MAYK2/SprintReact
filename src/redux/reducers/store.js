// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer";
import registerReducer from "./registerReducer"; 
import accountReducer from "./accountReducer"; // Importa el reducer de cuentas

const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
    account: accountReducer // Agrega otros reducers si los tienes
  },
});

export default store;
