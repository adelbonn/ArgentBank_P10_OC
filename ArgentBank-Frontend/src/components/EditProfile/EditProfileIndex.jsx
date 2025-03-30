import {  useState } from "react";
import PropTypes from "prop-types";
import style from './EditProfile.module.css'
import InputField from "../InputField/InputFieldIndex";
import Button from "../Button/ButtonIndex";

const EditProfile = ({ userName, firstName, lastName, onSave, onCancel }) => {

  const [newUserName, setNewUserName] = useState(userName);

  // Gestionnaire pour le submit du button save si modification du username
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newUserName);
  };

  // Gestionnaire pour le submit du button cancel 
  const handleCancel = (e) => {
    e.preventDefault();
    setNewUserName(userName);
    onCancel(newUserName);
  };

  return (
    <div className={style.editProfile}>
      <h2>Edit user info</h2>
      <form className={style.editProfileForm}>
      
          <InputField
            id="username"
            name="username"
            label="User name"
            type="text"
            autoComplete="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
  
          <InputField
            id="firstname"
            name="firstname"
            label="First name"
            type="text"
            autoComplete="given-name"
            value={firstName}
            disabled
            onChange={() => {}}  // fonction vide car champ desactivé
            className={style.inputDisabled}
          />

          <InputField
            id="lastname"
            name="lastname"
            label="Last name"
            type="text"
            autoComplete="family-name"
            value={lastName}
            disabled
            onChange={() => {}}  // fonction vide car champ desactivé comme pour le firstname
            className={style.inputDisabled}
          />

        <div className={style.editProfileButtons}>
          <Button className={style.editButton} text="Save" onClick={handleSubmit} type="submit"/>
          <Button className={style.editButton} text="Cancel" onClick={handleCancel} type="button"/>
        </div>
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditProfile;
