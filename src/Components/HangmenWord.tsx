import React from "react";

type HangmenWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

function HangmenWord({
  wordToGuess,
  guessedLetters,
  reveal = false,
}: HangmenWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "8px",
        fontSize: "4rem",
        marginTop: "190px",
      }}
    >
      {wordToGuess.split("").map((letter, index) => {
        return (
          <span key={index} style={{ borderBottom: "6px solid black" }}>
            <span
              style={{
                visibility:
                  guessedLetters.includes(letter) || reveal
                    ? "visible"
                    : "hidden",
                color:
                  !guessedLetters.includes(letter) && reveal ? "red" : "black",
              }}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </div>
  );
}

export default HangmenWord;
