import React, { useEffect } from "react";

import { useRef,useState } from "react";

export function UseRefHook() {
    
  const contadorRef = useRef(0);
  const [contador, setContador] = useState(0)


  const incrementar = () => {
      contadorRef.current += 1; // Esto no provocará un re-render
      console.log("Contador Ref:", contadorRef.current);
    };
    

    const incrementarUseState = ()=>{
        setContador(contador + 1); // Esto provocará un re-render
        console.log("Contador State:", contador);

  }
  
  console.log("Fuera de func Contador:", contadorRef.current); // Mostramos el valor sin re-renderizar

//   useEffect( ()=>{
//     console.log('Effecto de useRef', contadorRef);
//   }, [contadorRef.current])

  return (
    <div className="container">
      <p>Contador (State): {contador}</p>
      <p>Contador (Ref): {contadorRef.current}</p>
      <button onClick={incrementar}>Incrementar REF</button>
      <button onClick={incrementarUseState}>Incrementar STATE</button>
    </div>
  );
}
