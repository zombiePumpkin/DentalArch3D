// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const SuperiorArch = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      {/* Segundo molar esquerdo */}
      <mesh geometry={nodes.Object_8.geometry} material={materials.mat13} />
      {/* Primeiro molar esquerdo */}
      <mesh geometry={nodes.Object_7.geometry} material={materials.mat12} />
      {/* Segundo pré molar esquerdo */}
      <mesh geometry={nodes.Object_25.geometry} material={materials.mat29} />
      {/* Primeiro pré molar esquerdo */}
      <mesh geometry={nodes.Object_20.geometry} material={materials.mat24} />
      {/* Cúspide esquerdo */}
      <mesh geometry={nodes.Object_29.geometry} material={materials.mat32} />
      {/* Incisivo lateral esquerdo */}
      <mesh geometry={nodes.Object_5.geometry} material={materials.mat10} />
      {/* Incisivo central esquerdo */}
      <mesh geometry={nodes.Object_44.geometry} material={materials.mat8} />
      {/* Incisivo central direito */}
      <mesh geometry={nodes.Object_41.geometry} material={materials.mat5} />
      {/* Incisivo lateral direito */}
      <mesh geometry={nodes.Object_16.geometry} material={materials.mat20} />
      {/* Cúspide direito */}
      <mesh geometry={nodes.Object_28.geometry} material={materials.mat31} />
      {/* Primeiro pré molar direito */}
      <mesh geometry={nodes.Object_19.geometry} material={materials.mat23} />
      {/* Segundo pré molar direito */}
      <mesh geometry={nodes.Object_24.geometry} material={materials.mat28} />
      {/* Primeiro molar direito */}
      <mesh geometry={nodes.Object_6.geometry} material={materials.mat11} />
      {/* Segundo molar direito */}
      <mesh geometry={nodes.Object_9.geometry} material={materials.mat14} />
    </group>
  )
}

export default SuperiorArch
