import { BUY_PASTAS, EAT_PASTAS } from './pastasType'

const buyPastas = () => {
  return {
    type: BUY_PASTAS
  }
}

const eatPastas = () => {
  return {
    type: EAT_PASTAS
  }
}

export { buyPastas, eatPastas }