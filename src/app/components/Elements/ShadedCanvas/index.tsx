// Dependencies
import { Suspense } from 'react'

// Three JS
import { BackSide } from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'

// Types 
import { MeshChildren } from 'types/Mesh'

// Exported component
const ShadedCanvas = ({ children }: MeshChildren): JSX.Element => {
  return(
    // Canvas
    <Canvas>
      <Suspense fallback={null}>
        {/* Ambient light */}
        <ambientLight args={['#fff', 0.25]} />
        
        {/* Children content */}
        {children}

        {/* Environment */}
        <Environment background>
          <mesh scale={5}>
            <sphereGeometry args={[4, 16, 16]} />
            <meshBasicMaterial color='#bd8bc2' side={BackSide} />
          </mesh>
        </Environment>
      </Suspense>
    </Canvas>
  )
}

export default ShadedCanvas
