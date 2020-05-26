import { BUY_PASTAS, EAT_PASTAS } from './pastasType'

const initialState = {
  pastas: 4
}

export const pastasReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_PASTAS:
      return {
        ...state,
        pastas: state.pastas + 1
      }
    case EAT_PASTAS:
      return {
        ...state,
        pastas: state.pastas - 1
      }  
    default:
      return state
  }
}

 