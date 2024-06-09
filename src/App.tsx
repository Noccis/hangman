import { useState } from 'react'
import words from "./wordList.json"
import { HangmanDrawing } from './components/HangmanDrawing'
import "./style/app.css"
import { HangmanWord } from './components/HangmanWord'
import { Keyboard } from './components/Keyboard'

function App() {
  // Create an empty array that generates random word from our wordslist
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  // Create an empty string array for the letters that player has guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  // Create an empty array for the incorrect letters
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )
  console.log(wordToGuess)
  return (
    <div id='main-content'>

      <div id='game-container'>
        Lose
        Win
        <HangmanDrawing numberOfGuesses = {incorrectLetters.length} />
        <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <div className='container-stretch'>
          <Keyboard />
        </div>
      </div>
    </div>
  )
}

export default App
