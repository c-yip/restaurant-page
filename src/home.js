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