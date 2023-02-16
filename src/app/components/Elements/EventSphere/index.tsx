// Dependencies
import { useRef, useState, MutableRefObject, Dispatch, SetStateAction } from 'react'

// Three JS
import { Mesh } from 'three';

// Types
import { SetStateFunction } from 'types/Function'

type Position = { x: number, y: number, z:number }
type MainProps = Position
type SetStatePosition = SetStateFunction<Position>
type SetStateCanInteract = SetStateFunction<boolean>

// Component events
const handleClick = (
  canInteract: Boolean, setPosition: SetStatePosition, setCanInteract: SetStateCanInteract
) => {
  canInteract && setPosition((state) => ({ ...state, y: state.y + 1 }))
  !canInteract && setPosition((state) => ({ ...state, y: state.y - 1 }))
  setCanInteract(!canInteract)
}

// Exported component
const EventSphere = ({ x, y, z }: MainProps): JSX.Element => {
  // Component states
  const [position, setPosition] = useState({ x, y, z })
  const [canInteract, setCanInteract] = useState(true)
  
  // Component properties
  const ballRef: MutableRefObject<Mesh | null> = useRef(null)
  
  // Component return
  return(
    <mesh 
      position={[position.z, position.y, position.x]}
      castShadow
      onClick={() => handleClick(canInteract, setPosition, setCanInteract)}
      ref={ballRef}
    >
      <sphereGeometry args={[0.45, 32, 32]} />
      <meshStandardMaterial color='#fff' metalness={0.5} roughness={0.25} />
    </mesh>
  )
}

export default EventSphere