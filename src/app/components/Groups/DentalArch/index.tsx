// Components
import { Model } from 'assets/3D/Teeth'

// Helpers
import { angleToRadians } from 'helpers/converter'

// Exported component
export default function DentalArch() {
  return (
    <>
      <Model 
        scale={0.5}
        position={[-0.5, 1, 0]}
        rotation={[0, angleToRadians(90), 0]}
        castShadow
      />
    </>
  )
}