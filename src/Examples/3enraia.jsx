import React, { useEffect, useState } from "react";
import "../estilos/3enraia.css";
import chalk from "chalk";
import confetti from "canvas-confetti";

const Tablero = ({ board, clickCasilla, winner }) => {
  const newTablero = [...board];
 
  return (
    <div className="container-board">
      {newTablero.map((element, index, allArray) => {
        return (
          <button
            key={index}
            className="casilla"
            onClick={() => {
              clickCasilla(index, winner);
            }}
          >{board[index]}</button>
        );
      })}
    </div>
  );
};



export function TresenRaia() {
  
  
  //ESTAODS
  const [board, setBoard] = useState(Array(9).fill(null));
  const TURN = {
    X: "X",
    O: "O",
  };
  const [newTurn, setNewTurn] = useState(TURN.X)
  const [ganador, setGanador] = useState(false)



  const restart = (setBoard) => {
    // setBoard(1);
    setBoard(Array(9).fill(null))
    setGanador(false)
    setNewTurn(TURN.X)
  };


  const clickCasilla = (index, winner) => {
    // console.log("desde ClickCasillaFunc ", index);
    
    // Cuando la casilla este llena, no dejar de cambiar
    if(board[index]) return
    if(ganador) return

    const newTablero = [...board]
    
    setBoard(newTablero)

    // setNewTurn(turno)
    newTablero[index] = newTurn

    const turno = newTurn === TURN.X ? TURN.O : TURN.X;
    setNewTurn(turno)
    winner(newTablero)

    // console.log('> board',board);
    // console.log('newTurn > ',turno);

  };


  const winner = (board)=>{
    
    console.log('Desde winner',board);

    const combosWiner =[
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for(var i=0; i<combosWiner.length; i++){
      const primerCombo = combosWiner[i]
      
      if( board[primerCombo[0]] !== null && board[primerCombo[0]]=== board[primerCombo[1]] && board[primerCombo[0]] === board[primerCombo[2]]){
        console.log('Tenemos Gandor y es',board[ primerCombo[0]], );
        //Actualzimos ultima vez quien fue Ganador
        setNewTurn(board[ primerCombo[0]])
        confetti()
      return  setGanador(true)
      }

    }

  }

  const modal = ()=>{

    return(
      <div>
        <h2>Gandro es {}</h2>
      </div>
    )
  }

  return (
    <div className="container board">
      <h2>3 en raia</h2>

      <div className="container-board">
        
        <Tablero 
          board={board} 
          clickCasilla={clickCasilla} 
          winner={winner} 
        />

      </div>

      <button className="button-restar" onClick={() => restart(setBoard)}>Restar</button>

      <div className="container">
        <p>El turno es de : {newTurn}</p>   

        {
          ganador ? <p>Si hay ganador es {newTurn} </p> : <p>No ganador</p>
          
        }
        
      </div>
    

    </div>
  );
}
