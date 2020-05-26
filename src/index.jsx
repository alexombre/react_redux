import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './redux/store';
import RiceContainerWithHook from './components/RiceContainerWithHook'
import PastasContainerWithHook from './components/PastasContainerWithHook'

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <PastasContainerWithHook />
        <RiceContainerWithHook />
      </div>
    </Provider>
  )
}


ReactDOM.render(<App />, document.querySelector("#root"));