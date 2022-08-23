import { replaceWithMenu } from "./menu.js";
import {replaceWithContact} from "./contact.js";
import { replaceWithHome } from "./home.js";
export function createNavBar() {
    const content = document.querySelector('.content');
    const nav = document.createElement('nav');
    nav.classList.add('navbar', 'navbar-expand-lg', 'bg-dark', 'navbar-dark');
    content.appendChild(nav);
    
    const div1 = document.createElement('div');
    div1.classList.add('container');
    nav.appendChild(div1);

    const a1 = document.createElement('a');
    a1.classList.add('navbar-brand');
    a1.setAttribute('href', '#')
    div1.appendChild(a1);

    const img1 = document.createElement('img');
    img1.setAttribute('src', '/img/dumpling.png');
    img1.setAttribute('width', '30');
    img1.setAttribute('height', '30');
    img1.classList.add('d-inline-block', 'align-text-top');
    a1.appendChild(img1);
    const text = document.createTextNode(`Charlotte's Dumplings`);
    a1.appendChild(text);

    const span1 = document.createElement('span');
    span1.classList.add('navbar-text');
    span1.textContent = `123 Fake St., Los Angeles, CA 90012`;
    div1.appendChild(span1);

    const span2 = document.createElement('span');
    span2.classList.add('navbar-text');
    span2.textContent = `(213) 321-5862`;
    div1.appendChild(span2);

    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');
    div1.appendChild(ul);

    const li1 = document.createElement('li');
    li1.classList.add('nav-item');
    ul.appendChild(li1);

    const a2 = document.createElement('a');
    a2.classList.add('nav-link', 'active');
    a2.setAttribute('href', '#');
    a2.setAttribute('id', 'home');
    li1.appendChild(a2);
    a2.textContent = 'HOME';

    const li2 = document.createElement('li');
    li2.classList.add('nav-item');
    ul.appendChild(li2);

    const a3 = document.createElement('a');
    a3.classList.add('nav-link', 'active');
    a3.setAttribute('href', '#')
    a3.setAttribute('id', 'menu');
    li2.appendChild(a3);
    a3.textContent = 'MENU';

    const li4 = document.createElement('li');
    li4.classList.add('nav-item');
    ul.appendChild(li4);

    const a5 = document.createElement('a');
    a5.classList.add('nav-link', 'active');
    a5.setAttribute('href', '#');
    a5.setAttribute('id', 'contact');
    li4.appendChild(a5);
    a5.textContent = 'CONTACT US';

    const menuBtn = document.querySelector('#menu');
    menuBtn.addEventListener('click', replaceWithMenu);

    const contact = document.querySelector('#contact');
    contact.addEventListener('click', replaceWithContact);

    const homeBtn = document.querySelector('#home');
    homeBtn.addEventListener('click', replaceWithHome);
}
