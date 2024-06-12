import { createAction } from '@reduxjs/toolkit';

export const login = createAction('LOGIN', (user) => {
    const clearUser = {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        image: user.image
    };
    return { payload: clearUser };
});
 