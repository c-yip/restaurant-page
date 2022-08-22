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