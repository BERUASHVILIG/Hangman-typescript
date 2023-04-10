import HangmenDrawing from "./Components/HangmenDrawing";
import HangmenWord from "./Components/HangmenWord";
import Keyboard from "./Components/Keyboard";

import React, { useCallback, useEffect, useState } from "react";

import word from "./wordList.json";

import "./App.css";

const getWord = () => {
  return word[Math.floor(Math.random() * word.length)];
};

function App() {
  const [wordToGuess, setWordToGuess] = useState(getWord);

  console.log(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      if (!key.match(/^[a-z]$/)) return;
      event.preventDefault();
      addGuessedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key;
      if (key !== "Enter") return;
      event.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div className="main-container">
      <div style={{ fontSize: "2rem" }}>
        {isWinner && "winner"}
        {isLoser && "loser"}
      </div>
      <HangmenDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmenWord
        reveal={isLoser}
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
      />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isWinner || isLoser}
          inActiveLetters={incorrectLetters}
          activeLetters={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          addGuessedLetters={addGuessedLetters}
        />
      </div>
    </div>
  );
}

export default App;
