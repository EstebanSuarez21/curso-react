import React from 'react';
import { useState } from "react";
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
            <button className='boton' onClick={restar}>-</button>
            <span className='numeroContador'>{counter}</span>
            <button className='boton' onClick={sumar}>+</button>
        </div>
    )
}


export default Counter;
