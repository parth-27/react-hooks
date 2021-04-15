import React,{useState,useEffect} from 'react'

export const HookMouseEffect = () => {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = (e) => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePosition)
        
        // cleanup code
        // componentWillUnmount
        return () => {
            console.log("Component Unmounting code")
            window.removeEventListener('mousemove',logMousePosition)
        }

    }, [])   // this effect don't depend upon props and state so it don't need to be re render.
    // we can get componentDidMount using useEffect by passing empty [] array

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}
