// import des fonctions nécessaires de RTK query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuthToken } from "../../utils/auth";

// Creation de l'API slice
export const argentBankApi = createApi({
  // Nom de ce slice dans le store redux
  reducerPath: "argentBankApi",

  // configuration de base pour toutes les requêtes API
  baseQuery: fetchBaseQuery({
    // Url de base pour toutes les requêtes API
    baseUrl: "http://localhost:3001/api/v1",

    // préparation des headers pour chaque requêtes (s'execute avt chaque requêtes pour préparer les headers)
    prepareHeaders: (headers) => {
      // Récupération du token du state redux
      const token = getAuthToken();

      // Si le token est disponible, on l'ajoute dans l'entête
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  // Tags pour la gestion du cache
  tagTypes: ["Profile"],

  //definition des endpoints de l'API

  endpoints: (builder) => ({
    // Endpoint de login (mutation car modifie les données (.mutation pour les requêtes qui modifie les données ((POST, PUT, DELETE)))
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
      // Transformation de la réponse avant de la mettre en cache
      transformResponse: (response) => response.body,
    }),

    // endpoint pour récupérer le profil (query car lecture seule, .query pour les requêtes qui lisent les données (GET))
    getProfile: builder.query({
      query: () => "/user/profile",
      method: "GET",
      // Transformation de la réponse
      transformResponse: (response) => response.body,

      // ce endpoint fourni les données du tag 'Profile' (tag pour le cache)
      providesTags: ["Profile"], // indique que cette query fournit les données pour le tag 'profile'
    }),
    // Endpoint pour mettre à jour le profil
    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/user/profile",
        method: "PUT",
        body: profileData,
      }),
      // Transformation de la réponse
      transformResponse: (response) => response.body,

      // Invalide le cache du profil après mise à jour, provoque un re-fetch automatique des queries qui fournissent les données du tag 'Profile'
      invalidatesTags: ["Profile"],
    }),
  }),
});

// Export des hooks générés automatiquement
export const {
  useLoginMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = argentBankApi;
