
import { useState } from 'react'
import PropTypes from 'prop-types'
import '../../styles/main.css'

const EditProfile = ({ userName, firstName, lastName, onSave, onCancel }) => {
  const [newUserName, setNewUserName] = useState(userName)

  return (
    <div className="edit-profile">
      <h2>Edit user info</h2>
      <form className="edit-profile-form">
        <div className="input-wrapper">
          <label htmlFor="username">User name</label>
          <input
            type="text"
            id="username"
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="firstname">First name</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            disabled
            className="input-disabled"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="lastname">Last name</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            disabled
            className="input-disabled"
          />
        </div>

        <div className="edit-profile-buttons">
          <button 
            className="edit-button" 
            onClick={(e) => {
              e.preventDefault()
              onSave(newUserName)
            }}
          >
            Save
          </button>
          <button 
            className="edit-button" 
            onClick={(e) => {
              e.preventDefault()
              onCancel()
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

EditProfile.propTypes = {
  userName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
}

export default EditProfile