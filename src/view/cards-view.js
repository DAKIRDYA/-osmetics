import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';


/**Наследуемый класс для отображения карточки
 * @constructor {Object} - карточка
*/
export default class CardView extends AbstractStatefulView{
  #card = null;
  #handleBasketClick = null;
  #isBasketAdded = (isBasket) => isBasket ? './img/checked-basket.png' : './img/basket.png';

  constructor ({card, onBasketClick}){
    super();
    this._setState(card);
    this.#handleBasketClick = onBasketClick;

    this.element.querySelector('.basket-button')
      .addEventListener('click', this.#basketClickHandler);
  }


  get template() {
    const {productName,typeSkin,description,composition,price,photo,isInBasket} = this._state;

    return `<li class="card-item">
    <div class ="card-item-container">
      <img class="card-item-image"  src="${photo}" width="290" height="245" alt="product foto">
      <div class = "type-basket-block">
          <p class="type-skin">${typeSkin}</p>
          <button class="basket-button" type="button">
              <img class="basket-img" src="${this.#isBasketAdded(isInBasket)}">
          </button>
      </div>
      <h2 class="product-name">${productName}</h2>
      <p class="product-description">${description}</p>
      <ul class="ingredients-list">
          <p class="ingredients-list-title">Состав:</p>
          ${composition.map((item) => this.#ingredientItemTemplate(item)).join('')}
      </ul>
      <div class="card-price-block">
          <span class="price-name">Цена</span>
          <span class="price">${price} ₽</span>
      </div>
    </div> 
  </li>`;
  }

  #ingredientItemTemplate(itemDescription){
    return `
    <li class="ingredient-item">
    <span class="ingredient-item-description">${itemDescription}</span>
    </li>
`;
  }

  #basketClickHandler = (evt) =>{
    evt.preventDefault();
    this.#handleBasketClick();
  };

}

