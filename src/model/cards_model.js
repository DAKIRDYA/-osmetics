import Observable from '../framework/observable.js';
import {generateData} from '../utils/generate-data.js';
import {COUNT_CARDS} from '../const.js';

export default class CardsModel extends Observable{
  #cards = [];

  constructor() {
    super();
    this.#cards = generateData(COUNT_CARDS);
  }

  get cards() {
    return this.#cards;
  }

  init() {

  }


  //Метод обновления задачи

  updateCard(update) {
    const index = this.#cards.findIndex((card) => card.id === update.id);

    if (index === -1) {
      throw new Error('Can\'t update unexisting card');
    }
    try {
      this.#cards = [
        ...this.#cards.slice(0, index),
        update,
        ...this.#cards.slice(index + 1),
      ];
    } catch(err) {
      throw new Error('Can\'t update card');
    }
    this._notify('UPDATE',update);
  }
}
