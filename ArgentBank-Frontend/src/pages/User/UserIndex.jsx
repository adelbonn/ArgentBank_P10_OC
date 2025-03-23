import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUserProfile,
  selectUserProfile,
  selectUserStatus,
  selectUserError,
 
} from "../../store/features/user/userSlice";
import { selectIsAuthenticated } from "../../store/features/auth/authSlice";
import { useUpdateProfileMutation } from "../../store/api/argentBankApi";

import WelcomeSection from "../../components/WelcomeSEction/WelcomeSectionIdex";
import AccountSection from "../../components/AccountSection/AccountSectionIndex";

import EditProfile from "../../components/EditProfile/EditProfileIndex";

import "../../styles/main.css";

/**
 * Page User - Dashboard utilisateur
 * Utilise les styles du template main.css
 * @returns {JSX.Element}
 */

const User = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
const [updateProfile] = useUpdateProfileMutation();

  //utilisation des selectors mémorisés
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const userProfile = useSelector(selectUserProfile);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);
  // etat local qui controle l'affichage entre le mode de lecture et l'edition (WelcomeSection et EditProfile)
  const [isEditing, setIsEditing] = useState(false);

  // gestion du profil au montage du composant
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }
    // Chargement du profil si authentifié
    dispatch(fetchUserProfile());
  }, [dispatch, navigate, isAuthenticated]);

  // Gestionnaire pour sauvegarder les modifications
  const handleSave = async (newUserName) => {
    try {
      // Appel de la mutation RTK Query
     const result =  await updateProfile({ userName: newUserName }).unwrap(); // unwrap pour la gestion d'erreur ou de reussite de la promise renvoyée (contient soit la valeur action.payload réelle si action exécutée (permet de gérer la reussite ou l'échec) soit une erreur si action est rejetée)  et updateProfile est une mutation creator de RTK Query
      // recharge le profil pour mettre à jour l'ui
      if (result) {
        // recharge le profil pour mettre à jour l'ui
       dispatch(fetchUserProfile()); // fetchUserProfile est un action creator qui vient du userSlice
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil:", error);
    }
  };

  // Gestionnaire pour annuler l'édition
  const handleCancel = () => {
    setIsEditing(false);
  };

  // Affichage pendant le chargement
  if (status === "loading") {
    return <div className="loading">Chargement...</div>;
  }

  // Affichage en cas d'erreur
  if (status === "failed" || error) {
    return <div className="error">Erreur : {error}</div>;
  }

  return (
    <main className="main bg-dark">
      {isEditing ? (
        <EditProfile
          userName={userProfile.userName}
          firstName={userProfile.firstName}
          lastName={userProfile.lastName}
          isEditing={isEditing}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      ) : (
        <WelcomeSection
          firstName={userProfile.firstName}
          lastName={userProfile.lastName}
          userName={userProfile.userName}
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
        />
      )}

      <AccountSection />
    </main>
  );
};

export default User;
