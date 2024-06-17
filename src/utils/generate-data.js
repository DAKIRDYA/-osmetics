import { SAMPLES } from '../data/data.js';


const generateData = function(count) {
  const cards = [];
  for (let i = 0; i < count; i++){
    cards.push(SAMPLES[Math.trunc(Math.random() * (SAMPLES.length))]);
  }
  return cards;
};

export {generateData};
