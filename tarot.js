import CardDB from './carddb.js';
import CardPile from './cardpile.js';

class Tarot {
  constructor() {
    this.cardDB = new CardDB();
    this.deck = new CardPile();
    for (const cardName in this.cardDB.cards) {
      this.deck.add(cardName);
    }
    this.table = new CardPile();

    const deckElem = document.querySelector("#deck");
    const tableElem = document.querySelector("#table");
    const infoElem = document.querySelector("#info");
    const resetElem = document.querySelector("#reset");

    this.renderers = [
        this.deckRender(deckElem, this.deck),
        this.tableRender(tableElem, this.table),
        this.infoRender(infoElem, tableElem)
    ];

    tableElem.addEventListener("mouseenter", this.render.bind(this));
    tableElem.addEventListener("mouseleave", this.render.bind(this));
    deckElem.addEventListener("click", this.drawCard.bind(this));
    resetElem.addEventListener("click", this.reset.bind(this));

    this.render();
  }

  reset() {
    let card = this.table.random();
    while (card != null) {
      this.deck.add(card);
      card = this.table.random();
    }

    this.render();
  }

  drawCard() {
    const cardName = this.deck.random();
    if (cardName === null) {
      this.render();
      return;
    }

    this.table.add(cardName);
    this.render();
  }

  render() {
    for (const r of this.renderers) {
      r();
    }
  }

  deckRender(elem, deck) {
    return () => {
      const width = deck.size / 5;
      elem.setAttribute("style", `float:left; height: 250px; width: 150px; border-left: 1px solid white; border-top: 1px solid white; border-bottom: ${width}px solid white; border-right: ${width}px solid white`);
    }
  }

  infoRender(elem, tableElem) {
    return () => {
      const cardElem = tableElem.querySelector(".card:hover");
      if (cardElem == null) {
        elem.innerHTML = "";
        return
      }
      const cardName = cardElem.getAttribute('data-cardName');
      const keywords = this.cardDB.keywords(cardName);
      elem.innerHTML = "";
      elem.innerHTML += `<h2>${cardName}</h2>`;
      elem.innerHTML += keywords.join(", ");
    }
  }

  tableRender(elem, table) {
    return () => {
      const cardsOut = elem.querySelectorAll('.card');
      for (let cardElem of cardsOut) {
        if (!table.has(cardElem.getAttribute('data-cardName'))) {
          cardElem.remove();
        }
      }

      for (let cardName of table.cards) {
        const found = elem.querySelector(`[data-cardName="${cardName}"]`);
        if (found != null) {
          continue;
        }

        const bp = document.querySelector(".card.blueprint");
        const cardElem = bp.cloneNode(true);
        cardElem.classList.remove("blueprint");
        cardElem.setAttribute("data-cardName", cardName)
        cardElem.setAttribute("style", "float:left; margin-right: 20px; width: 150px; height: 250px; border: 1px solid pink;");
        cardElem.querySelector("span").innerHTML = cardName;
        cardElem.addEventListener("mouseenter", this.render.bind(this));
        elem.append(cardElem);
      }
    }
  }
}

export default Tarot;
