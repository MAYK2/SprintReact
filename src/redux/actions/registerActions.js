import axios from 'axios';

// Acción para iniciar el proceso de registro de usuario
export const registerStart = () => {
    return {
        type: 'REGISTER_START',
    };
};

// Acción para manejar el éxito del registro
export const registerSuccess = (userData) => {
    return {
        type: 'REGISTER_SUCCESS',
        payload: userData,
    };
};

// Acción para manejar el error durante el registro
export const registerFailure = (error) => {
    return {
        type: 'REGISTER_FAILURE',
        payload: error,
    };
};

// Acción asincrónica para realizar el registro de usuario
export const registerUser = (userData) => {
    return async (dispatch) => {
        dispatch(registerStart()); // Indica que el registro ha comenzado

        try {
            const response = await axios.post('http://localhost:8080/api/auth/register', userData);
            
            dispatch(registerSuccess(response.data)); // Dispara acción de éxito con los datos de usuario registrados
        } catch (error) {
            dispatch(registerFailure(error.message)); // Dispara acción de fallo con el mensaje de error
        }
    };
};
