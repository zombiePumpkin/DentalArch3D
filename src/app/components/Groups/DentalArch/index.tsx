// Components
import Teeth from 'assets/3D/Teeth'

// Helpers
import { angleToRadians } from 'helpers/converter'

// Exported component
const DentalArch = (): JSX.Element => {
  return (
    <group>
      {/* Dental arch */}
      <Teeth 
        castShadow
        position={[.75, -1.6, 0.45]}
        rotation={[angleToRadians(90), angleToRadians(20), angleToRadians(-95)]}
        scale={1}
      />

      {/* Directional Light */}
      <spotLight
        castShadow
        args={['#fff', 1.15, 8, angleToRadians(30), 0.4]}
        position={[4, 0, 0]}
      />
    </group>
  )
}

export default DentalArch
