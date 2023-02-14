// Components
import ShadedCanvas from 'app/components/Elements/ShadedCanvas'
import IlluminatedSpheres from 'app/components/Groups/IlluminatedSpheres'
import DentalArch from 'app/components/Groups/DentalArch'

// Exported component
export default function Home():JSX.Element {
  return (
    <ShadedCanvas>
      <IlluminatedSpheres />
      {/* <DentalArch /> */}
    </ShadedCanvas>
  )
}