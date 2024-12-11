import react, { useEffect, useState } from "react";

export function LocalStorage(){

    const [nombre, setNombre] = useState(
        ()=>( window.localStorage.getItem('name') ?? 'null')
    )


    const leerNombreFunc = (e) =>{
        const name = e.target.value;
        console.log(name);
        setNombre(name)

    }   

    useEffect( ()=>{
        window.localStorage.setItem('name',nombre)

    }, [nombre])


    const deleteLocalStorage = ()=>{
        console.log(localStorage.getItem('name'));
        localStorage.clear()
    }
    return(
        <div className="container">
        <h2>Local Storage</h2>

        <input onChange={leerNombreFunc} type="text" placeholder="nombre"></input>
        <p>Nombre capturado por el estado : {nombre}</p>
        <p>Nombre capturado por localStorage : {nombre}</p>

        <button onClick={deleteLocalStorage}>Borrar Local Storage</button>
        </div>       
    )
}