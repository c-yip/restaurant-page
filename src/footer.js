export function footer() {
    const content = document.querySelector('.content');
    const container = document.createElement('div');
    container.classList.add('container-flex', 'bg-dark', 'text-light', 'd-flex', 'justify-content-center', 'align-items-center', 'gap-3', 'p-5');
    content.appendChild(container);

    const text = document.createElement('p');
    text.classList.add('m-0');
    text.textContent = 'Created by Christian Yip';
    container.appendChild(text);

    const link = document.createElement('a');
    link.setAttribute('href', 'https://github.com/c-yip');
    container.appendChild(link);

    const img = document.createElement('img');
    img.setAttribute('src', '/img/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png');
    img.setAttribute('alt', 'GitHub Icon');
    link.appendChild(img);
}
