import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'

// Configuration du store Redux
const store = configureStore({
    reducer: {
        auth: authReducer, // 4 - Export du store
    },
// Activation des devTools Redux
 devtools: process.env.NODE_ENV !== 'production'
});

export default store;