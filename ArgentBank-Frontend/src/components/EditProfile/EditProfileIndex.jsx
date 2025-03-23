import {  useState } from "react";
import PropTypes from "prop-types";
import "../../styles/main.css";
import InputField from "../InputField/InputFieldIndex";
// import style from './EditProfile.module.css'

const EditProfile = ({ userName, firstName, lastName, onSave, onCancel }) => {
  // State pour le nouveau username
  const [newUserName, setNewUserName] = useState(userName);

  // Gestionnaire pour le submit du button save si modification du username
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(newUserName);
  };

  // Gestionnaire pour le submit du button cancel (vérifier que cela fonctionne correctement)
  const handleCancel = (e) => {
    e.preventDefault();
    setNewUserName(userName);
    onCancel(newUserName);
  };

  return (
    <div className="edit-profile">
      <h2>Edit user info</h2>
      <form className="edit-profile-form">
        <div className="input-wrapper">
          <InputField
            id="username"
            name="username"
            label="User name"
            type="text"
            autoComplete="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <InputField
            id="firstname"
            name="firstname"
            label="First name"
            type="text"
            autoComplete="given-name"
            value={firstName}
            disabled
            onChange={() => {}}  // fonction vide car champ desactivé
            className="input-disabled"
          />
        </div>

        <div className="input-wrapper">
          <InputField
            id="lastname"
            name="lastname"
            label="Last name"
            type="text"
            autoComplete="family-name"
            value={lastName}
            disabled
            onChange={() => {}}  // fonction vide car champ desactivé comme pour le firstname
            className="input-disabled"
          />
        </div>

        <div className="edit-profile-buttons">
          <button className="edit-button" onClick={handleSubmit}>
            Save
          </button>
          <button className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
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
