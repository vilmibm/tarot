class CardDB {
  keywords(cardName) {
    return this.cards[cardName].keywords || [];
  }

  constructor() {
    this.cards = {
      // Major arcana
      "the fool": {
        "arcana": "major",
        "index": 0,
        "keywords": ["folly", "mania", "extravagance", "intoxication", "delirium", "frenzy"]
      },
      "the magician": {
        "arcana": "major",
        "index": 1,
        "keywords": ["skill", "diplomacy", "pain", "loss", "disaster", "self-confidence", "will"]
      },
      "the high priestess": {
        "arcana": "major",
        "index": 2,
        "keywords": ["secrets", "mysteries", "lady of interest", "unknown futures"]
      },
      "the empress": {
        "arcana": "major",
        "index": 3,
        "keywords": ["TODO", "TODO"]
      },
      "the emperor": {
        "arcana": "major",
        "index": 4,
        "keywords": ["TODO", "TODO"]
      },
      "the hierophant": {
        "arcana": "major",
        "index": 5,
        "keywords": ["TODO", "TODO"]
      },
      "the lovers": {
        "arcana": "major",
        "index": 6,
        "keywords": ["TODO", "TODO"]
      },
      "the chariot": {
        "arcana": "major",
        "index": 7,
        "keywords": ["TODO", "TODO"]
      },
      "strength": {
        "arcana": "major",
        "index": 8,
        "keywords": ["TODO", "TODO"]
      },
      "the hermit": {
        "arcana": "major",
        "index": 9, 
        "keywords": ["TODO", "TODO"]
      },
      "wheel of fortune": {
        "arcana": "major",
        "index": 10,
        "keywords": ["TODO", "TODO"]
      },
      "strength": {
        "arcana": "major",
        "index": 11,
        "keywords": ["TODO", "TODO"]
      },
      "the hanged man": {
        "arcana": "major",
        "index": 12,
        "keywords": ["TODO", "TODO"]
      },
      "death": {
        "arcana": "major",
        "index": 13,
        "keywords": ["TODO", "TODO"]
      },
      "temperance": {
        "arcana": "major",
        "index": 14,
        "keywords": ["TODO", "TODO"]
      },
      "the devil": {
        "arcana": "major",
        "index": 15,
        "keywords": ["TODO", "TODO"]
      },
      "the tower": {
        "arcana": "major",
        "index": 16,
        "keywords": ["TODO", "TODO"]
      },
      "the star": {
        "arcana": "major",
        "index": 17,
        "keywords": ["TODO", "TODO"]
      },
      "the moon": {
        "arcana": "major",
        "index": 18,
        "keywords": ["TODO", "TODO"]
      },
      "the sun": {
        "arcana": "major",
        "index": 19, 
        "keywords": ["TODO", "TODO"]
      },
      "judgement": {
        "arcana": "major",
        "index": 20, 
        "keywords": ["TODO", "TODO"]
      },
      "the world": {
        "arcana": "major",
        "index": 21,
        "keywords": ["TODO", "TODO"]
      },
  
      // Minor arcana
      "ace of cups": {
        "arcana": "minor",
        "index": 1,
        "suit": "cups"
      },
      "ii of cups": {
        "arcana": "minor",
        "index": 2,
        "suit": "cups"
      },
      "iii of cups": {
        "arcana": "minor",
        "index": 3,
        "suit": "cups"
      },
      "iv of cups": {
        "arcana": "minor",
        "index": 4,
        "suit": "cups"
      },
      "v of cups": {
        "arcana": "minor",
        "index": 5,
        "suit": "cups"
      },
      "vi of cups": {
        "arcana": "minor",
        "index": 6,
        "suit": "cups"
      },
      "vii of cups": {
        "arcana": "minor",
        "index": 7,
        "suit": "cups"
      },
      "viii of cups": {
        "arcana": "minor",
        "index": 8,
        "suit": "cups"
      },
      "ix of cups": {
        "arcana": "minor",
        "index": 9,
        "suit": "cups"
      },
      "x of cups": {
        "arcana": "minor",
        "index": 10,
        "suit": "cups"
      },
      "page of cups": {
        "arcana": "minor",
        "index": 11,
        "suit": "cups"
      },
      "knight of cups": {
        "arcana": "minor",
        "index": 12,
        "suit": "cups"
      },
      "queen of cups": {
        "arcana": "minor",
        "index": 13,
        "suit": "cups"
      },
      "king of cups": {
        "arcana": "minor",
        "index": 14,
        "suit": "cups"
      },
  
      "ace of wands": {
        "arcana": "minor",
        "index": 1,
        "suit": "wands"
      },
      "ii of wands": {
        "arcana": "minor",
        "index": 2,
        "suit": "wands"
      },
      "iii of wands": {
        "arcana": "minor",
        "index": 3,
        "suit": "wands"
      },
      "iv of wands": {
        "arcana": "minor",
        "index": 4,
        "suit": "wands"
      },
      "v of wands": {
        "arcana": "minor",
        "index": 5,
        "suit": "wands"
      },
      "vi of wands": {
        "arcana": "minor",
        "index": 6,
        "suit": "wands"
      },
      "vii of wands": {
        "arcana": "minor",
        "index": 7,
        "suit": "wands"
      },
      "viii of wands": {
        "arcana": "minor",
        "index": 8,
        "suit": "wands"
      },
      "ix of wands": {
        "arcana": "minor",
        "index": 9,
        "suit": "wands"
      },
      "x of wands": {
        "arcana": "minor",
        "index": 10,
        "suit": "wands"
      },
      "page of wands": {
        "arcana": "minor",
        "index": 11,
        "suit": "wands"
      },
      "knight of wands": {
        "arcana": "minor",
        "index": 12,
        "suit": "wands"
      },
      "queen of wands": {
        "arcana": "minor",
        "index": 13,
        "suit": "wands"
      },
      "king of wands": {
        "arcana": "minor",
        "index": 14,
        "suit": "wands"
      },
  
      "ace of swords": {
        "arcana": "minor",
        "index": 1,
        "suit": "swords"
      },
      "ii of swords": {
        "arcana": "minor",
        "index": 2,
        "suit": "swords"
      },
      "iii of swords": {
        "arcana": "minor",
        "index": 3,
        "suit": "swords"
      },
      "iv of swords": {
        "arcana": "minor",
        "index": 4,
        "suit": "swords"
      },
      "v of swords": {
        "arcana": "minor",
        "index": 5,
        "suit": "swords"
      },
      "vi of swords": {
        "arcana": "minor",
        "index": 6,
        "suit": "swords"
      },
      "vii of swords": {
        "arcana": "minor",
        "index": 7,
        "suit": "swords"
      },
      "viii of swords": {
        "arcana": "minor",
        "index": 8,
        "suit": "swords"
      },
      "ix of swords": {
        "arcana": "minor",
        "index": 9,
        "suit": "swords"
      },
      "x of swords": {
        "arcana": "minor",
        "index": 10,
        "suit": "swords"
      },
      "page of swords": {
        "arcana": "minor",
        "index": 11,
        "suit": "swords"
      },
      "knight of swords": {
        "arcana": "minor",
        "index": 12,
        "suit": "swords"
      },
      "queen of swords": {
        "arcana": "minor",
        "index": 13,
        "suit": "swords"
      },
      "king of swords": {
        "arcana": "minor",
        "index": 14,
        "suit": "swords"
      },
  
      "ace of pentacles": {
        "arcana": "minor",
        "index": 1,
        "suit": "pentacles"
      },
      "ii of pentacles": {
        "arcana": "minor",
        "index": 2,
        "suit": "pentacles"
      },
      "iii of pentacles": {
        "arcana": "minor",
        "index": 3,
        "suit": "pentacles"
      },
      "iv of pentacles": {
        "arcana": "minor",
        "index": 4,
        "suit": "pentacles"
      },
      "v of pentacles": {
        "arcana": "minor",
        "index": 5,
        "suit": "pentacles"
      },
      "vi of pentacles": {
        "arcana": "minor",
        "index": 6,
        "suit": "pentacles"
      },
      "vii of pentacles": {
        "arcana": "minor",
        "index": 7,
        "suit": "pentacles"
      },
      "viii of pentacles": {
        "arcana": "minor",
        "index": 8,
        "suit": "pentacles"
      },
      "ix of pentacles": {
        "arcana": "minor",
        "index": 9,
        "suit": "pentacles"
      },
      "x of pentacles": {
        "arcana": "minor",
        "index": 10,
        "suit": "pentacles"
      },
      "page of pentacles": {
        "arcana": "minor",
        "index": 11,
        "suit": "pentacles"
      },
      "knight of pentacles": {
        "arcana": "minor",
        "index": 12,
        "suit": "pentacles"
      },
      "queen of pentacles": {
        "arcana": "minor",
        "index": 13,
        "suit": "pentacles"
      },
      "king of pentacles": {
        "arcana": "minor",
        "index": 14,
        "suit": "pentacles"
      },
    }
  }
}

export default CardDB;
