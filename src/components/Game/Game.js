import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";
import GuessResults from "./GuessResults";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuesses(tentativeGuess) {
    const nextGuesses = [...guesses, tentativeGuess];
    return setGuesses(nextGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuesses={handleSubmitGuesses} />
    </>
  );
}

export default Game;
