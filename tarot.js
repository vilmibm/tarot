import cardDB from './cards.js';

// TODO reset state button

class Tarot {
  constructor() {
    this.cardDB = cardDB();
    this.deck = new CardPile();
    for (const cardName in this.cardDB) {
      this.deck.add(cardName);
    }
    this.table = new CardPile();

    const deckElem = document.querySelector("#deck");
    const tableElem = document.querySelector("#table");
    const infoElem = document.querySelector("#info");
    const resetElem = document.querySelector("#reset");

    // TODO bring those top level functions in as methods
    this.renderers = [
      new Renderer(
        deckElem,
        deckRender(this.deck)),

      new Renderer(
        tableElem,
        tableRender(this, this.table)),
      
      new Renderer(
        infoElem,
        infoRender(tableElem, deckElem))
    ];

    // handlers
    // TODO make it feel similar to the renderers? or just have a general way to list out events
    // that should trigger a render
    tableElem.addEventListener("mouseenter", this.render.bind(this));
    tableElem.addEventListener("mouseleave", this.render.bind(this));
    deckElem.addEventListener("click", this.drawCard.bind(this));
    resetElem.addEventListener("click", this.reset.bind(this));
  }

  reset() {
    let card = this.table.drawRandom();
    while (card != null) {
      this.deck.add(card);
      card = this.table.drawRandom();
    }

    this.render();
  }

  drawCard() {
    let cardName = this.deck.drawRandom();
    if (cardName === null) {
      this.render();
      return;
    }

    this.table.add(cardName);
    this.render();
  }

  render() {
    for (const renderer of this.renderers) {
      renderer.render();
    }
  }
}

function infoRender(tableElem) {
  return function(elem) {
    const cardElem = tableElem.querySelector(".card:hover");
    if (cardElem == null) {
      elem.innerHTML = "";
      return
    }
    elem.innerHTML = cardElem.querySelector("span").innerHTML;
  }
}

function tableRender(tarot, table) {
  return function(elem) {
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

      let bp = document.querySelector(".card.blueprint");
      let cardElem = bp.cloneNode(true);
      cardElem.classList.remove("blueprint");
      cardElem.setAttribute("data-cardName", cardName)
      cardElem.setAttribute("style", "float:left; width: 150px; height: 250px; border: 1px solid pink;");
      cardElem.querySelector("span").innerHTML = cardName;
      cardElem.addEventListener("mouseenter", tarot.render.bind(tarot));
      elem.append(cardElem);
    }
  }
}

function deckRender(deck) {
  return function(elem) {
    const width = deck.size;
    elem.setAttribute("style", `float:left; height: 250px; width: 150px; border-left: 1px solid white; border-top: 1px solid white; border-bottom: ${width}px solid white; border-right: ${width}px solid white`);
  }
}

function deckClick(deckElem, deck) {
  return function() {
    console.log(deckElem, deck);
  }
}

class Renderer {
  constructor(element, renderFn) {
    this.element = element;
    this.renderFn = renderFn;
  }

  render() {
    this.renderFn(this.element);
  }
}

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

export default Tarot;
