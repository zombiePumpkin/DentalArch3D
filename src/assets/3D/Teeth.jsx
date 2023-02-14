import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        {/* <mesh geometry={nodes.Object_2.geometry} material={materials.mat1} /> */}
        {/* <mesh geometry={nodes.Object_3.geometry} material={materials.mat1} /> */}
        {/* <mesh geometry={nodes.Object_4.geometry} material={materials.mat1} /> */}
        <mesh geometry={nodes.Object_5.geometry} material={materials.mat10} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.mat11} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mat12} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.mat13} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.mat14} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.mat15} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.mat16} />
        
        {/* <mesh geometry={nodes.Object_12.geometry} material={materials.mat17} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.mat18} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.mat19} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.mat2} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.mat20} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.mat21} /> */}

        {/* <mesh geometry={nodes.Object_18.geometry} material={materials.mat22} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.mat23} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.mat24} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.mat25} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.mat26} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.mat27} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.mat28} />
        <mesh geometry={nodes.Object_25.geometry} material={materials.mat29} />
        <mesh geometry={nodes.Object_26.geometry} material={materials.mat3} />
        <mesh geometry={nodes.Object_27.geometry} material={materials.mat30} />
        <mesh geometry={nodes.Object_28.geometry} material={materials.mat31} />
        <mesh geometry={nodes.Object_29.geometry} material={materials.mat32} /> */}

        
        {/* <mesh geometry={nodes.Object_30.geometry} material={materials.mat33} /> */}
        {/* <mesh geometry={nodes.Object_31.geometry} material={materials.mat34} /> */}
        {/* <mesh geometry={nodes.Object_32.geometry} material={materials.mat35} />
        <mesh geometry={nodes.Object_33.geometry} material={materials.mat36} />
        <mesh geometry={nodes.Object_34.geometry} material={materials.mat37} />
        <mesh geometry={nodes.Object_35.geometry} material={materials.mat38} />
        <mesh geometry={nodes.Object_36.geometry} material={materials.mat39} />
        <mesh geometry={nodes.Object_37.geometry} material={materials.mat4} />
        <mesh geometry={nodes.Object_38.geometry} material={materials.mat40} />
        <mesh geometry={nodes.Object_39.geometry} material={materials.mat41} />
        <mesh geometry={nodes.Object_40.geometry} material={materials.mat42} />
        <mesh geometry={nodes.Object_41.geometry} material={materials.mat5} />
        <mesh geometry={nodes.Object_42.geometry} material={materials.mat6} />
        <mesh geometry={nodes.Object_43.geometry} material={materials.mat7} />
        <mesh geometry={nodes.Object_44.geometry} material={materials.mat8} />
        <mesh geometry={nodes.Object_45.geometry} material={materials.mat9} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/models/teeth/teeth.glb')
