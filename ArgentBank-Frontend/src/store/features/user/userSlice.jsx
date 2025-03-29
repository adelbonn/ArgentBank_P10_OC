import { createSlice } from "@reduxjs/toolkit";
import { argentBankApi } from "../../api/argentBankApi";

/**
 *
 * UserSlice
 * Gestion des données du profil utilisateur
 *
 */


// Récupération du profil utilisateur
// export const fetchUserProfile = createAsyncThunk(
//   "user/fetchProfile",
//   async (_, { rejectWithValue, getState }) => {
//     try {
//       const token = getState().auth.token;
//       // console.log('getState().auth', token);
//       // verification du token
//       if (!token) {
//         return rejectWithValue("No token available");
//       }
//       // console.log('Token utilisé: ', token);

//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "GET",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
  
//       if (!response.ok) {
//         try {
//           const errorData = await response.json();
//           return rejectWithValue(
//             errorData.message ||
//               `Erreur ${response.status} : ${response.statusText}`
//           );
//         } catch (error) {
//           // Si on ne peux pas lire le JSON, on renvoie le statut HTTP
//           console.error("Error fetching profile:", error);
//           return rejectWithValue(
//             `Erreur ${response.status} : ${response.statusText}`
//           );
//         }
//       }

//       const data = await response.json(); // récupération des données reçues
//       console.log("✅ Données reçues :", data.body);
//       return data.body;
//     } catch (error) {
//       console.error("❌ Error fetching profile:", error);
//       return rejectWithValue(error.message || "Erreur de connexion au server");
//     }
//   }
// );

// Mise à jour du profile utilisateur

// export const updateUserProfile = createAsyncThunk(
//   "user/updateProfile",
//   async ({ userName }, { rejectWithValue, getState }) => {
//     try {
//       const token = getState().auth.token;
//       if (!token) {
//         return rejectWithValue("No token available");
//       }
//       console.log("📡 Envoi mise à jour profil...");

//       const response = await fetch(
//         "http://localhost:3001/api/v1/user/profile",
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ userName }),
//         }
//       );

//       if (!response.ok) {
//         const errorData = await response.json();
//         return rejectWithValue(
//           errorData.message || `Erreur ${response.status}`
//         );
//       }

//       const data = await response.json();
//       console.log("✅ Profil mis à jour:", data.body);
//       return data.body;
//     } catch (error) {
//       console.error("🔥 Erreur mise à jour:", error);
//       return rejectWithValue("Erreur de connexion au serveur");
//     }
//   }
// );

// Etat initial du slice
const initialState = {
  profile: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
  },
  status: "idle", 
  error: null,
};

// Creation du Slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action pour réinitialiser  le profil (pour la deconnexion)
    resetUser: () => initialState
  },

  // Gestion des actions asynchrone

  extraReducers: (builder) => {
    builder
      .addMatcher(argentBankApi.endpoints.getProfile.matchPending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      // en cas de succès
      .addMatcher(argentBankApi.endpoints.getProfile.matchFulfilled, (state, action) => {
        state.status = "succeeded";
        state.profile = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          userName: action.payload.userName,
          email: action.payload.email
        }
        state.error = null;
      })

      // En cas d'erreur
      .addMatcher(
        argentBankApi.endpoints.getProfile.matchRejected,
        (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Gestion des états de updateProfile
      .addMatcher(
        argentBankApi.endpoints.updateProfile.matchFulfilled, 
        (state, action) => {
       if (state.profile) {
        state.userName = action.payload.userName;
        
       }
      })
      .addMatcher(argentBankApi.endpoints.updateProfile.matchRejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// export des actions et selecteurs
export const { resetUser } = userSlice.actions;


// selecteurs pour accéder aux données du profil
export const selectUserProfile = (state) => state.user.profile;

export const selectUserStatus = (state) => state.user.status;

export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
