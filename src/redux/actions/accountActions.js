import { createAction } from "@reduxjs/toolkit";

export const fetchAccountsRequest = createAction('FETCH_ACCOUNTS_REQUEST');
export const fetchAccountsSuccess = createAction('FETCH_ACCOUNTS_SUCCESS', (accounts) => ({
  payload: { accounts }
}));
export const fetchAccountsFailure = createAction('FETCH_ACCOUNTS_FAILURE', (error) => ({
  payload: { error }
}));

export const clearAccounts = createAction('CLEAR_ACCOUNTS');
