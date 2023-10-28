const GuessResults = ({ guesses }) => {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <p className="guess" key={crypto.randomUUID()}>
          {guess}
        </p>
      ))}
    </div>
  );
};

export default GuessResults;