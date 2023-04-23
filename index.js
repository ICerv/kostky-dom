import { Dice } from "./Dice/index.js";

const roll = () => {
  return Math.floor(Math.random() * 6) + 1;
};

console.log('funguju!');

const diceRow = document.querySelector('#dice-row');
diceRow.append(Dice({ side: 2 }));
diceRow.append(Dice({ side: 1 }));
diceRow.append(Dice({ side: 4 }));
diceRow.append(Dice({ side: 5 }));
diceRow.append(Dice({ side: 6 }));
