export function createHome() {
    const content = document.querySelector(".content");
    const div1 = document.createElement('div');
    div1.classList.add('container-fluid', 'text-center', 'bg-dark', 'text-light');
    div1.setAttribute('id', 'title-container');
    content.appendChild(div1);

    const title = document.createElement('h1');
    title.classList.add('display-1');
    title.setAttribute('id', 'title');
    title.textContent = `Charlotte's Dumplings`;
    div1.appendChild(title);

    const div2 = document.createElement('div');
    div2.classList.add('container-fluid', 'bg-dark', 'text-light');
    content.appendChild(div2);

    const divRow1 = document.createElement('div');
    divRow1.classList.add('row');
    div2.appendChild(divRow1);

    const col1 = document.createElement('div');
    col1.classList.add('col');
    divRow1.appendChild(col1);

    const img1 = document.createElement('img');
    img1.classList.add('img-fluid', 'rounded')
    img1.setAttribute('src', '/img/pexels-shotpot-7705671.jpg');
    img1.setAttribute('alt', 'dumplings on plate');
    col1.appendChild(img1);

    const col2 = document.createElement('div');
    col2.classList.add('col', 'd-flex', 'align-items-center');
    divRow1.appendChild(col2);

    const textContainer = document.createElement('div');
    textContainer.classList.add('container', 'border', 'border-white', 'rounded');
    col2.appendChild(textContainer);

    const text1 = document.createElement('h2');
    text1.textContent = 'Authentic Chinese Dumplings';
    textContainer.appendChild(text1);

    const text2 = document.createElement('h4');
    text2.textContent = `Charlotte's Dumplings offers a variety of dumplings, including its world famous Xiao Long Boa (Soup Dumplings) and Sheng Jian Boa (Pan-Fried Soup Dumplings) that will always leave you wishing you had more!`;
    textContainer.appendChild(text2);

    const divRow2 = document.createElement('div');
    divRow2.classList.add('row');
    div2.appendChild(divRow2);

    const col3 = document.createElement('div');
    col3.classList.add('col', 'd-flex','align-items-center');
    divRow2.appendChild(col3);

    const textContainer2 = document.createElement('div');
    textContainer2.classList.add('container', 'border', 'border-white', 'rounded');
    col3.appendChild(textContainer2);

    const text3 = document.createElement('h2');
    text3.textContent = 'Superb Taste';
    textContainer2.appendChild(text3);

    const text4 = document.createElement('h4');
    text4.textContent = `Wow, these sure are tasty. Yep, tastiest dumpling around. Better come get some right now! Hurry!!!`;
    textContainer2.appendChild(text4);

    const col4 = document.createElement('div');
    col4.classList.add('col');
    divRow2.appendChild(col4);

    const img2 = document.createElement('img');
    img2.classList.add('img-fluid', 'rounded')
    img2.setAttribute('src', '/img/pexels-rodnae-productions-6646233.jpg');
    img2.setAttribute('alt', 'dumplings being picked up');
    col4.appendChild(img2);
}

import { createNavBar } from "./nav.js";
export function createHomePage() {
    createNavBar();
    createHome();
}

/* <div class="container-fluid text-center bg-dark text-light" id="title-container">
        <h1 class="display-1" id="title">Charlotte's Dumplings</h1>
    </div>

    <div class="container-fluid bg-dark text-light">
        <div class="row">
            <div class="col">
                <img src="/img/pexels-shotpot-7705671.jpg" alt="dumplings on plate" class="img-fluid rounded">
            </div>
            <div class="col d-flex align-items-center">
                <div class="container border border-white rounded">
                    <h2>Authentic Chinese Dumplings</h2>
                    <h4>Charlotte's Dumplings offers a variety of dumplings, including its world famous Xiao Long Boa (Soup Dumplings) and Sheng Jian Boa (Pan-Fried Soup Dumplings) that will always leave you wishing you had more!</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col d-flex align-items-center">
                <div class="container border border-white rounded">
                    <h2>Superb Taste</h2>
                    <h4>Wow, these sure are tasty. Yep, tastiest dumpling around. Better come get some right now! Hurry!!!</h3>
                </div>
            </div>
            <div class="col">
                <img src="/img/pexels-rodnae-productions-6646233.jpg" alt="dumplings being picked up" class="img-fluid rounded">
            </div>
        </div>
    </div>`
    newDiv.innerHTML = homePageHtml;
    content.appendChild(newDiv);
    console.log('Home page function is loading.'); */