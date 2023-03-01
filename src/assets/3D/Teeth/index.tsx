// Dependencies
import { forwardRef } from 'react'

// Three JS
import { Group } from 'three'
import { useGLTF } from '@react-three/drei'

// Components
import SuperiorJaw from './SuperiorJaw'
import SuperiorGum from './SuperiorGum'
import SuperiorArch from './SuperiorArch'
import InferiorJaw from './InferiorJaw'
import InferiorGum from './InferiorGum'
import InferiorArch from './InferiorArch'

// Exported component
const Teeth = forwardRef((props: any, ref: React.Ref<Group>) => {
  return (
    <group {...props} dispose={null} ref={ref}>
      {/* Mandibula superior */}
      <SuperiorJaw />
      {/* Gengiva superior */}
      <SuperiorGum />
      {/* Arcada superior */}
      <SuperiorArch />
      {/* Mandibula inferior */}
      <InferiorJaw />
      {/* Gengiva inferior */}
      <InferiorGum />
      {/* Arcada inferior */}
      <InferiorArch />
    </group>
  )
})

useGLTF.preload('/models/teeth/teeth.glb')

export default Teeth;
