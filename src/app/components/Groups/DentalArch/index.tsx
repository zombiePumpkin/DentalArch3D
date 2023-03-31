// Dependencias
import { useRef } from 'react'

// Three JS
import { Group } from 'three'
import { PerspectiveCamera } from '@react-three/drei' 

// Componentes
import Teeth from 'assets/3D/Teeth'

// Helpers
import { angleToRadians } from 'helpers/converter'

// Tipagem
type MainProps = { side?: number, isOpen?: boolean }

// Componente principal
const DentalArch = ({ side = 1, isOpen = false }: MainProps): JSX.Element => {
  // Refs
  const perspectCameraRef: React.MutableRefObject<Group | null> = useRef(null)

  // Render
  return (
    <group>
      {/* Luz direcional */}
      <spotLight 
        castShadow args={['#fff', 1.15, 8, angleToRadians(45), 0.4]} position={[4, 0, 0]}
      />

      {/* Camera */}
      <PerspectiveCamera 
        makeDefault position={[0, 0, 0]} ref={perspectCameraRef}
      />
      
      {/* Arcada dentaria */}
      <Teeth 
        side={side} isOpen={isOpen}
      />
    </group>
  )
}

export default DentalArch
