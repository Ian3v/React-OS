import React, { useId, useState } from "react";
import '../estilos/tictac.css'


function RenderTablero({board,clickCasilla}){

    const newBoard = [...board]

    return(
        <div className="container-board">
            {
                newBoard.map( (element, index, allArray)=>{
                    return(
                        <button 
                            key={index}
                            className="button-square"
                            onClick={ ()=> clickCasilla(index) }
                            // onClick={ clickCasilla(index) }
                        >
                        {element}
                        </button>
                    )
                } )
            }
        </div>
    )
} 


export function Tictac(){

    const [board, setBoard] = useState(Array(9).fill(null)) // [x]
    const TURN = {
        X: '👽',
        O: '😋'
    }
    const [turno, setTurno] = useState( TURN.X )
    const [ganador, setGanador] = useState(null)
    
    console.log(turno);


    //Cada vez q hacemos click en algun boton del tablero, este renderiza solo una caja, y este se renderiza las n veces q tiene el tablero, ahora todas tienen la llamada a la funcion clickCasilla al escuchar el evento onClick, entonces a esa funcion es quien hace algo con solo la caja q se clickeo, pasandole index, entonce con eso sabemos quien sea clickado y trabajar con ello
    const clickCasilla = (index)=>{
        console.log(index);

        //si en el array board en la posicion del inde existe ya algo, entonces retirnan, no hacer nada de abajo, cambiar e estado de X o O
        if(board[index]) return
        if(ganador) return

        //Copias el tablero board
        const newBoard = [...board] //[x]

        //Al nuevo tablero le agregamos en la piscion del index, el turno, quien seria = TUNR.X como se incia incialmente
        newBoard[index] = turno
        
        //luego turn es X entonces debe cambiar su contrario y lo guardamos en newTurn quien tiene el contrario de lo q tiene turno actualmente
        const newTurn = turno === TURN.X ? TURN.O : TURN.X
        
        //entonces actulizamos el estado de turno por el newTurn, Osea, arriba "newBoard[index] = turno" en esa  posicion tiene X es el valor incial de turno, para luego despues turno cambiarlo inmendiatamente a O, turno tiene ahora O, listo para q se agregue en la siguente ejecucion de calickCasilla 
        setTurno(newTurn)

        //ahora  "newBoard[index] = turno" q ya tiene la X, actualizamos el board original, aki no afecta el O ya cambiado
        setBoard(newBoard)

        winner({newBoard})

        console.log(newBoard);
    }

    const resetear = ()=>{
        setBoard(Array(9).fill(null))
        setTurno(TURN.X)
        setGanador(null)
    }

    const winner = ({newBoard})=>{

        const newTablero = [...newBoard]

        console.log('Desde winner', newTablero);
        const combos= [
            [0, 1, 2], 
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8],
            [2, 4, 6],
        ]


        for(let i=0; i<combos.length; i++){

            const indexCombos = combos[i]
            console.log(indexCombos);
            // console.log('<<<',i,' : ',newTablero[indexCombos[0]]);
            // console.log(`|||||`, indexCombos[0]);
            // console.log(`|||||`, indexCombos[1]);

            if( 
                newTablero[indexCombos[0]] !== null &&
                newTablero[indexCombos[0]] === newTablero[indexCombos[1]] &&
                newTablero[indexCombos[0]]=== newTablero[indexCombos[2]]
            ){
                console.log('Tenemos Gandfro y es el combo:', indexCombos, ' y el gandor es ',newTablero[indexCombos[0]]);
                setTurno(newTablero[indexCombos[0]])
                setGanador(true)
                return
            }

        }
        
    }

    return (
        <div className="container main-container">
            <h2>3 en raia tictac toe</h2>

            <div className="container-render">
                <RenderTablero
                    board={board}
                    clickCasilla={clickCasilla}
                />
            </div>

            <button onClick={()=> resetear()}>Resetar</button>
            <div className="container container-ganador">
                <p>Ganador es : {turno}</p>
            </div>
            <div className={ganador ? 'display-win': 'no-display-win'}>
                <p>

                {turno}
                </p>
            </div>
        </div>

    )
           

}