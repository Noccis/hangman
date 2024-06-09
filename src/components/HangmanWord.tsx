import "../style/hangmanWord.css"

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}
export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {

    return (
        <div id="word-container">
            {wordToGuess.split("").map((letter, index) => (
                <span
                    className="bottom-line"
                    key={index}
                >
                    <span style={{
                        visibility: guessedLetters.includes(letter)
                            ? "visible"
                            : "hidden",
                    }}>
                        {letter}
                    </span>

                </span>
            ))}
        </div>
    )
}