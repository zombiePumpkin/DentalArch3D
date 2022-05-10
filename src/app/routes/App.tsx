import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DentalArch from '../pages/DentalArch'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DentalArch />} />
      </Routes>
    </Router>
  )
}
