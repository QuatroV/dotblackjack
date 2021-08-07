const deck = [
  {
    name: "6 Clubs",
    value: 6,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/40px-Playing_card_club_6.svg.png",
  },
  {
    name: "7 Clubs",
    value: 7,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/40px-Playing_card_club_7.svg.png",
  },
  {
    name: "8 Clubs",
    value: 8,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/40px-Playing_card_club_8.svg.png",
  },
  {
    name: "9 Clubs",
    value: 9,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/40px-Playing_card_club_9.svg.png",
  },
  {
    name: "10 Clubs",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/40px-Playing_card_club_10.svg.png",
  },
  {
    name: "Jack of Clubs",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Playing_card_club_J.svg/40px-Playing_card_club_J.svg.png",
  },
  {
    name: "Queen of Clubs",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Playing_card_club_Q.svg/40px-Playing_card_club_Q.svg.png",
  },
  {
    name: "King of Clubs",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Playing_card_club_K.svg/40px-Playing_card_club_K.svg.png",
  },
  {
    name: "Ace of Clubs",
    value: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Playing_card_club_A.svg/40px-Playing_card_club_A.svg.png",
    variableValue: true,
  },
  {
    name: "6 Diamonds",
    value: 6,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Playing_card_diamond_6.svg/40px-Playing_card_diamond_6.svg.png",
  },
  {
    name: "7 Diamonds",
    value: 7,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Playing_card_diamond_7.svg/40px-Playing_card_diamond_7.svg.png",
  },
  {
    name: "8 Diamonds",
    value: 8,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_8.svg/40px-Playing_card_diamond_8.svg.png",
  },
  {
    name: "9 Diamonds",
    value: 9,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Playing_card_diamond_9.svg/40px-Playing_card_diamond_9.svg.png",
  },
  {
    name: "10 Diamonds",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Playing_card_diamond_10.svg/40px-Playing_card_diamond_10.svg.png",
  },
  {
    name: "Jack of Diamonds",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Playing_card_diamond_J.svg/40px-Playing_card_diamond_J.svg.png",
  },
  {
    name: "Queen of Diamonds",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Playing_card_diamond_Q.svg/40px-Playing_card_diamond_Q.svg.png",
  },
  {
    name: "King of Diamonds",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Playing_card_diamond_K.svg/40px-Playing_card_diamond_K.svg.png",
  },
  {
    name: "Ace of Diamonds",
    value: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Playing_card_diamond_A.svg/40px-Playing_card_diamond_A.svg.png",
    variableValue: true,
  },
  {
    name: "6 Hearts",
    value: 6,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Playing_card_heart_6.svg/40px-Playing_card_heart_6.svg.png",
  },
  {
    name: "7 Hearts",
    value: 7,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Playing_card_heart_7.svg/40px-Playing_card_heart_7.svg.png",
  },
  {
    name: "8 Hearts",
    value: 8,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_8.svg/40px-Playing_card_heart_8.svg.png",
  },
  {
    name: "9 Hearts",
    value: 9,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_heart_9.svg/40px-Playing_card_heart_9.svg.png",
  },
  {
    name: "10 Hearts",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/40px-Playing_card_heart_10.svg.png",
  },
  {
    name: "Jack of Hearts",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Playing_card_heart_J.svg/40px-Playing_card_heart_J.svg.png",
  },
  {
    name: "Queen of Hearts",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Playing_card_heart_Q.svg/40px-Playing_card_heart_Q.svg.png",
  },
  {
    name: "King of Hearts",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Playing_card_heart_K.svg/40px-Playing_card_heart_K.svg.png",
  },
  {
    name: "Ace of Hearts",
    value: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/40px-Playing_card_heart_A.svg.png",
    variableValue: true,
  },
  {
    name: "6 Spades",
    value: 6,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Playing_card_spade_6.svg/40px-Playing_card_spade_6.svg.png",
  },
  {
    name: "7 Spades",
    value: 7,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/40px-Playing_card_spade_7.svg.png",
  },
  {
    name: "8 Spades",
    value: 8,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/40px-Playing_card_spade_8.svg.png",
  },
  {
    name: "9 Spades",
    value: 9,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Playing_card_spade_9.svg/40px-Playing_card_spade_9.svg.png",
  },
  {
    name: "10 Spades",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Playing_card_spade_10.svg/40px-Playing_card_spade_10.svg.png",
  },
  {
    name: "Jack of Spades",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Playing_card_spade_J.svg/40px-Playing_card_spade_J.svg.png",
  },
  {
    name: "Queen of Spades",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Playing_card_spade_Q.svg/40px-Playing_card_spade_Q.svg.png",
  },
  {
    name: "King of Spades",
    value: 10,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Playing_card_spade_K.svg/40px-Playing_card_spade_K.svg.png",
  },
  {
    name: "Ace of Spades",
    value: 1,
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Playing_card_spade_A.svg/40px-Playing_card_spade_A.svg.png",
    variableValue: true,
  },
];

export default deck;
