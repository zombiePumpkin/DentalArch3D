// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const SuperiorJaw = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      <mesh geometry={nodes.Object_15.geometry} material={materials.mat2} />
    </group>
  )
}

export default SuperiorJaw
