import { createSlice } from "@reduxjs/toolkit";
import { argentBankApi } from "../../api/argentBankApi";

/*
 * AuthSlice
 * Gestion de l'authentification
 *
 */

//  état initial
const initialState = {
  token: null,
  isAuthenticated: false,
  status: "idle", 
  error: null,
};

// Creation du slice avec actions de gestion de l'authentification (reducer)
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
      // Action de déconnexion simplifiée
    logout: (state) => {
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
      state.token = null;
    },
  },

  extraReducers: (builder) => {
    builder
    // utilisation des matchers query pour suivre l'état des requêtes
      // gere les états de mutation login avec argentBankApi
      // .addMatcher écoute les actions RTK Query pour mettre à jour l'état (les états possible étant 'idle', 'loading', 'succeeded', 'failed')
      .addMatcher(argentBankApi.endpoints.login.matchPending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // gestion de l'état après le login réussi (succeeded)
      .addMatcher(
        argentBankApi.endpoints.login.matchFulfilled,
        (state, action) => {
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.status = "succeeded";
          state.error = null;
        }
      )
      // gestion de l'état après le login échoué (failed)
      .addMatcher(
        argentBankApi.endpoints.login.matchRejected,
        (state, action) => {
          state.token = null;
          state.isAuthenticated = false;
          state.status = "failed";
          state.error = action.error.message;
        }
      );
  },
});

// 3 - Export des actions et du reducer
export const { logout } = authSlice.actions;

// Sélecteurs pour accéder à l'état (extrait des parties spécifique du state)
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => !!state.auth.token;
export const selectAuthStatus = (state) => state.auth.status;
export const selectAuthError = (state) => state.auth.error;

// Export du reducer
export default authSlice.reducer;
