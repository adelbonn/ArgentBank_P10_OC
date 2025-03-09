// InputFieldIndex.jsx
import PropTypes from 'prop-types'

/**
 * Composant InputField - Champ de saisie réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.label - Label du champ
 * @param {string} props.type - Type de l'input (text, password, etc.)
 * @param {string} props.id - ID unique du champ
 * @param {string} props.value - Valeur du champ
 * @param {function} props.onChange - Fonction appelée lors du changement
 * @param {string} props.autoComplete - Valeur de l'attribut autoComplete
 * @returns {JSX.Element} Champ de saisie avec label
 */
function InputField({ label, type, id, value, onChange, autoComplete }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id}
        autoComplete={autoComplete}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autocomplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputField