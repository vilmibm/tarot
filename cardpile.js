class CardPile {
  constructor() {
    this.cards = new Set();
  }

  add(cardName) {
    this.cards.add(cardName);
  }

  has(cardName) {
    return this.cards.has(cardName);
  }

  get size() {
    return this.cards.size;
  }

  drawRandom() {
    const size = this.cards.size
    if (size === 0) {
      return null;
    }
    const index = Math.floor(Math.random() * Math.floor(size));
    let i = 0;
    let cardName = "";
    for (let card of this.cards) {
      if (i === index) {
        cardName = card;
        break
      }
      i++;
    }
    this.cards.delete(cardName);

    return cardName;
  }
}

export default CardPile;
