import { createSlice } from '@reduxjs/toolkit'
import { setAuthToken, removeAuthToken } from '../../../utils/auth'

//  état initial
const initialState = {
    token: null, 
    isAuthenticated: false,
    status: 'idle',  // état de la connexion (idle' | 'loading' | 'succeeded' | 'failed')
    error: null // stockage du message derreur
}

// Creation du slice avec actions de gestion de l'authentification (reducer)

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
        // Action debut de la connexion
        loginStart: (state) => {
            state.status = 'loading'
            state.error = null
        },
        // Action de connexion réussie
        loginSuccess: (state, action) => {
            state.token = action.payload  // stokage du token
            state.isAuthenticated = true  // mise a jour de l etat d authentification
            state.status = 'succeeded'
            state.error = null
        },
        // Action de connexion échouée
        loginFailed: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
            state.isAuthenticated = false
            state.token = null
        },
        // Action de déconnexion
        logout: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.status = 'idle'
            state.error = null
            removeAuthToken()
        }
    }
})

// 3 - Export des actions et du reducer
export const { loginStart, loginSuccess, loginFailed, logout} = authSlice.actions

// Sélecteurs pour accéder à l'état
export const selectToken = (state) => state.auth.token
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated
export const selectStatus = (state) => state.auth.status
export const selectError = (state) => state.auth.error

// Export du reducer
export default authSlice.reducer