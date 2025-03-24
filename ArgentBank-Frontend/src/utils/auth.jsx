// import Cookies from 'js-cookie'

// /**
//  * Utilitaires pour la gestion de l'authentification
//  * 
//  */

// export const setAuthToken = (token) => {
//   Cookies.set('accessToken', token, {
//     secure: true,
//     sameSite: 'strict',
//     expires: 1
//   })
// }

// export const getAuthToken = () => {
//   return Cookies.get('accessToken')
// }

// export const removeAuthToken = () => {
//   Cookies.remove('accessToken')
// }

// export const isAuthenticated = () => {
//   return !!getAuthToken()
// }