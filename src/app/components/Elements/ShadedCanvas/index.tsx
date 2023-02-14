// Dependencies
import { Suspense } from 'react'

// Three JS
import { BackSide } from 'three'
import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls } from '@react-three/drei'

// Types 
import { MeshChildren } from 'types/Mesh'

// Exported component
export default function ShadedCanvas({ children }: MeshChildren): JSX.Element {
  return(
    // Canvas
    <Canvas>
      <Suspense fallback={null}>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[-10, 8, 2]} />

        {/* Orbit controls */}
        <OrbitControls />
        
        {/* Ambient light */}
        <ambientLight args={['#fff', 0.25]} />
        
        {/* Children content */}
        {children}

        {/* Environment */}
        <Environment background>
          <mesh scale={50}>
            <sphereGeometry args={[1, 100, 100]} />
            <meshBasicMaterial color='#bd8bc2' side={BackSide} />
          </mesh>
        </Environment>
      </Suspense>
    </Canvas>
  )
}
