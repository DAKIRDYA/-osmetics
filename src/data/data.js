import { nanoid } from 'nanoid';

const SAMPLES = [
  {
    productName: 'Увлажняющий мусс',
    typeSkin : 'Для нормальной кожи',
    description : 'Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.',
    composition : ['активные натуральные комплексы','витамины С, А, РР, В И Е ','солнцезащитные компоненты '],
    price : 2750,
    photo : './img/photo 1.png',
    isInBasket:false,
    id:nanoid()
  },
  {
    productName: 'Увлажняющая маска',
    typeSkin : 'Для нормальной кожи',
    description : 'Способствует удерживанию влаги в верхних слоях кожи.',
    composition : ['воски','минералы','масла'],
    price : 1650,
    photo : './img/photo 2.png',
    isInBasket:false,
    id:nanoid()
  },
  {
    productName: 'Гель для умывания',
    typeSkin : 'Для нормальной кожи',
    description : 'Интенсивно очищает, не повреждает защитный барьер кожи.',
    composition : ['минералы','витамины С, А, РР, В И Е ','солнцезащитные компоненты' ],
    price : 3500,
    photo : './img/photo 3.png',
    isInBasket:false,
    id:nanoid()

  },
  {
    productName: 'Подарочный набор №1',
    typeSkin : 'Для нормальной кожи',
    description : 'Набор, состоящий из увлажняющего крема и маски.',
    composition : ['воски','минералы','масла'],
    price : 4750,
    photo : './img/photo 4.png',
    isInBasket:false,
    id:nanoid()
  },
  {
    productName: 'Подарочный набор №5',
    typeSkin : 'Для нормальной кожи',
    description : 'Весь набор средств Invisible symphony, крем, маска, мусс и гель для умывания.',
    composition : ['воски','минералы','масла'],
    price : 7520,
    photo : './img/photo 5.png',
    isInBasket:false,
    id:nanoid()
  },

];

export {SAMPLES};
