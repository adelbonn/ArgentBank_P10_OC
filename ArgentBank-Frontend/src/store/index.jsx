import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'

// 3 - Export du store
// Configuration du store Redux
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer  
    },
// Activation des devTools Redux
 devtools: process.env.NODE_ENV !== 'production'
});

export default store;