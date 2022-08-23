import {removeAllChildNodes} from "./menu.js";

export const replaceWithContact = function() {
    const content = document.querySelector('.content');
    removeAllChildNodes(content);
    console.log('contact test');
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