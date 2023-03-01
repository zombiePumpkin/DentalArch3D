// Dependencies
import { useState, createContext } from "react"

// Types
import { HTMLContext } from 'types/Elements'

// Context values
import Values, { ModelValues, ContextModelValues } from './values'

// Context
const ModelContext = createContext<ContextModelValues>({
  model: Values, 
  dispatch: () => {}
})

// Exported component
const ModelContextProvider = ({ children, value = Values }: HTMLContext<ModelValues>): JSX.Element => {
  const [model, setModel] = useState(value)
  const dispatch = (key: string, value: boolean | number) => {
    setModel(state => ({ ...state, [key]: value }))
  }
  
  return (
    <ModelContext.Provider value={{ model, dispatch }}>
      { children }
    </ModelContext.Provider>
  )
} 

// Exports
export { ModelContext }
export default ModelContextProvider
