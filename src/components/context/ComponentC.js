import React from 'react';
import ComponentE from './ComponentE';

function ComponentC() {
    return (
        //Context provides a way to pass data through the component tree
        //without passing props down manually at every level.
        <div>
            <ComponentE />
        </div>
    )
}

export default ComponentC
