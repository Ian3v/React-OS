import React, { useEffect, useState } from "react";

export function UseEffectHook(){

    const [cont, setCont] = useState(1)

    const incrementar = ()=>{

        setCont(cont + 1)
    }
    console.log(cont);


    
    const [chisme, setChisme] = useState()

    useEffect( ()=>{

        setChisme(cont)

    }, [])


    console.log(chisme);

    return(
        <div className="container">
            <h2>UseEffect() Sin dependecia</h2>

            <button onClick={incrementar}>{cont}</button>
            <br></br>
            <button>{chisme}</button>
        </div>
    )
}