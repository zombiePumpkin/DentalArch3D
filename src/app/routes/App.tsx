// Dependencies
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Home from 'app/pages/Home'

// Exported components
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}
