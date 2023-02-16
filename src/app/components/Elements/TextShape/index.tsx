// Three JS
import { FrontSide } from 'three'
import { Text, Ring } from '@react-three/drei'

// Helpers
import { angleToRadians } from 'helpers/converter'

// Exported component
const TextShape = (): JSX.Element => {
  return (
    <Ring 
      args={[0.18, 0.2, 32]}
      position={[-0.5, 0.65, 0]}
      rotation={[0, angleToRadians(90), 0]}
    >
      <meshStandardMaterial color={'#fff'} side={FrontSide} />
      
      <Text anchorX="center" anchorY="middle">
        <meshStandardMaterial color={'#fff'} side={FrontSide} />
        hey
      </Text>
    </Ring>
  )
}

export default TextShape