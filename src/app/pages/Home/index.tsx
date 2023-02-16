// Components
import ShadedCanvas from 'app/components/Elements/ShadedCanvas'
import DentalArch from 'app/components/Groups/DentalArch'

// Exported component
const Home = (): JSX.Element => {
  return (
    <ShadedCanvas>
      <DentalArch />
    </ShadedCanvas>
  )
}

export default Home