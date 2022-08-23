import { createNavBar } from "./nav.js";
import { footer } from "./footer.js";

export const replaceWithMenu = function() {
  const content = document.querySelector('.content');
  removeAllChildNodes(content);
  createNavBar();
  createMenu();
  footer();
  console.log('menu test');
}

export function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function createMenu() {
  const content = document.querySelector(".content");

  const menu = document.createElement('div');
  menu.classList.add('container-fluid', 'text-center', 'bg-dark', 'text-light');
  menu.setAttribute('id', 'title-container');
  content.appendChild(menu);

  const menuTitle = document.createElement('h1');
  menuTitle.classList.add('display-1');
  menuTitle.setAttribute('id', 'title');
  menuTitle.textContent = 'Menu';
  menu.appendChild(menuTitle);

  content.appendChild(menuItem('Appetizers', '../img/pexels-bich-tran-840216.jpg', 'fried spring rolls', 'Fried Spring Rolls',
  '../img/seaweed-salad.jpg', 'seaweed-salad', 'Seaweed Salad', 
  '../img/pexels-makafood-8982387.jpg', 'seafood miso soup', 'Seafood Miso Soup'));

  content.appendChild(menuItem('Main Course', '../img/soup-dumpling.jpg', 'soup dumplings', 'Xiao Long Bao (Soup Dumplings)',
  '../img/pexels-anna-tarazevich-7287723.jpg', 'fried dumplings', 'Fried Dumplings', 
  '../img/spicy-wanton.jpg', 'spicy wantons', 'Spicy Wantons'));

  content.appendChild(menuItem('Desserts', '../img/red-bean-bun.jpg', 'red bean buns', 'Red Bean Bun',
  '../img/taro-bun.jpg', 'taro buns', 'Taro Bun', 
  '../img/sesame-bun.jpg', 'sesame buns', 'Sesame Bun'));
}

function menuItem(headingName, src, alt, text, src2, alt2, text2, src3, alt3, text3) {
  const menuItemContainer = document.createElement('div');
  menuItemContainer.classList.add('container-fluid', 'bg-dark');

  const menuItemHeading = document.createElement('h1');
  menuItemHeading.classList.add('border-bottom', 'text-light');
  menuItemHeading.textContent = headingName;
  menuItemContainer.appendChild(menuItemHeading);

  const row = document.createElement('div');
  row.classList.add('row', 'text-center');
  menuItemContainer.appendChild(row);

  const col1 = document.createElement('div');
  col1.classList.add('col-8');
  row.appendChild(col1);

  col1.appendChild(createCard(src, alt, text));

  const col2 = document.createElement('div');
  col2.classList.add('col-4');
  row.appendChild(col2); 

  col2.appendChild(createCard(src2, alt2, text2));
  col2.appendChild(createCard(src3, alt3, text3));
  
  return menuItemContainer;
}

function createCard(src, alt, text) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardImg = document.createElement('img');
  cardImg.classList.add('card-img-top');
  cardImg.setAttribute('src', src);
  cardImg.setAttribute('alt', alt);
  card.appendChild(cardImg);

  const cardText = document.createElement('h2');
  cardText.classList.add('card-title');
  cardText.textContent = text;
  card.appendChild(cardText);

  return card;
}
