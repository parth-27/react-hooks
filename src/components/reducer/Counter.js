import React, { useReducer } from 'react';

const initialState = 0;
const reducer = (currentState,action) => {
    switch (action) {
        case 'increament':
            return currentState + 1
        case 'decreament':
            return currentState - 1
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function Counter() {

    const [count,dispatch] =  useReducer(reducer, initialState);
    
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick = {() => dispatch('increament')}>Increament</button>
            <button onClick={() => dispatch('decreament')}>Decreament</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Counter
