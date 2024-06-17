import CardView from '../view/cards-view.js';
import { render,remove } from '../framework/render.js';


export default class CardPresenter {
  #cardView;
  #cardsContainer = null;
  #card = null;
  #handleBasketClick = null;

  constructor({cardsContainer,card,onUpdateModel}) {
    this.#cardsContainer = cardsContainer;
    this.#handleBasketClick = onUpdateModel;
    this.#card = card;
  }

  init(card = this.#card) {
    this.#card = card;
    this.#cardView = new CardView({
      card : this.#card,
      onBasketClick: this.#basketClickHandler,
    });
    render(this.#cardView, this.#cardsContainer);
  }

  #basketClickHandler = () => {
    this.#handleBasketClick('UPDATE',{...this.#card, isInBasket: !this.#card.isInBasket});
  };

  destroy(){
    remove(this.#cardView);
  }

}
