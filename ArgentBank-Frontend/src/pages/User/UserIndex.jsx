import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchUserProfile, selectUserProfile, selectUserStatus, selectUserError } from '../../store/features/user/userSlice'
import { selectIsAuthenticated } from '../../store/features/auth/authSlice';

import WelcomeSection from '../../components/WelcomeSEction/WelcomeSectionIdex';
import AccountSection from '../../components/AccountSection/AccountSectionIndex';
import '../../styles/main.css'

// import EditProfile from '../EditProfile/EditProfileIndex'

/**
 * Page User - Dashboard utilisateur
 * Utilise les styles du template main.css
 * @returns {JSX.Element}
 */


const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

   //utilisation des selectors mémorisés
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userProfile = useSelector(selectUserProfile);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);
  const [isEditing, setIsEditing] = useState(false)
  
  // gestion du profil au montage du composant 
  useEffect(() => {

    // redirection si non authentifier
    if (!isAuthenticated) {
      navigate('/')
      return
    }

// Chargement du profil si authentifié
    dispatch(fetchUserProfile())
  }, [dispatch, navigate, isAuthenticated])  

  // Affichage pendant le chargement
  if (status === 'loading') {
    return <div className="loading">Chargement...</div>;
  }

  // Affichage en cas d'erreur
  if (status === 'failed') {
    return <div className="error">Erreur : {error}</div>;
  }
  if (error) {
    return <div className="error">Erreur : {error}</div>;
  }

  return (
    <main className="main bg-dark">
    <WelcomeSection
     firstName={userProfile.firstName}
      lastName={userProfile.lastName} 
      userName={userProfile.userName}
      isEditing={isEditing}
      onEdit={() => setIsEditing(true)} />
    <AccountSection />
    </main>
  )
}



export default User


