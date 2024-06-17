import { createReducer } from '@reduxjs/toolkit';
import { login as loginAction, logout } from '../actions/authActions';

const initialState = {
  loggedIn: false,
  token: "",
  expiresIn: "",
  error: "",
  user: {
    name: "",
    email: ""
  }
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loginAction, (state, action) => {
      const { name, email, token, loggedIn, expiresIn } = action.payload;
      return {
        ...state,
        user: { name, email },
        token,
        loggedIn,
        expiresIn
      };
    })
    .addCase(logout, (state, action) => {
      return initialState; // Reset to initial state when logging out
    });
});

export default authReducer;
