import { useState } from 'react'
import '../../styles/main.css'
import PropTypes from 'prop-types'
import AccountSection from '../../components/AccountSection/AccountSectionIndex'
// import EditProfile from '../EditProfile/EditProfileIndex'

/**
 * Page User - Dashboard utilisateur
 * Utilise les styles du template main.css
 */


const User = () => {
  const [isEditing, setIsEditing] = useState(false)
  // Ces données viendront de Redux plus tard
  const userName = "Tony Jarvis"
  
  return (
    <>
      <div className="header">
        <h1>Welcome back<br />{userName}!</h1>
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit Name
        </button>
      </div>
     <AccountSection />
    </>
  )
}

User.propTypes = {
  userName: PropTypes.string.isRequired
}

export default User