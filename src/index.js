import "./styles.css"
import {loadPage} from "./pageload.js"
import {loadMenu} from "./loadmenu.js"
import {loadAbout} from "./loadabout.js"
import borsch from "./borsch.jpg"
import chebureki from "./chebureki.jpg"
import kievcake from "./kiev.jpg"
import kvas from "./kvas.png"
import varenyki from "./varenyki.jpg"
import pelmeni from "./pelmeni.jpeg"
console.log("index.js has been bundled!");
content = document.querySelector("div#content");
document.addEventListener("click", (event) => {
    let targetId = event.target.id;
    console.log(targetId);
    switch (targetId){
        case "home-button":
            content.innerHTML = "";
            loadPage();
            break;
        case "about-button":
            content.innerHTML = "";
            loadAbout();
            break;
        case "menu-button":
            content.innerHTML = "";
            loadMenu();
            break;
        case "button-view":
            content.innerHTML = "";
            loadMenu();
            break;
            
    }
})
