import { Navigate, Outlet } from 'react-router-dom' // ajouter outlet a la place de children
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { selectIsAuthenticated } from '../../store/features/auth/authSlice' 

const ProtectedRoutes = ({ children}) => {
const isAuthenticated = useSelector(selectIsAuthenticated)
    // on vérifie le token dans le local storage
    // const isAuthenticated = localStorage.getItem('token')
if (!isAuthenticated) {
    // redirige vers la page login si non authentifié
    return <Navigate to="/login" replace />;
}

// si authentifié rendre les routes enfants
return children;  // a améliorer  children || <outlet/>, cf documentation react-router-dom
}





ProtectedRoutes.propTypes = {
  children: PropTypes.node
}

export default ProtectedRoutes