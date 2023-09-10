import React from "react";

export default function Row({ guess, currentGuess }) {
  if (guess) {
    return (
      <div className="row past">
        {guess.map((l, i) => {
          return (
            <div key={i} className={l.color}>
              {l.key}
            </div>
          );
        })}
      </div>
    );
  }
  if (currentGuess) {
    let letters = currentGuess.split("");
    return (
      <div className="row current">
        {letters.map((letter, index) => {
          return (
            <div key={index} className="filled">
              {letter}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, index) => (
          <div key={index} className="not-filled"></div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}
