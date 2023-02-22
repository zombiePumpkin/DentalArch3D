// Three JS
import { PerspectiveCamera } from '@react-three/drei' 

// Components
import Teeth from 'assets/3D/Teeth'

// Helpers
import { angleToRadians } from 'helpers/converter'
import { teethPosition, teethRotation } from 'helpers/positions'

// Exported component
const DentalArch = (): JSX.Element => {
  return (
    <group>
      {/* Directional Light */}
      <spotLight
        castShadow
        args={['#fff', 1.15, 8, angleToRadians(45), 0.4]}
        position={[4, 0, 0]}
      />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 0]} />
      
      {/* Dental arch */}
      <Teeth 
        castShadow
        position={teethPosition[1]}
        rotation={teethRotation[1]}
        scale={1}
      />
    </group>
  )
}

export default DentalArch
