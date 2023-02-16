// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const InferiorJaw = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      <mesh geometry={nodes.Object_2.geometry} material={materials.mat1} />
      <mesh geometry={nodes.Object_3.geometry} material={materials.mat1} />
      <mesh geometry={nodes.Object_4.geometry} material={materials.mat1} />
    </group>
  )
}

export default InferiorJaw
