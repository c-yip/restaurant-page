console.log('Test to see if if everything is working!')
import { createHomePage } from "./home.js";
import { createMenu } from "./menu.js";

createHomePage();

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', createMenu);
