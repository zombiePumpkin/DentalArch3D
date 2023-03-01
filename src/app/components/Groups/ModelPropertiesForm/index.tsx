// Dependencies
import { useContext } from 'react'

// Components
import CheckBoxInput from "app/components/Elements/CheckboxInput"
import RadioInput from 'app/components/Elements/RadioInput'

// Context
import { ModelContext } from 'app/contexts/ModelContext'

// Styles
import './styles.scss'

// Exported component
const ModelPropertiesForm = (): JSX.Element => {
  const { model, dispatch } = useContext(ModelContext)

  return (
    <form className="g-model-properties-form">
      <h2 className="g-model-properties-form__title">
        # Teeth demo
      </h2>

      <h3 className="g-model-properties-form__subtitle">
        Ações do modelo:
      </h3>

      <div className="g-model-properties-form__content --checkbox-inputs">
        <CheckBoxInput 
          label='Abrir a boca'
          name='MOUTH'
          value={model.isMouthOpen}
          setValue={(e) => dispatch('isMouthOpen', e)}
        />
      </div>

      <h3 className="g-model-properties-form__subtitle">
        Posições do modelo:
      </h3>

      <div className="g-model-properties-form__content --radio-inputs">
        <RadioInput 
          label='Alterar para lateral esquerda'
          name='SIDE' 
          value={0}
          checked={model.mouthSide === 0}
          setValue={(e) => dispatch('mouthSide', e)} 
        />
        <RadioInput 
          label='Alterar para frente'
          name='SIDE' 
          value={1}
          checked={model.mouthSide === 1}
          setValue={(e) => dispatch('mouthSide', e)} 
        />
        <RadioInput 
          label='Alterar para lateral direita'
          name='SIDE' 
          value={2} 
          checked={model.mouthSide === 2}
          setValue={(e) => dispatch('mouthSide', e)} 
        />
      </div>
    </form>
  )
}

// Exports
export default ModelPropertiesForm