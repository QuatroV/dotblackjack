const EndgameMessage = ({ yourTotal, opponentTotal }) => {
  const isYouOverdrawn = yourTotal > 21;
  const isOpponentOverdrawn = opponentTotal > 21;
  let result_type;
  if ((isYouOverdrawn && isOpponentOverdrawn) || yourTotal === opponentTotal)
    result_type = "draw";
  else if (
    isYouOverdrawn ||
    (yourTotal < opponentTotal && !isOpponentOverdrawn)
  )
    result_type = "lose";
  else result_type = "win";
  return <div className="endgameMessage">The result is {result_type}</div>;
};
export default EndgameMessage;
