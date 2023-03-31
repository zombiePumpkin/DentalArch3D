// Dependencies
import { angleToRadians } from './converter'

// Types
type VectorProps = [x: number, y: number, z: number];
type PositionsProps = VectorProps[]
type RotationProps = VectorProps[]

// Teeth position set
const teethPosition: PositionsProps = [
  // Left side
  [-0.65, -1.2, -3.65],
  // Front side
  [0, -1.2, -4],
  // Right side
  [0.65, -1.2, -3.65]
]

// Teeth rotation set
const teethRotation: RotationProps = [
  // Left side
  [angleToRadians(90), 0, angleToRadians(-45)],
  // Front side
  [angleToRadians(90), 0, 0],
  // Right side
  [angleToRadians(90), 0, angleToRadians(45)]
]

// Superior jaw position set
const superiorJawPosition: PositionsProps = [
  // Closed
  [0, 0, 0],
  // Open
  [0, -0.6, -0.3]
]

// Superior jaw rotation set
const superiorJawRotation: RotationProps = [
  // Closed
  [0, 0, 0],
  // Open
  [angleToRadians(30), angleToRadians(0), angleToRadians(0)]
]

export {
  teethPosition,
  teethRotation,
  superiorJawPosition,
  superiorJawRotation
}
