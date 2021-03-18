import React, { useState } from 'react'


const App = () => {
    const newTime = new Date().toLocaleTimeString()
    const [time,setTime] = useState(newTime);
    const CurrentTime = () => {
        let newUpdateTime = new Date().toLocaleTimeString()
        setTime(newUpdateTime)
    }
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={CurrentTime}>Click</button>
        </div>
    )
}

export default App
