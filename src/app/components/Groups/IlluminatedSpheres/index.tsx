// Components
import EventSphere from 'app/components/Elements/EventSphere'
import TextShape from 'app/components/Elements/TextShape'

// Helpers
import { angleToRadians } from 'helpers/converter'

// Exported component
const IlluminatedSpheres = (): JSX.Element => {
  return (
    <>
      {/* Spheres */}
      {/* Front side */}
      <EventSphere x={-1.25} y={.65} z={0}/>
      <EventSphere x={0} y={.65} z={0} />
      <EventSphere x={1.25} y={.65} z={0} />

      {/* Text shape back side */}
      <TextShape />

      {/* Back side */}
      <EventSphere x={-1.25} y={.65} z={1.25} />
      <EventSphere x={0} y={.65} z={1.25} />
      <EventSphere x={1.25} y={.65} z={1.25} />

      {/* Text shape front side */}
      <TextShape />

      {/* Ground */}
      <mesh rotation={[angleToRadians(90), 0, 0]} receiveShadow>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color='#bdbdbd' metalness={0.8} roughness={0.25} />
      </mesh>

      {/* Directional Light */}
      <spotLight
        castShadow
        args={['#fff', 1.5, 7, angleToRadians(45), 0.4]}
        position={[-3, 1, 0]}
      />
    </>
  )
}

export default IlluminatedSpheres
