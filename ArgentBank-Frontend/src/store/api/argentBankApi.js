import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const argentBankApi = createApi({
  reducerPath: "argentBankApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/v1",
    prepareHeaders: (headers, { getState }) => {
      // Récupération du token du state redux
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
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
      transformResponse: (response) => {
        console.log("👀 Response from login endpoint:", response);
        return response.body;
      },
    }),

    // endpoint pour récupérer le profil (query car lecture seule, .query pour les requêtes qui lisent les données (GET))
    getProfile: builder.query({
      query: () => "/user/profile",
      method: "GET",

      transformResponse: (response) => response.body,

      // ce endpoint fourni les données du tag 'Profile' (tag pour le cache)
      providesTags: ["Profile"],
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
