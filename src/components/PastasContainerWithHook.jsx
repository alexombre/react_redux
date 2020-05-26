import React from 'react';
import { eatPastas, buyPastas } from '../redux';
import { useSelector, useDispatch } from 'react-redux';


const PastasContainerWithHook = () => {
    const pastas = useSelector(state => state.pastas.pastas);
    const dispatch = useDispatch();

  return (
    <div className="PastasContainerWithHook">
      <h1>Number of pastas kg : { pastas }</h1>
      <button onClick={() => dispatch( buyPastas() )}>Buy pastas</button>
      <button onClick={() => dispatch( eatPastas() )}>Eat pastas</button>
    </div>
  );
}

export default PastasContainerWithHook