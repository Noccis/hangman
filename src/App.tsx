import { useState } from 'react'
import words from "./wordList.json"
import { HangmanDrawing } from './components/HangmanDrawing'
import "./style/app.css"
import { HangmanWord } from './components/HangmanWord'

function App() {
  // Create an empty array that generates random word from our wordslist
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  // Create an empty string array for the letters that player has guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(wordToGuess)
  return (
    <div id='main-content'>

      <div id='game-container'>
        Lose
        Win
        <HangmanDrawing />
        <HangmanWord />
      </div>
    </div>
  )
}

export default App
