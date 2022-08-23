import {removeAllChildNodes} from "./menu.js";
import { createNavBar } from "./nav.js";
import { footer } from "./footer.js";


export const replaceWithContact = function() {
    const content = document.querySelector('.content');
    removeAllChildNodes(content);
    createNavBar();
    createContact();
    footer();
    console.log('contact test');
}

const createContact = function() {
    const content = document.querySelector('.content');

    const container = document.createElement('div');
    container.classList.add('container-flex', 'bg-dark', 'text-light')
    content.appendChild(container);

    const titleContainer = document.createElement('div');
    titleContainer.classList.add('p-5', 'row', 'text-center');
    container.appendChild(titleContainer);

    const titleCol = document.createElement('div');
    titleCol.classList.add('col');
    titleContainer.appendChild(titleCol);

    const title = document.createElement('h1');
    title.classList.add('display-1');
    title.setAttribute('id', 'title')
    title.textContent = 'Contact Us'
    titleCol.appendChild(title);

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('container', 'bg-secondary', 'p-5', 'rounded');
    container.appendChild(contentContainer);

    const row = document.createElement('div');
    row.classList.add('row');
    contentContainer.appendChild(row);

    const listColumn = document.createElement('div');
    listColumn.classList.add('col', 'd-flex', 'justify-content-center', 'align-items-center');
    row.appendChild(listColumn);

    const ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush', 'gap-3');
    listColumn.appendChild(ul);

    ul.appendChild(createListItem('123 Fake St., Los Angeles, CA 90012'));
    ul.appendChild(createListItem('Monday - Friday: 10:00am - 8:00pm'));
    ul.appendChild(createListItem('Saturday - Sunday: 11:00am - 9:00pm'));
    ul.appendChild(createListItem('(213) 321-5862'));

    const formColumn = document.createElement('div');
    formColumn.classList.add('col');
    row.appendChild(formColumn);

    const form = document.createElement('form');
    form.classList.add('d-flex', 'justify-content-center', 'flex-column', 'gap-1');
    formColumn.appendChild(form);

    form.appendChild(createLabel('inputName', 'Name'));
    form.appendChild(createInput('text'));
    form.appendChild(createLabel('inputEmail', 'Email'));
    form.appendChild(createInput('email'));
    form.appendChild(createLabel('inputMessage', 'Message'));

    const textArea = document.createElement('textarea');
    textArea.classList.add('form-control');
    textArea.setAttribute('type', 'text');
    form.appendChild(textArea);

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-primary');
    button.setAttribute('type', 'submit');
    button.textContent = 'Submit';
    form.appendChild(button);
}

function createListItem(text) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'rounded', 'h5');
    li.textContent = text;
    return li;
}

function createLabel(name, text) {
    const label = document.createElement('label');
    label.classList.add('form-label', 'h5');
    label.setAttribute('for', name);
    label.textContent = text;
    return label;
}

function createInput(type) {
    const input = document.createElement('input');
    input.classList.add('form-control');
    input.setAttribute('type', type);
    return input;
}

{/* <div class="container-flex bg-dark text-light">
    <div class="p-5 row text-center">
        <div class="col">
            <h1 class="display-1" id="title">Contact us</h1>
        </div>
    </div>

    <div class="container bg-secondary p-5 rounded">
        <div class="row">
            <div class="col d-flex justify-content-center align-items-center">
                <ul class="list-group list-group-flush gap-3">
                    <li class="list-group-item rounded h5">123 Fake St., Los Angeles, CA 90012</li>
                    <li class="list-group-item rounded h5">Monday - Friday: 10:00am - 8:00pm</li>
                    <li class="list-group-item rounded h5">Saturday - Sunday: 11:00am - 9:00pm</li>
                    <li class="list-group-item rounded h5">(213) 321-5862</li>
                </ul>
            </div>

            <div class="col">
                <form class="d-flex justify-content-center flex-column gap-3" action="">
                    <label for="inputName" class="form-label h5">Name</label>
                    <input type="text" class="form-control">
                    <label for="inputEmail" class="form-label h5">Email</label>
                    <input type="email" class="form-control">
                    <label for="inputMessage" class="form-label h5">Message</label>
                    <textarea type="text" class="form-control"></textarea>
                    <button type="submit" class="btn btn-primary" data-toggle="button">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div> */}