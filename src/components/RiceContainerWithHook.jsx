import React from 'react';
import { buyRice } from '../redux';
import { useSelector, useDispatch } from 'react-redux';


const RiceContainerWithHook = () => {
    const rice = useSelector(state => state.rice.rice);
    const dispatch = useDispatch();

  return (
    <div className="PastasContainerWithHook">
      <h1>Number of rice kg : { rice }</h1>
      <button onClick={() => dispatch( buyRice() )}>Buy rice</button>
    </div>
  );
}

export default RiceContainerWithHook