import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice'
import userReducer from './features/user/userSlice'
import { argentBankApi } from './api/argentBankApi' // import de l'API slice

// 3 - Export du store
// Configuration du store Redux
const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        // Ajout de l'API slice
        [argentBankApi.reducerPath]: argentBankApi.reducer,

    },
    // Ajout des middleware
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(argentBankApi.middleware),

// Activation des devTools Redux
 devtools: process.env.NODE_ENV !== 'production'
});

export default store;