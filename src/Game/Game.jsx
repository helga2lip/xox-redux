import { useState } from 'react';
import { GameLayout } from './GameLayout'

const EMPTY_ARRAY = [
  '', '', '',
  '', '', '',
  '', '', '',
]

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

export function Game() {
  const [field, setField] = useState(EMPTY_ARRAY);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const onFieldClick = (index) => {
    if (!field[index] && !isGameEnded) {
      const newField = [...field]
      newField.splice(index, 1, currentPlayer)
      setField(newField)

      const hasWinner = WIN_PATTERNS.some((pattern) => {
        return pattern.every((position) => {
          return newField[position] === 'X'
        }) || pattern.every((position) => {
          return newField[position] === 'O'
        })
      })

      if (hasWinner) {
        setIsGameEnded(true)
      } else {
        const isFieldFull = newField.every((cell) => {
          return cell !== ''
        })
        if (isFieldFull) {
          setIsDraw(true)
        } else {
          if (currentPlayer === 'X') {
            setCurrentPlayer('O')
          } else { setCurrentPlayer('X') }
        }
      }
      console.log('hasWinner', hasWinner)
    }
  }

  const onResetClick = () => {
    setField(EMPTY_ARRAY)
    setCurrentPlayer('X')
    setIsGameEnded(false)
  }

  return (
    <GameLayout field={field} onFieldClick={onFieldClick} currentPlayer={currentPlayer} onResetClick={onResetClick}
      isGameEnded={isGameEnded} isDraw={isDraw} />

  )
}
