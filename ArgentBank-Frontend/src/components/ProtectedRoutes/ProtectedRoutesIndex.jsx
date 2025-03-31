import { Navigate, Outlet } from 'react-router-dom' // ajouter outlet a la place de children
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../store/features/auth/authSlice' 
// import { outlet } from 'react-router-dom' // ajouter outlet a la place de children
/**
 * ProtectedRoutes component - Gère les routes protégées par authentification
 * Redirige vers la page de login si non authentifié
 * Rend les routes enfants si authentifié
 * @param {React.ReactNode} children - Routes enfants à rendre si authentifié
 * @returns {React.ReactNode} - Route vers la page de Home si non authentifié, routes enfants si authentifié
 */

const ProtectedRoutes = ({ children}) => {
const isAuthenticated = useSelector(selectIsAuthenticated)
   
if (!isAuthenticated) {
    // redirige vers la page login si non authentifié
    return <Navigate to="/" replace />;
}

// si authentifié rendre les routes enfants
return children;  // a améliorer  children || <outlet/>, cf documentation react-router-dom
}





ProtectedRoutes.propTypes = {
  children: PropTypes.node
}

export default ProtectedRoutes