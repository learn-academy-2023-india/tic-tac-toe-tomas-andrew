import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(false)
  const [oIsNext, setOIsNext] = useState(true)

const handleClick = (i) => {

if(xIsNext){
  squares[i] = "x"
  setSquares([...squares]) 
} else {
  squares[i] = "o"
  setSquares([...squares])
}
if(oIsNext){
  squares[i] = "o"
  setSquares([...squares])
} else {
  squares[i] = "x"
  setSquares([...squares])
}}

const switchTurn = (i) => {
  let newPlayer;
  if(oIsNext)
  {return newPlayer = "o"}
  else {
   return newPlayer = "x"
  } 
  
}

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <Square squares={squares} onClick={switchTurn()}handleClick={handleClick}/>
    </>
  )
}

export default App