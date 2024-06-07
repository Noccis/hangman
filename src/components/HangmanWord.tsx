import "../style/hangmanWord.css"

export function HangmanWord(){

    const word = "test"
    const guessedLetters = ["t", "e"]

    return(
        <div id="word-container">
            {word.split("").map((letter, index) => (
                <span 
                className="bottom-line"
                key={index}
                style={{
                    visibility: guessedLetters.includes(letter)
                    ? "visible"
                    : "hidden",
                }}>
                    {letter}
                    </span>
            ))}
        </div>
    )
}