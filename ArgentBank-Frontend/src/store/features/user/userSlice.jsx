import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { getAuthToken } from "../../../utils/auth";

/**
 *
 * UserSlice
 * Gestion des données du profil utilisateur
 *
 */

// createAsyncThunk permet de créer une action asynchrone donc ici je récupère les données du profil depuis l'API
// Récupération du profil utilisateur
export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const token = getAuthToken();
      // verification du token
      if (!token) {
        return rejectWithValue("No token available");
      }
      // console.log('Token utilisé: ', token);

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Si la reponse n'est pas ok on tente d abord de lire le corps de la reponse
      if (!response.ok) {
        try {
          const errorData = await response.json();
          return rejectWithValue(
            errorData.message ||
              `Erreur ${response.status} : ${response.statusText}`
          );
        } catch (error) {
          // Si on ne peux pas lire le JSON, on renvoie le statut HTTP
          console.error("Error fetching profile:", error);
          return rejectWithValue(
            `Erreur ${response.status} : ${response.statusText}`
          );
        }
      }

      const data = await response.json(); // récupération des données reçues
      console.log("✅ Données reçues :", data.body);
      return data.body;
    } catch (error) {
      console.error("❌ Error fetching profile:", error);
      return rejectWithValue(error.message || "Erreur de connexion au server");
    }
  }
);

// Mise à jour du profile utilisateur

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async ({ userName }, { rejectWithValue }) => {
    try {
      const token = getAuthToken();
      if (!token) {
        return rejectWithValue("No token available");
      }
      console.log("📡 Envoi mise à jour profil...");

      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userName }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue(
          errorData.message || `Erreur ${response.status}`
        );
      }

      const data = await response.json();
      console.log("✅ Profil mis à jour:", data.body);
      return data.body;
    } catch (error) {
      console.error("🔥 Erreur mise à jour:", error);
      return rejectWithValue("Erreur de connexion au serveur");
    }
  }
);

// Etat initial du slice
const initialState = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  status: "idle", // idle, loading, succeeded, failed
  error: null,
};

// Creation du Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action pour réinitialiser  le profil (pour la deconnexion)
    resetUser: () => initialState,
  },

  // Gestion des actions asynchrone

  extraReducers: (builder) => {
    builder
      // pendant le chargment, gestion de fetchUserProfile
      .addCase(fetchUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      // en cas de succès
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.firstName = action.payload.firstName;
        state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;
        state.email = action.payload.email;
        state.error = null;
      })

      // En cas d'erreur
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Gestion updateUserProfile
      .addCase(updateUserProfile.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.firstName = action.payload.firstName;
        // state.lastName = action.payload.lastName;
        state.userName = action.payload.userName;

        state.error = null;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Sélecteurs de base
const selectUserState = (state) => state.user;
// export des actions et selecteurs
export const { resetUser } = userSlice.actions;

// Selectors
// export const selectUser = (state) => state.user;
// selecteurs pour accéder aux données du profil
export const selectUserProfile = createSelector(
  [selectUserState],
  (userState) => ({
    firstName: userState.firstName,
    lastName: userState.lastName,
    userName: userState.userName,
    email: userState.email,
    createdAt: userState.createdAt,
  })
);

export const selectUserStatus = createSelector(
  [selectUserState],
  (userState) => userState.status
);

export const selectUserError = createSelector(
  [selectUserState],
  (userState) => userState.error
);

export default userSlice.reducer;
