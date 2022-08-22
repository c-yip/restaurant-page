export function appendHome() {
    const content = document.querySelector(".content");
    const newDiv = document.createElement('div');
    newDiv.classList.add('home')
    const homePageHtml = 
    `<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
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
    </nav>

    <div class="container-fluid text-center bg-dark text-light" id="title-container">
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
    console.log('Home page function is loading.');
}