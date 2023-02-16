// Dependencies
import { useGLTF } from '@react-three/drei'

// Exported component
const InferiorArch = () => {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')

  return (
    <group>
      {/* Segundo molar esquerdo */}
      <mesh geometry={nodes.Object_17.geometry} material={materials.mat21} />
      {/* Primeiro molar esquerdo */}
      <mesh geometry={nodes.Object_10.geometry} material={materials.mat15} />
      {/* Segundo pré molar esquerdo */}
      <mesh geometry={nodes.Object_36.geometry} material={materials.mat39} />
      {/* Primeiro pré molar esquerdo */}
      <mesh geometry={nodes.Object_32.geometry} material={materials.mat35} />
      {/* Cúspide esquerdo */}
      <mesh geometry={nodes.Object_34.geometry} material={materials.mat37} />
      {/* Incisivo lateral esquerdo */}
      <mesh geometry={nodes.Object_40.geometry} material={materials.mat42} />
      {/* Incisivo central esquerdo */}
      <mesh geometry={nodes.Object_43.geometry} material={materials.mat7} />
      {/* Incisivo central direito */}
      <mesh geometry={nodes.Object_42.geometry} material={materials.mat6} />
      {/* Incisivo lateral direito */}
      <mesh geometry={nodes.Object_39.geometry} material={materials.mat41} />
      {/* Cúspide direito */}
      <mesh geometry={nodes.Object_33.geometry} material={materials.mat36} />
      {/* Primeito pré molar direito */}
      <mesh geometry={nodes.Object_35.geometry} material={materials.mat38} />
      {/* Segundo pré molar direito */}
      <mesh geometry={nodes.Object_38.geometry} material={materials.mat40} />
      {/* Primeiro molar direito */}
      <mesh geometry={nodes.Object_14.geometry} material={materials.mat19} />
      {/* Segundo molar direito */}
      <mesh geometry={nodes.Object_18.geometry} material={materials.mat22} />
    </group>
  )
}

export default InferiorArch
