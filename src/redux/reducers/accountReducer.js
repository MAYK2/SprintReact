import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/accountActions';

const initialState = {
  accounts: [],
  loading: false,
  error: null
};

const accountReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.fetchAccountsRequest, (state) => {
      return {
        ...state,
        loading: true,
        error: null
      };
    })
    .addCase(actions.fetchAccountsSuccess, (state, action) => {
      return {
        ...state,
        accounts: action.payload.accounts,
        loading: false,
        error: null
      };
    })
    .addCase(actions.fetchAccountsFailure, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };
    })
    .addCase(actions.clearAccounts, (state) => {
      return {
        ...state,
        accounts: [],
        loading: false,
        error: null
      };
    });
});

export default accountReducer;
