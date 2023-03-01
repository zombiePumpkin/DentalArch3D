// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from 'app/pages/HomePage'

// Exported components
const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
