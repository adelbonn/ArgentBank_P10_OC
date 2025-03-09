import PropTypes from 'prop-types'

/**
 * Composant CheckBoxField - Champ de type checkbox réutilisable
 * @param {Object} props - Propriétés du composant
 * @param {string} props.id - ID unique du champ
 * @param {string} props.label - Label de la checkbox
 * @param {boolean} props.checked - État de la checkbox
 * @param {function} props.onChange - Fonction appelée lors du changement d'état
 * @returns {JSX.Element} Checkbox avec son label
 */
function CheckBoxField({ id, label, checked, onChange }) {
  return (
    <div className="input-remember">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

CheckBoxField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default CheckBoxField