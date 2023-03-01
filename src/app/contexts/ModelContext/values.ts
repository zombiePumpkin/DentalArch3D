export type ModelValues = {
  isMouthOpen: boolean,
  mouthSide: number
}

const Values: ModelValues = {
  isMouthOpen: false,
  mouthSide: 1
}

export type ContextModelValues = {
  model: ModelValues,
  dispatch: (key: string, value: boolean | number) => void
}

export default Values