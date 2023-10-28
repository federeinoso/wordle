import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "./GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");

  function handleSubmit(label) {
    console.log({ guess });
    return setGuess(label);
  }

  return <GuessInput guess={guess} handleSubmit={handleSubmit} />;
}

export default Game;
