import { createSlice } from '@reduxjs/toolkit'
 import { setAuthToken, removeAuthToken } from '../../../utils/auth'
import { argentBankApi } from '../../api/argentBankApi'

/*
 * AuthSlice
 * Gestion de l'authentification
 * 
 */


// // Action asynchrone pour la connection
// export const loginUser = createAsyncThunk (
//     'auth/login',
//     async (credentials, { rejectWithValue }) => {
//         try {
//             console.log('📡 Envoi requête login...')
//         const response = await fetch('http://localhost:3001/api/v1/user/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: credentials.email,
//                 password: credentials.password
//             })
//         })
//         const data = await response.json();
//         console.log("📥 Réponse login:", {
//             status: response.status,
//             ok: response.ok,
//             hasToken: !!data.body?.token,
//         });
//      if (!response.ok) {
//         return rejectWithValue(data.message || 'Failed to login');
//      }

//      //stokage du token et retour des données
//      console.log('✅ Authentification réussie');
//      setAuthToken(data.body.token);
//      return data.body;
//     } catch (error) {
//         console.error('🔥 Error during login:', error)
//         return rejectWithValue(error.message || 'Erreur de connexion au serveur')
//     }
// }
// )



//  état initial


const initialState = {
    token: null, 
    isAuthenticated: false,
    status: 'idle',  // état de la connexion (idle' | 'loading' | 'succeeded' | 'failed')
    error: null
}

// Creation du slice avec actions de gestion de l'authentification (reducer)

const authSlice = createSlice ({
    name: 'auth',
    initialState,
    reducers: {
      
        logout: (state) => {
            removeAuthToken();
            // return initialState;
            state.isAuthenticated = false;
            state.status = 'idle';
            state.error = null;
            state.token = null;
        }
    },
    
    extraReducers: (builder) =>{
          builder

       
        //   .addCase(loginUser.pending, (state) => {
        //     state.status = 'loading',
        //     state.error = null;
        //   })
        //   .addCase(loginUser.fulfilled, (state, action) => {
        //     state.status = 'succeeded',
        //     state.token = action.payload,
        //     state.isAuthenticated = true,
        //     state.error = null
        //   })
        //   .addCase(loginUser.rejected, (state, action) => {
        //     state.status = 'failed',
        //     state.token = null,
        //     state.isAuthenticated = false,
        //     state.error = action.payload
        //   })

   // gere les états de mutation login avec argentBankApi
// .addMatcher écoute les actions RTK Query pour mettre à jour l'état (les états possible étant 'idle', 'loading', 'succeeded', 'failed')
          .addMatcher(
            argentBankApi.endpoints.login.matchPending,
            (state) => {
              state.status = 'loading'
              state.error = null;
            }
          )
          .addMatcher(
            argentBankApi.endpoints.login.matchFulfilled,
            (state, action) => {
                state.token = action.payload.token;
                setAuthToken(action.payload.token);
                state.isAuthenticated = true;
                state.status = 'succeeded';
                state.error = null;
            }
          )
          .addMatcher(
            argentBankApi.endpoints.login.matchRejected,
            (state, action) => {
                state.token = null;
                state.isAuthenticated = false;
                state.status = 'failed';
                state.error = action.error.message;
            }
          )

    }
})

// 3 - Export des actions et du reducer
export const { logout } = authSlice.actions

// Sélecteurs pour accéder à l'état (extrait des parties spécifique du state)
export const selectAuth  = (state) => state.auth
export const selectIsAuthenticated = (state) => !!state.auth.token
export const selectAuthStatus = (state) => state.auth.status
export const selectAuthError = (state) => state.auth.error

// Export du reducer
export default authSlice.reducer