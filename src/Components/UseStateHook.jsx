import React from "react";
import { useState } from "react";
export function UseStateHook() {


  const [contador, setContador] = useState(0);
  

  //! Primero se ejecuta al crear el Rrendirzado
  console.log("1. Antes de incrementar (inicio del renderizado):", contador);


  /* -------------------------------------------------------------------------- */
  const incrementarContador = () => {       
    // !
    console.log(
      "2. Antes de actualizar el contador (antes de setContador):",      contador
    );

    setContador(contador + 1);

    // !
    console.log(
      "3. Después de actualizar el contador (después de setContador, pero valor antiguo):",
      contador
    );
  };
/* -------------------------------------------------------------------------- */

  //! EPrimero se ejecuta al crear el Rrendirzado
  console.log(
    "4. Después de la función de incrementar (al final del renderizado):",  contador
  );

  

  return (
    <div className="container">
      <h1>UseState</h1>
      <button onClick={incrementarContador}>{contador}</button>
    </div>
  );
}

// 1 y 4 -> 0 , se imprimen primero, porq renderiza todo y no se ha tocado el boton
// Depesu de tocar el boton se jecuta 2, 3 -> 0    1 y 4 ->  1


