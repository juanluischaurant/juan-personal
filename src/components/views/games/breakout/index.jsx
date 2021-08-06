import React, { useEffect, useState } from 'react'
import Board from './Board'
import styled from 'styled-components'
import data from './data'

const GameContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default function Breakout() {
  const [gameStarted, setGameStarted] = useState(false)
  const [gameEnded, setGameEnded] = useState(false)

  const handleKeyDown = (e) => {
    if (e.code === 'Space' && !gameStarted) {
      setGameEnded(false)
      setGameStarted(true)
    }
  }

  const handleGameEnd = () => {
    setGameEnded(true)
    setGameStarted(false)
    data.playerObject.livesRemaining = 3
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])
  return (
    <GameContainer>
      {gameEnded ? (
        <StartScreen>
          <h1>Game ended Amigo</h1>
          <p>Press Spacebar to Start</p>
        </StartScreen>
      ) : gameStarted ? (
        <Board setGameEnded={handleGameEnd} />
      ) : (
        <StartScreen>
          <h1>Break the Heck Out </h1>
          <p>Press Spacebar to Start</p>
        </StartScreen>
      )}
    </GameContainer>
  )
}

const StartScreen = styled.div`
  font-weight: 600;
  font-family: 'Press Start 2P', cursive;
  color: white;

  height: 500px;
  width: 800px;
  background: #134959;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
