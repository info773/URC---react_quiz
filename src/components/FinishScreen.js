function FinishScreen({
  points,
  numPoints,
  highscore,
  dispatch,
  secondsRemaining,
}) {
  const percentage = (points / numPoints) * 100;

  return (
    <>
      <p className="result">
        You scored <strong>{points} points</strong> out of {numPoints} points (
        {Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        {secondsRemaining < 0 ? "0" : secondsRemaining} seconds left
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
