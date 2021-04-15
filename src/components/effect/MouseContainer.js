import React, { useState, useEffect } from 'react';
import { HookMouseEffect as Mouse } from './HookMouseEffect';

export const MouseContainer = () => {

    const [display,setDisplay] = useState(true)

    return (
        <div>
            <button onClick={e => setDisplay(!display)}>Toggle Display</button>
            {display && <Mouse />}
        </div>
    )
}
