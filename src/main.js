import CardsModel from './model/cards_model.js';
import CardPresenter from './presenter/card-presenter.js';

const cardsContainer = document.querySelector('.card-list');


const cardsModel = new CardsModel();

//обновление модели
const viewActionHandler = (updateType,update) =>{
  cardsModel.updateCard(update);
};

const cardPresenter = new CardPresenter({cardsContainer,card:cardsModel.cards[0],onUpdateModel:viewActionHandler});

//Реакция на обновление
const updateModelHandler = (updateType,update) =>{
  cardPresenter.destroy();
  cardPresenter.init(update);

};
cardsModel.addObserver(updateModelHandler);

cardPresenter.init();
