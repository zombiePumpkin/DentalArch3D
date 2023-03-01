// Styles
import './styles.scss'

// Local types
type UpdateValue = React.ChangeEvent<HTMLInputElement>
type MainProps = {
  label: string,
  name: string,
  value: number,
  checked?: boolean,
  setValue: (e: number) => void
}

// Component events
const handleUpdateValue = (e: UpdateValue, callBack: (e: number) => void) => {
  callBack(Number(e.target.value))
}

// Exported component
const RadioInput = ({ label, name, value, checked, setValue }: MainProps): JSX.Element => {
  return (
    <div className={`e-radio-input --${name}_${value}`}>
      <input 
        type="radio"
        id={`${name}_${value}`}
        className="e-radio-input__input"
        name={name}
        value={value}
        checked={checked}
        onChange={(e) => handleUpdateValue(e, setValue)}
      />
      <label className="e-radio-input__label" htmlFor={`${name}_${value}`}>{label}</label>
    </div>
  )
}

// Exports
export default RadioInput