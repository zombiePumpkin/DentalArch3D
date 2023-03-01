// Layouts
import HomeLayout from 'app/components/Layouts/HomeLayout'

// Context
import ModelContextProvider from 'app/contexts/ModelContext'

// Exported component
const HomePage = (): JSX.Element => {
  return (
    <ModelContextProvider>
      <HomeLayout />
    </ModelContextProvider>
  )
}

// Exports
export default HomePage