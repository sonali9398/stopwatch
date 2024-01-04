import React, { useState, useEffect, useRef } from 'react'

const StopWatch = () => {
    const[value, setValue] = useState(0);

    useEffect(() =>{
       handlTime();
        return () => clearInterval(id.current);
    }, []);

    let id = useRef();
   
    function handlTime(){
       id.current = setInterval(() =>{
            setValue((val) => val + 1)
        }, 1000);
    }

    function handleReset(){
        setValue(0);
    }

    return (
    <div>
        <div>{value}</div>
        <button onClick={() => handlTime()}>Start</button>
        <button onClick={() => clearInterval(id.current)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default StopWatch