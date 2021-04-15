import React, { useState,useEffect } from 'react';

export const HookEffect = () => {

    const [count, setCount] = useState(0);

    const [name, setName] = useState('');

    {/* Effect hook lets you perform sideEffects in functional components
          useEffect can be used instead of componentDidMount
          ,componentDidUpdate,componentWillUnmount.
        useEffect will executed after every render of the component
    */}
    // we can have multiple useEffect in one functional component.
    useEffect(() => {
        console.log("update");
        document.title = `Clicked ${count} times`;
    },[count])  // execute when count is updated

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={ () => setCount(prevState => prevState + 1)}>Click {count} times</button>
        </div>
    )
}
