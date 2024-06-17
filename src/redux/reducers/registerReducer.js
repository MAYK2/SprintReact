const initialState = {
    loading: false,
    error: null,
    registeredUser: null,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_START':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                registeredUser: action.payload,
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default registerReducer;
