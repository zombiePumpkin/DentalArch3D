// Dependencies
import { createRef, useState, useEffect } from 'react'

// Three JS
import { Group } from 'three'
import { PerspectiveCamera } from '@react-three/drei' 
import gsap from 'gsap'

// Components
import Teeth from 'assets/3D/Teeth'

// Helpers
import { angleToRadians } from 'helpers/converter'
import { teethPosition, teethRotation } from 'helpers/positions'

// Local types
type MainProps = { side?: number }

// Exported component
const DentalArch = ({ side = 1 }: MainProps): JSX.Element => {
  // Component properties
  const [currentSide, setCurrentSide] = useState(side)
  const dentalRef: React.Ref<Group> = createRef()

  // Component actions
  const rotate = () => {
    if (dentalRef.current) {
      const [crRotationX, crRotationY, crRotationZ] = teethRotation[currentSide] 
      const [rotationX, rotationY, rotationZ] = teethRotation[side]

      gsap.fromTo(
        dentalRef.current.rotation,
        { x: crRotationX, y: crRotationY, z: crRotationZ },
        { x: rotationX, y: rotationY, z: rotationZ}
      )
      
      const [crPositionX, crPositionY, crPositionZ] = teethPosition[currentSide]
      const [positionX, positionY, positionZ] = teethPosition[side]
    
      gsap.fromTo(
        dentalRef.current.position,
        { x: crPositionX, y: crPositionY, z: crPositionZ },
        { x: positionX, y: positionY, z: positionZ}
      )
    }
  }

  useEffect(() => {
    rotate()
    setCurrentSide(side)
  }, [side])

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
        position={teethPosition[side]}
        rotation={teethRotation[side]}
        scale={1}
        ref={dentalRef}
      />
    </group>
  )
}

export default DentalArch
