// Dependencias
import { useRef, useState, useEffect } from 'react'

// Three JS
import { Group } from 'three'
import gsap from 'gsap'
import { useGLTF } from '@react-three/drei'

// Helpers
import { 
  teethPosition, teethRotation, superiorJawPosition, superiorJawRotation
} from 'helpers/positions'

// Mapper
import { switchTeeth } from './mapping'

// Tipagem
type MainProps = {
  side: number,
  isOpen: boolean
}

// Componente principal
const Teeth = ({ side, isOpen }: MainProps): JSX.Element => {
  // Propriedades do componente
  const { nodes, materials } = useGLTF('/models/teeth/teeth.glb') as any

  // States
  const [currentSide, setCurrentSide] = useState<number>(side)
  const [selectedTooth, setSelectedTooth] = useState<any>(null)
  const [toothInfo, setToothInfo] = useState<{ id: number, name: string } | null>(null)

  // Refs
  const mouthRef: React.MutableRefObject<Group | null> = useRef(null)
  const superiorJawRef: React.MutableRefObject<Group | null> = useRef(null)

  // Effects
  useEffect(() => {
    rotate()
    setCurrentSide(side)
  }, [side])

  useEffect(() => {
    open()
  }, [isOpen])

  // Metodos do componente
  const open = () => {
    const newPosition = isOpen ? 0 : 1
    const currentPosition = isOpen ? 1 : 0 

    if (superiorJawRef.current) {  
      const [ crRotationX, crRotationY, crRotationZ ] = superiorJawRotation[newPosition] 
      const [ rotationX, rotationY, rotationZ ] = superiorJawRotation[currentPosition]

      gsap.fromTo(
        superiorJawRef.current.rotation,
        { x: crRotationX, y: crRotationY, z: crRotationZ },
        { x: rotationX, y: rotationY, z: rotationZ}
      )

      const [ crPositionX, crPositionY, crPositionZ ] = superiorJawPosition[newPosition]
      const [ positionX, positionY, positionZ ] = superiorJawPosition[currentPosition]

      gsap.fromTo(
        superiorJawRef.current.position,
        { x: crPositionX, y: crPositionY, z: crPositionZ },
        { x: positionX, y: positionY, z: positionZ}
      )
    }
  }

  const rotate = () => {
    if (mouthRef.current) {
      const [crRotationX, crRotationY, crRotationZ] = teethRotation[currentSide] 
      const [rotationX, rotationY, rotationZ] = teethRotation[side]

      gsap.fromTo(
        mouthRef.current.rotation,
        { x: crRotationX, y: crRotationY, z: crRotationZ },
        { x: rotationX, y: rotationY, z: rotationZ}
      )
      
      const [crPositionX, crPositionY, crPositionZ] = teethPosition[currentSide]
      const [positionX, positionY, positionZ] = teethPosition[side]
    
      gsap.fromTo(
        mouthRef.current.position,
        { x: crPositionX, y: crPositionY, z: crPositionZ },
        { x: positionX, y: positionY, z: positionZ}
      )
    }
  }

  const clickOnTooth = (e: any) => {
    e.stopPropagation()
    const newToothInfo = switchTeeth(e.eventObject.name)
    
    if (selectedTooth && toothInfo && toothInfo.id !== newToothInfo.id) {
      selectedTooth.eventObject.material.color.set('#ffffff')
      setSelectedTooth(e)
      setToothInfo(newToothInfo)
      return
    }

    if (selectedTooth && toothInfo && toothInfo.id === newToothInfo.id) {
      selectedTooth.eventObject.material.color.set('#ffffff')
      setSelectedTooth(null)
      setToothInfo(null)
      return
    }

    setSelectedTooth(e)
    setToothInfo(newToothInfo)
  }

  const moveOverTooth = (e: any) => {
    e.stopPropagation()
    e.eventObject.material.color.set('#22ffff')
  }

  const moveOutTooth = (e: any) => {
    e.stopPropagation()

    if (selectedTooth && selectedTooth.eventObject.name === e.eventObject.name) {
      return
    }

    e.eventObject.material.color.set('#ffffff')
  }

  // Render
  return (
    <group name="teeth" castShadow scale={1} dispose={null} ref={mouthRef}>
      {/* Upper mouth */}
      <group name="upper_mouth" ref={superiorJawRef}>
        {/* Mandibula superior */}
        <group name="superior_jaw">
          <mesh geometry={nodes.Object_15.geometry} material={materials.mat2} />
        </group>
        {/* Gengiva superior */}
        <group name="superior_gum">
          <mesh geometry={nodes.Object_26.geometry} material={materials.mat3} />
        </group>
        {/* Arcada superior */}
        <group name='superior_arch'>
          {/* Segundo molar esquerdo */}
          <mesh
            name="segundo_molar_esquerdo_sup"
            geometry={nodes.Object_8.geometry} 
            material={materials.mat13}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro molar esquerdo */}
          <mesh
            name="primeiro_molar_esquerdo_sup"
            geometry={nodes.Object_7.geometry}
            material={materials.mat12}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo pré molar esquerdo */}
          <mesh
            name="segundo_pre_molar_esquerdo_sup"
            geometry={nodes.Object_25.geometry}
            material={materials.mat29}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro pré molar esquerdo */}
          <mesh
            name="primeiro_pre_molar_esquerdo_sup"
            geometry={nodes.Object_20.geometry}
            material={materials.mat24}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Cúspide esquerdo */}
          <mesh 
            name="cuspide_esquerdo_sup"
            geometry={nodes.Object_29.geometry}
            material={materials.mat32}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo lateral esquerdo */}
          <mesh
            name="incisivo_lateral_esquerdo_sup"
            geometry={nodes.Object_5.geometry}
            material={materials.mat10}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo central esquerdo */}
          <mesh 
            name="incisivo_central_esquerdo_sup"
            geometry={nodes.Object_44.geometry}
            material={materials.mat8}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo central direito */}
          <mesh
            name="incisivo_central_direito_sup"
            geometry={nodes.Object_41.geometry}
            material={materials.mat5}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo lateral direito */}
          <mesh
            name="incisivo_lateral_direito_sup"
            geometry={nodes.Object_16.geometry}
            material={materials.mat20}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Cúspide direito */}
          <mesh
            name="cuspide_direito_sup"
            geometry={nodes.Object_28.geometry}
            material={materials.mat31}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro pré molar direito */}
          <mesh
            name="primeiro_pre_molar_direito_sup"
            geometry={nodes.Object_19.geometry}
            material={materials.mat23}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo pré molar direito */}
          <mesh
            name="segundo_pre_molar_direito_sup"
            geometry={nodes.Object_24.geometry}
            material={materials.mat28}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro molar direito */}
          <mesh
            name="primeiro_molar_direito_sup"
            geometry={nodes.Object_6.geometry}
            material={materials.mat11}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo molar direito */}
          <mesh
            name="segundo_molar_direito_sup"
            geometry={nodes.Object_9.geometry}
            material={materials.mat14} 
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />
        </group>
      </group>

      {/* Inner mouth */}
      <group name="inner_mouth">
        {/* Mandibula inferior */}
        <group name="inferior_jaw">
          <mesh geometry={nodes.Object_2.geometry} material={materials.mat1} />
          <mesh geometry={nodes.Object_3.geometry} material={materials.mat1} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.mat1} />
        </group>

        {/* Gengiva inferior */}
        <group name="inferior_gum">
          <mesh geometry={nodes.Object_37.geometry} material={materials.mat4} />
        </group>

        {/* Arcada inferior */}
        <group name="inferior_arch">
          {/* Segundo molar esquerdo */}
          <mesh
            name="segundo_molar_esquerdo_inf"
            geometry={nodes.Object_17.geometry} 
            material={materials.mat21}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />
          
          {/* Primeiro molar esquerdo */}
          <mesh
            name="primeiro_molar_esquerdo_inf"
            geometry={nodes.Object_10.geometry} 
            material={materials.mat15}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo pré molar esquerdo */}
          <mesh
            name="segundo_pre_molar_esquerdo_inf"
            geometry={nodes.Object_36.geometry} 
            material={materials.mat39}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro pré molar esquerdo */}
          <mesh
            name="primeiro_pre_molar_esquerdo_inf"
            geometry={nodes.Object_32.geometry} 
            material={materials.mat35}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Cúspide esquerdo */}
          <mesh
            name="cuspide_esquerdo_inf"
            geometry={nodes.Object_34.geometry} 
            material={materials.mat37}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo lateral esquerdo */}
          <mesh
            name="incisivo_lateral_esquerdo_inf"
            geometry={nodes.Object_40.geometry} 
            material={materials.mat42}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo central esquerdo */}
          <mesh
            name="incisivo_central_esquerdo_inf"
            geometry={nodes.Object_43.geometry} 
            material={materials.mat7}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo central direito */}
          <mesh
            name="incisivo_central_direito_inf"
            geometry={nodes.Object_42.geometry} 
            material={materials.mat6}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Incisivo lateral direito */}
          <mesh
            name="incisivo_lateral_direito_inf"
            geometry={nodes.Object_39.geometry} 
            material={materials.mat41}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Cúspide direito */}
          <mesh
            name="cuspide_direito_inf"
            geometry={nodes.Object_33.geometry} 
            material={materials.mat36}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeito pré molar direito */}
          <mesh
            name="primeiro_pre_molar_direito_inf"
            geometry={nodes.Object_35.geometry} 
            material={materials.mat38}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo pré molar direito */}
          <mesh
            name="segundo_pre_molar_direito_inf"
            geometry={nodes.Object_38.geometry} 
            material={materials.mat40}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Primeiro molar direito */}
          <mesh
            name="primeiro_molar_direito_inf"
            geometry={nodes.Object_14.geometry} 
            material={materials.mat19}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />

          {/* Segundo molar direito */}
          <mesh
            name="segundo_molar_direito_inf"
            geometry={nodes.Object_18.geometry} 
            material={materials.mat22}
            onClick={clickOnTooth}
            onPointerOver={moveOverTooth}
            onPointerOut={moveOutTooth}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/teeth/teeth.glb')

export default Teeth;
