import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter:10
};
const reducer = (currentState, action) => {
    switch (action.type) {
        case 'increament':
            return { ...currentState,firstCounter:currentState.firstCounter + action.value}
        case 'decreament':
            return { ...currentState, firstCounter: currentState.firstCounter - action.value }
        case 'increament2':
            return { ...currentState, secondCounter: currentState.secondCounter + action.value }
        case 'decreament2':
            return { ...currentState, secondCounter: currentState.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return currentState
    }
}

function ComplexCounter() {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>First Count - {count.firstCounter}</div>
            <div>Second Count - {count.secondCounter}</div>
            <button onClick={() => dispatch({type:'increament',value:1})}>Increament 1</button>
            <button onClick={() => dispatch({ type: 'decreament',value:1 })}>Decreament 1</button>
            <button onClick={() => dispatch({ type: 'increament',value:5 })}>Increament 5</button>
            <button onClick={() => dispatch({ type: 'decreament', value: 5 })}>Decreament 5</button>
            <button onClick={() => dispatch({ type: 'increament2', value: 5 })}>Counter 2 Increament 5</button>
            <button onClick={() => dispatch({ type: 'decreament2', value: 5 })}>Counter 2 Decreament 5</button>
            <button onClick={() => dispatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ComplexCounter
