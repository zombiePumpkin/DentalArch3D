// Dependencies
import React from 'react'
import ReactDOM from 'react-dom/client'

// Components
import App from 'app/routes/App'

// Styles
import 'styles.scss'

// Exported component
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
