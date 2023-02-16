// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from 'app/pages/Home'

// Exported components
const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
