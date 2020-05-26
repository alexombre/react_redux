import { createStore, combineReducers } from 'redux';
import { pastasReducer } from './pastas/pastasReducer';
import { riceReducer } from './rice/riceReducer';


const rootReducer = combineReducers({
  pastas: pastasReducer,
  rice: riceReducer
})

let store = createStore(rootReducer); 
store.subscribe(() => console.log(store.getState()));

export default store;
