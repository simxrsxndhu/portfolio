import React, { useEffect, useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [isVsComputer, setIsVsComputer] = useState(false);
  const [difficulty, setDifficulty] = useState('medium'); // 'easy', 'medium', 'hard'

  useEffect(() => {
    document.title = "Game | Simar";
    window.scrollTo(0, 0);
  }, []);

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const minimax = (squares, depth, isMaximizing) => {
    const winner = calculateWinner(squares);
    if (winner === 'O') return 10 - depth;
    if (winner === 'X') return depth - 10;
    if (squares.every(square => square !== null)) return 0;

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = 'O';
          const score = minimax(squares, depth + 1, false);
          squares[i] = null;
          bestScore = Math.max(score, bestScore);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < squares.length; i++) {
        if (!squares[i]) {
          squares[i] = 'X';
          const score = minimax(squares, depth + 1, true);
          squares[i] = null;
          bestScore = Math.min(score, bestScore);
        }
      }
      return bestScore;
    }
  };

  const makeRandomMove = (squares) => {
    const availableMoves = squares
      .map((square, index) => square === null ? index : null)
      .filter(index => index !== null);
    
    if (availableMoves.length === 0) return null;
    return availableMoves[Math.floor(Math.random() * availableMoves.length)];
  };

  const findBestMove = (squares) => {
    // For easy difficulty, sometimes make a random move
    if (difficulty === 'easy' && Math.random() < 0.7) {
      return makeRandomMove(squares);
    }
    // For medium difficulty, sometimes make a random move
    if (difficulty === 'medium' && Math.random() < 0.3) {
      return makeRandomMove(squares);
    }

    let bestScore = -Infinity;
    let bestMove = null;

    for (let i = 0; i < squares.length; i++) {
      if (!squares[i]) {
        squares[i] = 'O';
        const score = minimax(squares, 0, false);
        squares[i] = null;
        if (score > bestScore) {
          bestScore = score;
          bestMove = i;
        }
      }
    }
    return bestMove;
  };

  const handleClick = (index) => {
    if (board[index] || winner || (!xIsNext && isVsComputer)) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);

    const newWinner = calculateWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      return;
    }

    if (isVsComputer && !newWinner && !board.every(square => square)) {
      setXIsNext(false);
      // Computer's turn
      setTimeout(() => {
        const computerBoard = [...newBoard];
        const bestMove = findBestMove(computerBoard);
        
        if (bestMove !== null) {
          computerBoard[bestMove] = 'O';
          setBoard(computerBoard);
          const computerWinner = calculateWinner(computerBoard);
          if (computerWinner) {
            setWinner(computerWinner);
          }
          setXIsNext(true);
        }
      }, 500);
    } else if (!isVsComputer) {
      setXIsNext(!xIsNext);
      newBoard[index] = xIsNext ? 'X' : 'O';
      setBoard(newBoard);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const toggleGameMode = () => {
    setIsVsComputer(!isVsComputer);
    resetGame();
  };

  const status = winner
    ? `Winner: ${winner}`
    : board.every((square) => square)
    ? "Game Draw!"
    : isVsComputer
    ? `${xIsNext ? "Your turn" : "Computer thinking..."}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div className="min-h-screen">
      <h1 className="text-8xl text-left font-bold text-gray-800 dark:text-[var(--color-text-light)] mb-8">
        /game
      </h1>
      
      <div className="flex flex-col items-center gap-6 pt-10">
        <div className="flex gap-4 mb-4">
          <button
            onClick={toggleGameMode}
            className={`px-6 py-2 cursor-pointer rounded-lg transition-colors ${
              !isVsComputer
                ? "bg-[var(--color-primary)] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            vs Friend 👥
          </button>
          <button
            onClick={toggleGameMode}
            className={`px-6 py-2 cursor-pointer rounded-lg transition-colors ${
              isVsComputer
                ? "bg-[var(--color-primary)] text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            }`}
          >
            vs AI 🤖
          </button>
        </div>

        {isVsComputer && (
          <div className="flex gap-3 mb-4">
            <button
              onClick={() => setDifficulty('easy')}
              className={`px-4 cursor-pointer py-1.5 rounded-lg text-sm transition-colors ${
                difficulty === 'easy'
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Easy
            </button>
            <button
              onClick={() => setDifficulty('medium')}
              className={`px-4 cursor-pointer py-1.5 rounded-lg text-sm transition-colors ${
                difficulty === 'medium'
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Medium
            </button>
            <button
              onClick={() => setDifficulty('hard')}
              className={`px-4 cursor-pointer py-1.5 rounded-lg text-sm transition-colors ${
                difficulty === 'hard'
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
            >
              Hard
            </button>
          </div>
        )}

        <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          {status}
        </div>
        
        <div className="grid grid-cols-3 gap-2 w-[300px] mb-6">
          {board.map((value, index) => (
            <button
              key={index}
              className={`h-24 w-24 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center justify-center text-6xl font-black rounded-lg transition-colors ${
                value === 'X' 
                  ? 'text-[var(--color-primary)] transform hover:scale-105'
                  : value === 'O'
                  ? 'text-gray-800 dark:text-gray-200 transform hover:scale-105'
                  : ''
              }`}
              onClick={() => handleClick(index)}
              disabled={!xIsNext && isVsComputer}
              style={{
                textShadow: value ? '2px 2px 4px rgba(0,0,0,0.1)' : 'none',
                fontFamily: "'Bricolage Grotesque', sans-serif",
              }}
            >
              {value}
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="px-6 cursor-pointer py-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white rounded-lg transition-colors"
        >
          Reset Game
        </button>

        <p className="max-w-2xl mt-8 text-gray-700 dark:text-gray-300 leading-relaxed">
          This is my implementation of the classic{" "}
          <a href="https://en.wikipedia.org/wiki/Tic-tac-toe" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">
            Tic-tac-toe
          </a>{" "}
          game. The computer opponent uses the{" "}
          <a href="https://en.wikipedia.org/wiki/Minimax" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">
            Minimax algorithm
          </a>{" "}
          to make smart moves, with adjustable difficulty levels. Try your luck against the AI or challenge a friend! 🎮✨
        </p>
      </div>
    </div>
  );
}
