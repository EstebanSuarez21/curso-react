import React from 'react';
import { useState } from "react";
import "./counter.css"

function Counter({increment, decrement, cantidad}) {

    return (
        <div className='contador'>
            <button className='boton' onClick={decrement}>-</button>
            <span className='numeroContador'>{cantidad}</span>
            <button className='boton' onClick={increment}>+</button>
        </div>
    )
}


export default Counter;
