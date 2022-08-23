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
    const text = document.createTextNode(`Charlotte's Dumplings`)
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
    a2.setAttribute('href', '#')
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
    li4.appendChild(a5);
    a5.textContent = 'CONTACT US';
}

/* <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="/img/dumpling.png" alt="" width="30" height="30" class="d-inline-block align-text-top">
                Charlotte's Dumplings
            </a>

            <span class="navbar-text">
                123 Fake St., Los Angeles, CA 90012
            </span>   

            <span class="navbar-text">
                (213) 321-5862
            </span>   
            
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" href="">HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="">MENU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="">HOURS & LOCATION</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" href="">CONTACT US</a>
                </li>
            </ul>
        </div>
    </nav> */