// Dependencies
import { useRef, useState, MutableRefObject } from 'react'

// Three JS
import { Mesh } from 'three';

// Types
type MainProps = {
  x: number; y: number; z:number;
}

// Exported component
export default function EventSphere({ x, y, z }: MainProps): JSX.Element {
  // Component states
  const [position, setPosition] = useState({ x, y, z })
  const [canInteract, setCanInteract] = useState(true)
  
  // Component properties
  const ballRef: MutableRefObject<Mesh | null> = useRef(null)
  
  // Component events
  const handleClick = () => {
    canInteract && setPosition((state) => ({ x, y: state.y + 1, z }))
    !canInteract && setPosition((state) => ({ x, y: state.y - 1, z }))
    setCanInteract(!canInteract)
  }

  // Component return
  return(
    <mesh 
      position={[position.z, position.y, position.x]}
      castShadow
      onClick={handleClick}
      ref={ballRef}
    >
      <sphereGeometry args={[0.45, 32, 32]} />
      <meshStandardMaterial color='#fff' metalness={0.5} roughness={0.25} />
    </mesh>
  )
}