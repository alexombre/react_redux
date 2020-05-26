import { BUY_RICE } from './riceType'

const initialState = {
  rice: 4
}

export const riceReducer = (state = initialState, action) => {
  switch(action.type) {
    case BUY_RICE:
      return {
        ...state,
        rice: state.rice + 1
      }
    default:
      return state
  }
}