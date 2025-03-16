import { Navigate, Outlet } from 'react-router-dom'
import PropTypes from 'prop-types'
import { isAuthenticated } from '../../utils/auth'


const ProtectedRoutes = ({ children}) => {

    // on vérifie le token dans le local storage
    // const isAuthenticated = localStorage.getItem('token')
if (!isAuthenticated()) {
    // redirige vers la page login si non authentifié
    return <Navigate to="/login" replace />;
}

// si authentifié rendre les routes enfants
return children;
}





ProtectedRoutes.propTypes = {
  children: PropTypes.node
}

export default ProtectedRoutes