// InputFieldIndex.jsx
import PropTypes from 'prop-types'
import style from './InputField.module.css'

/**
 * Composant InputField - Champ de saisie réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.label - Label du champ
 * @param {string} props.type - Type de l'input (text, password, etc.)
 * @param {string} props.id - ID unique du champ
 * @param {string} props.name - Nom du champ
 * @param {string} props.value - Valeur du champ
 * @param {function} props.onChange - Fonction appelée lors du changement
 * @param {string} props.autoComplete - Valeur de l'attribut autoComplete
 * @returns {JSX.Element} Champ de saisie avec label
 */

function InputField({ label, type, id, value, name, onChange, autoComplete }) {
  return (
    <div className={style.inputWrapper}>
      <label className= {style.inputWrapperLabel} htmlFor={id}>{label}</label>
      <input 
        type={type}
        id={id}
        name={name}
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
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  autoComplete: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default InputField