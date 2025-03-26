import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { argentBankApi } from "../../store/api/argentBankApi";
import {
  selectUserProfile,
  selectUserStatus,
  selectUserError,
 
} from "../../store/features/user/userSlice";

import { useUpdateProfileMutation } from "../../store/api/argentBankApi";

import WelcomeSection from "../../components/WelcomeSEction/WelcomeSectionIdex";
import AccountSection from "../../components/AccountSection/AccountSectionIndex";

import EditProfile from "../../components/EditProfile/EditProfileIndex";

import "../../styles/main.css";

/**
 * Page User - Dashboard utilisateur
 * 
 * @returns {JSX.Element}
 */

const User = () => {
  const dispatch = useDispatch();
 
const [updateProfile] = useUpdateProfileMutation();

  //utilisation des selectors mémorisés avec useSelector
  const userProfile = useSelector(selectUserProfile);
  const status = useSelector(selectUserStatus);
  const error = useSelector(selectUserError);
  //Gestion de l'état de l'affichage entre le mode de lecture et l'edition (WelcomeSection et EditProfile)
  const [isEditing, setIsEditing] = useState(false);



  //  Gestionnaire pour sauvegarder les modifications
  const handleSave = async (newUserName) => {
    try {
      // Appel de la mutation RTK Query
     const result =  await updateProfile({ userName: newUserName }).unwrap(); // unwrap pour la gestion d'erreur ou de reussite de la promise renvoyée
      if (result) {
        // recharge le profil pour mettre à jour l'ui
       dispatch(argentBankApi.endpoints.getProfile.initiate()); 
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
