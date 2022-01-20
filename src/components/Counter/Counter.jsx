import React, { useState } from 'react'
import "./counter.css"

function Counter() {
    const [counter, setCounter] = useState(0)

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        if (counter >= 1) {
            setCounter(counter -1) 
        }
    }
    return (
        <div className='contador'>
            <h3>este es el contador</h3>
            <button className='boton' onClick={restar}>-</button>
            <span className='numeroContador'>{counter}</span>
            <button className='boton' onClick={sumar}>+</button>
        </div>
    )
}

export default Counter
