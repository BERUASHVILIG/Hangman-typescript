import React from "react";
import styles from "./Keboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeboardProps = {
  inActiveLetters: string[];
  activeLetters: string[];
  addGuessedLetters: (letter: string) => void;
  disabled?: boolean;
};

function Keyboard({
  inActiveLetters,
  activeLetters,
  addGuessedLetters,
  disabled = false,
}: KeboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px,1fr)",
        gap: "15px",
        marginTop: "30px",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeLetters.includes(key);
        const isInActive = inActiveLetters.includes(key);
        return (
          <button
            onClick={() => addGuessedLetters(key)}
            className={`${styles.btn}  ${isActive && styles.active}
            ${isInActive && styles.inActive}`}
            disabled={isInActive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
