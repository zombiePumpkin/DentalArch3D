import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

// Loaders
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useLoader }  from '@react-three/fiber'

export default function DentalArch():JSX.Element {
  const first = useLoader(OBJLoader, './3D/teeth_and_tongue-bw.obj')
  const second = useLoader(FBXLoader, './3D/teeth_and_tongue-cl.fbx')
  
  return (
    <>
      {/* Modelo de arcada dentaria sem cores */}
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback='null'>
          <primitive object={first} />
        </Suspense>
      </Canvas>
      {/* Modelo de arcada dentaria com cores */}
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Suspense fallback='null'>
          <primitive object={second} />
        </Suspense>
      </Canvas>
    </>
  )
}