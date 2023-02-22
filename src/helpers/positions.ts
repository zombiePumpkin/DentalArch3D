// Dependencies
import { angleToRadians } from './converter'

// Types
type VectorProps = [x: number, y: number, z: number];
type TeethPositionsProps = VectorProps[]
type TeethRotationProps = VectorProps[]

// Teeth position set
const teethPosition: TeethPositionsProps = [
  // Left side
  [-0.65, -1.1, -3.65],
  // Front side
  [0, -1.1, -4],
  // Right side
  [0.65, -1.1, -3.65]
]

// Teeth rotation set
const teethRotation: TeethRotationProps = [
  // Left side
  [angleToRadians(90), 0, angleToRadians(-45)],
  // Front side
  [angleToRadians(90), 0, 0],
  // Right side
  [angleToRadians(90), 0, angleToRadians(45)]
]

export { teethPosition, teethRotation }
