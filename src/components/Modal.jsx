import React from "react";

export default function Modal({ isCorrect, turn, solution }) {
  return (
    <>
      <div className="modal">
        {isCorrect && (
          <div>
            <h1>You Win!</h1>
            <p className="solution">{solution}</p>
            <p>You found the solution in {turn} guesses!</p>
            <button
              className="play-again-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        )}
        {!isCorrect && (
          <div>
            <h1>You Lose!</h1>
            <p className="solution">{solution}</p>
            <p>Better luck next time!</p>
            <button
              className="play-again-button"
              onClick={() => {
                window.location.reload();
              }}
            >
              PLAY AGAIN
            </button>
          </div>
        )}
      </div>
    </>
  );
}
