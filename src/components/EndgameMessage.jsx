import styled from "styled-components";

const EndgameMessage = ({ yourTotal, opponentTotal, isMobile }) => {
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
        return <StyledWin isMobile={isMobile}>You won!</StyledWin>;
      case "draw":
        return <StyledDraw isMobile={isMobile}>Draw!</StyledDraw>;
      case "lose":
        return <StyledLose isMobile={isMobile}>You lost!</StyledLose>;
    }
  };

  return <StyledMessage isMobile={isMobile}>{returnStyling()}</StyledMessage>;
};

const StyledMessage = styled.div`
  margin-bottom: 16px;
  ${(props) => props.isMobile && "width: 100%;"}
`;

const StyledDraw = styled.div`
  padding: ${(props) => (props.isMobile ? "35px" : "8px")};
  border: 1px solid Peru;
  border-radius: 3px;
  background-color: LightGoldenRodYellow;
  text-align: center;
`;

const StyledWin = styled.div`
  padding: ${(props) => (props.isMobile ? "35px" : "8px")};
  border: 1px solid darkGreen;
  border-radius: 3px;
  background-color: LightGreen;
  text-align: center;
`;

const StyledLose = styled.div`
  padding: ${(props) => (props.isMobile ? "35px" : "8px")};
  border: 1px solid Sienna;
  border-radius: 3px;
  background-color: LightPink;
  text-align: center;
`;

export default EndgameMessage;
