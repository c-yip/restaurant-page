
export const createMenu = function() {
    const content = document.querySelector('.content');
    removeAllChildNodes(content);
    console.log('menu test');
}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
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