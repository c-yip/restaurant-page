console.log('Test to see if if everything is working!')
import { createHomePage } from "./home.js";
import { replaceWithMenu } from "./menu.js";

createHomePage();

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', replaceWithMenu);
