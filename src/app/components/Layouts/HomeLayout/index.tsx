// Dependencies
import { useContext } from 'react'

// Components
import ShadedCanvas from 'app/components/Groups/ShadedCanvas'
import DentalArch from 'app/components/Groups/DentalArch'
import ModelPropertiesForm from 'app/components/Groups/ModelPropertiesForm'

// Context
import { ModelContext } from 'app/contexts/ModelContext'

// Styles
import './styles.scss'

// Exported component
const HomeLayout = (): JSX.Element => {
  const { model: { mouthSide, isMouthOpen } } = useContext(ModelContext)

  return (
    <div className="l-home">
      <ShadedCanvas>
        <DentalArch side={mouthSide} isOpen={isMouthOpen} />
      </ShadedCanvas>
      
      <ModelPropertiesForm />
    </div>
  )
}

// Exports
export default HomeLayout