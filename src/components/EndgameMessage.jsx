import styled from "styled-components";

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

  const returnStyling = () => {
    switch (result_type) {
      case "win":
        return <StyledWin>You won!</StyledWin>;
      case "draw":
        return <StyledDraw>Draw!</StyledDraw>;
      case "lose":
        return <StyledLose>You lost!</StyledLose>;
    }
  };

  return <StyledMessage>{returnStyling()}</StyledMessage>;
};

const StyledMessage = styled.div`
  margin-bottom: 16px;
`;

const StyledDraw = styled.div`
  padding: 8px;
  border: 1px solid Peru;
  border-radius: 3px;
  background-color: LightGoldenRodYellow;
`;

const StyledWin = styled.div`
  padding: 8px;
  border: 1px solid darkGreen;
  border-radius: 3px;
  background-color: LightGreen;
`;

const StyledLose = styled.div`
  padding: 8px;
  border: 1px solid Sienna;
  border-radius: 3px;
  background-color: LightPink;
`;

export default EndgameMessage;
