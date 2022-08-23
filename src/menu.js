
export const replaceWithMenu = function() {
  const content = document.querySelector('.content');
  removeAllChildNodes(content);
  createMenu();
  console.log('menu test');
}

function removeAllChildNodes(parent) {
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
  menu.setAttribute('id', 'title');
  menuTitle.textContent = 'Menu';
  menu.appendChild(menuTitle);

  content.appendChild(menuItem('Appetizers'));
}

function menuItem(headingName) {
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

  col1.appendChild(createCard('/img/pexels-bich-tran-840216.jpg', 'fried spring rolls', 'Fried Spring Rolls'));
  
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
  cardImg.classList.add('card-title');
  cardImg.textContent = text;
  card.appendChild(cardText);

  return card;
}

/*  <div class="container-fluid text-center bg-dark text-light" id="title-container">
        <h1 class="display-1" id="title">Menu</h1>
    </div>

<div class="container-fluid bg-dark">
    <h1 class="border-bottom text-light">Appetizers</h1>

    <div class="row text-center">
      <div class="col-8">
          <div class="card">
            <img class="card-img-top" src="/img/pexels-bich-tran-840216.jpg" alt="fried spring rolls">
            <h2 class="card-title">Fried Spring Rolls</h2>
          </div>
      </div>
      <div class="col-4">
          <div class="card">
          <img class="card-img-top" src="/img/seaweed-salad.jpg" alt="seaweed-salad">
          <h2 class="card-title">Seaweed Salad</h2>
          </div>
          <div class="card">
          <img class="card-img-top" src="/img/pexels-makafood-8982387.jpg" alt="seafood miso soup">
          <h2 class="card-title">Seafood Miso Soup</h2>
          </div>
        </div>
    </div>

<div class="container-fluid">
  <h1 class="border-bottom text-light">Main Course</h1>

  <div class="row text-center">
    <div class="col-8">
      <div class="card">
        <img class="card-img-top" src="/img/soup-dumpling.jpg" alt="soup dumplings">
        <h2 class="card-title">Xiao Long Bao (Soup Dumplings)</h2>
      </div>
    </div>
    <div class="col-4">
      <div class="card">
        <img class="card-img-top" src="/img/pexels-anna-tarazevich-7287723.jpg" alt="fried dumplings">
        <h2 class="card-title">Fried Dumplings</h2>
      </div>
      <div class="card">
        <img class="card-img-top" src="/img/spicy-wanton.jpg" alt="spicy wantons">
        <h2 class="card-title">Spicy Wantons</h2>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <h1 class="border-bottom text-light">Desserts</h1>

    <div class="row text-center">
      <div class="col-8">
        <div class="card">
          <img class="card-img-top" src="/img/red-bean-bun.jpg" alt="red bean buns">
          <h2 class="card-title">Red Bean Bun</h2>
        </div>
      </div>
      <div class="col-4">
        <div class="card">
          <img class="card-img-top" src="/img/taro-bun.jpg" alt="taro buns">
          <h2 class="card-title">Taro Bun</h2>
        </div>
        <div class="card">
          <img class="card-img-top" src="/img/sesame-bun.jpg" alt="sesame buns">
          <h2 class="card-title">Sesame Bun</h2>
        </div>
      </div>
    </div> */