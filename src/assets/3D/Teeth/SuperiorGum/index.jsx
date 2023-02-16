// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const SuperiorGum = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      <mesh geometry={nodes.Object_26.geometry} material={materials.mat3} />
    </group>
  )
}

export default SuperiorGum
