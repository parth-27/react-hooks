import React,{useEffect, useState} from 'react'

export function HookIntervalCounter() {

    const [count, setCount] = useState(0)
    
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        
        // return for replicating componentWillUnmount
        return () => {
            clearInterval(interval)
        }
    }, [])   // [] empty dependencies array for replicating componentDidMount method
    // here count is not added to dependencies because we are taking care of count using prevState in setCount

    const tick = () => {
        setCount(prevState => prevState+1)
    }

    return (
        <div>
            {count}
        </div>
    )
}