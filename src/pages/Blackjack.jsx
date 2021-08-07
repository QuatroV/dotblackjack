import _, { set } from "lodash";
import { useEffect, useState } from "react";

import EndgameMessage from "../components/EndgameMessage";

import fullDeck from "../constants/deck";

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

  const StartScreen = (
    <>
      <button onClick={startGame}>Start Game</button>
    </>
  );

  const GameScreen = (
    <>
      {console.log(gameState)}
      {showHands && (
        <div className="opponentTotal">
          Oppponent total is {opponentTotal}. Opponents cards are:
          <ul>
            {opponentCards.map((card) => (
              <li key={card.name}>
                {" "}
                {card.name}
                <br /> <img src={card.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="yourTotal">
        Your total is {yourTotal}. Your cards are:
        <ul>
          {yourCards.map((card) => (
            <li key={card.name}>
              {" "}
              {card.name} <br />{" "}
              <img
                src={card.icon}
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
            </li>
          ))}
        </ul>
        {showHands ? (
          <>
            <EndgameMessage
              yourTotal={yourTotal}
              opponentTotal={opponentTotal}
            />
            <button onClick={startGame}>New game</button>
          </>
        ) : (
          <div className="buttonSection">
            {!isYouOverdrawn && (
              <button onClick={addCardToYourPile}>Take another card</button>
            )}
            <button onClick={showCards}>Open hand</button>
          </div>
        )}
      </div>
    </>
  );

  switch (gameState) {
    case "startScreen":
      return StartScreen;
    case "init":
    case "opponentTurn":
    case "yourTurn":
      return GameScreen;
  }
};

export default Blackjack;
