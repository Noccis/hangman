import { useState } from 'react'
import words from "./wordList.json"
import { HangmanDrawing } from './components/HangmanDrawing'

function App() {
  // Create an empty array that generates random word from our wordslist
  const [wordToGuess, setWordToGuess] = useState(()=>{
    return words[Math.floor(Math.random() * words.length)]
  })
  // Create an empty string array for the letters that player has guessed
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  console.log(wordToGuess)
  return (
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}>

      <div style={{ 
        fontSize: "2rem",
        textAlign: "center"
        }}>
        Lose
        Win
        <HangmanDrawing />
      </div>
    </div>
  )
}

export default App
