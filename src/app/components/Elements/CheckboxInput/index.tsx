// Styles
import './styles.scss'

// Local types
type UpdateValue = React.ChangeEvent<HTMLInputElement>
type MainProps = {
  label: string
  name: string,
  value: boolean,
  setValue: (e: boolean) => void
}

// Component events
const handleUpdateValue = (e: UpdateValue, callBack: (e: boolean) => void) => {
  callBack(e.target.checked)
}

// Exported component
const CheckBoxInput = ({ label, name, value, setValue }: MainProps): JSX.Element => {
  return (
    <div className={`e-checkbox-input --${name}`}>
      <input 
        type="checkbox"
        id={name}
        className="e-checkbox-input__input"
        name={name}
        checked={value}
        onChange={(e) => handleUpdateValue(e, setValue)}
      />
      <label className="e-checkbox-input__label" htmlFor={name}>{label}</label>
    </div>
  )
}

// Exports
export default CheckBoxInput