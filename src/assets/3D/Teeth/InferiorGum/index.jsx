// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const InferiorGum = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      <mesh geometry={nodes.Object_37.geometry} material={materials.mat4} />
    </group>
  )
}

export default InferiorGum
