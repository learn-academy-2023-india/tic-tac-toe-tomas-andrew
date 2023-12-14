import React, { useState } from 'react';
import Square from './components/Square';
import calculateWinner from './components/CalculateWinner';
import './App.css';

const App = () => {
  const initialSquares = Array(9).fill(null)

  const [squares, setSquares] = useState(initialSquares)
  const [xIsNext, setXIsNext] = useState(true)

  const handleClick = (i) => {
    const newSquares = [...squares]

    if (newSquares[i] === null && !calculateWinner(newSquares)) {
      newSquares[i] = xIsNext ? '🎅🏻' : '🎄'
      setSquares(newSquares)
      setXIsNext(!xIsNext)

      if (isBoardFull(newSquares) && !calculateWinner(newSquares)) {
        alert('Cats game!')
        setSquares(initialSquares)
        setXIsNext(true)
      }
    }
  }

  const handleRestart = () => {
    setSquares(initialSquares)
    setXIsNext(true);
  }

  const isBoardFull = (board) => {
    return board.every((square) => square !== null)
  }

  return (
    <>
      <h1>❄️ Tic 🛷 Tac 🛷 Toe ❄️</h1>
      <Square squares={squares} handleClick={handleClick} />
      <div>
        {calculateWinner(squares) ? `Winner: ${calculateWinner(squares)}` : 'Next Player: ' + (xIsNext ? '🎅🏻' : '🎄')}
      </div>
      <button onClick={handleRestart}>Restart Game</button>
    </>
  )
}

export default App

