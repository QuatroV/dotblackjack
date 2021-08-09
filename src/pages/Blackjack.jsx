import _ from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";

import EndgameMessage from "../components/EndgameMessage";

import fullDeck from "../constants/deck";

import StyledWrapper from "../components/StyledWrapper";
import CardList from "../components/CardList/CardList";
import CardListElement from "../components/CardList/CardListElement";
import MainTitle from "../components/MainTitle";
import Button from "../components/Button";

const Blackjack = () => {
  const [deck, setDeck] = useState([]);

  const takeCardfromDeck = () => {
    const taken_card = _.sample(deck);
    setDeck(deck.filter((card) => card !== taken_card));
    return taken_card;
  };

  const getTotal = (cards) => cards.reduce((sum, card) => sum + card.value, 0);

  const [opponentCards, setOpponentCards] = useState([]);
  const [yourCards, setYourCards] = useState([]);
  const [showHands, setShowHands] = useState(false);

  const addCardToYourPile = () => {
    const newCard = takeCardfromDeck();
    setYourCards(yourCards.concat(newCard));
  };

  const showCards = () => {
    setGameState("opponentTurn");
    setShowHands(true);
  };

  const [gameState, setGameState] = useState("startScreen");

  const yourTotal = getTotal(yourCards);
  const opponentTotal = getTotal(opponentCards);

  const isYouOverdrawn = yourTotal > 21;

  const startGame = () => {
    console.log("startGame");
    setGameState("init");
  };

  const initialDraw = () => {
    setGameState("yourTurn");
  };

  useEffect(() => {
    if (gameState === "init") {
      setDeck(fullDeck);
      console.log("init");
      setShowHands(false);
      setYourCards([]);
      setOpponentCards([]);
    } else if (gameState === "opponentTurn") {
      console.log("opponentTurn");
      let pile = [takeCardfromDeck(), takeCardfromDeck()];
      while (getTotal(pile) < 18) pile = [...pile, takeCardfromDeck()];
      setOpponentCards(pile);
    } else if (gameState === "yourTurn") {
      console.log("yourTurn");
      let pile = [takeCardfromDeck(), takeCardfromDeck()];
      while (getTotal(pile) < 18) pile = [...pile, takeCardfromDeck()];
      setYourCards(pile);
    }
  }, [gameState]);

  const [money, setMoney] = useState(100);

  const StartScreen = (
    <StyledGameScreen>
      <StyledText>
        Welcome to simple blackjack game! Press the "Start Game" button to
        begin.
      </StyledText>
      <Button isMobile={isMobile} onClick={startGame}>
        Start Game
      </Button>
    </StyledGameScreen>
  );

  const GameScreen = (
    <StyledGameScreen>
      Your total is {yourTotal}. Your cards are:
      <CardList isMobile={isMobile}>
        {yourCards.map((card) => (
          <CardListElement isMobile={isMobile} key={card.name}>
            <StyledImg
              src={card.icon}
              isMobile={isMobile}
              alt=""
              onClick={
                card.variableValue
                  ? () =>
                      setYourCards((cards) =>
                        cards.map((current_card) =>
                          current_card === card
                            ? { ...current_card, value: 10 }
                            : current_card
                        )
                      )
                  : null
              }
            />
            {!isMobile && card.name}
          </CardListElement>
        ))}
      </CardList>
      {showHands ? (
        <>
          Oppponent total is {opponentTotal}. Opponents cards are:
          <CardList isMobile={isMobile}>
            {opponentCards.map((card) => (
              <CardListElement isMobile={isMobile} key={card.name}>
                <StyledImg isMobile={isMobile} src={card.icon} alt="" /> <br />
                {!isMobile && card.name}
              </CardListElement>
            ))}
          </CardList>
          <EndgameMessage
            isMobile={isMobile}
            yourTotal={yourTotal}
            opponentTotal={opponentTotal}
          />
          <Button isMobile={isMobile} onClick={startGame}>
            New game
          </Button>
        </>
      ) : (
        <StyledButtonSection isMobile={isMobile}>
          {!isYouOverdrawn && (
            <Button isMobile={isMobile} onClick={addCardToYourPile}>
              Take another card
            </Button>
          )}
          <Button isMobile={isMobile} onClick={showCards}>
            Open hand
          </Button>
        </StyledButtonSection>
      )}
    </StyledGameScreen>
  );

  const SwitchBetweenScreens = () => {
    switch (gameState) {
      case "startScreen":
        return StartScreen;
      case "init":
      case "opponentTurn":
      case "yourTurn":
        return GameScreen;
    }
  };

  return (
    <StyledContainer>
      <MainTitle isMobile={isMobile}>dotBlackjack</MainTitle>
      <StyledWrapper isMobile={isMobile}>
        {SwitchBetweenScreens()}
      </StyledWrapper>
    </StyledContainer>
  );
};

const StyledImg = styled.img`
  ${(props) => props.isMobile && "height: 200px"}
  display: block;
`;

const StyledText = styled.p`
  margin-top: 0px;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledGameScreen = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledButtonSection = styled.div`
  ${(props) => props.isMobile && "width: 100%;"}
  display: flex;
  flex-direction: column;
`;

export default Blackjack;
