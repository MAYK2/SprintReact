import { createAction } from "@reduxjs/toolkit";

export const login = createAction('LOGIN', (data) => {
  const clearInfo = {
    name: `${data.firstName} ${data.lastName}`,
    email: data.email,
    token: data.token,
    expiresIn: new Date(Date.now() + 1000 * 60 * 60).toISOString(), // Aquí faltaba la llamada a la función toISOString()
    loggedIn: true
  };
  return { payload: clearInfo };
})

export const logout = createAction('LOGOUT');
