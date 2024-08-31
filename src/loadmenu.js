 //First select div container
    //Create function which create elements
    //Create function which configures elements
    //Create function with displays elements as children to their corresponding parents
import borsch from "./borsch.jpg"
import chebureki from "./chebureki.jpg"
import kievcake from "./kiev.jpg"
import kvas from "./kvas.png"
import varenyki from "./varenyki.jpg"
import pelmeni from "./pelmeni.jpeg"
export {loadMenu} 
function loadMenu(){
    //Create header element with image text
    const content = document.querySelector("div#content")
    const headerText = document.createElement("h1");
    headerText.textContent = "Menu"
    
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu")
    content.appendChild(headerText);
    content.appendChild(menuContainer)
    
    let dishNumber = 0;

    //Make createDish function compatible with objects & turn
    //the dishes into objects
    createDish("Borsch", borsch, "blabla", 12)
    createDish("Chebureki", chebureki, "blabla", 15)
    createDish("Kyiv Cake", kievcake, "blabla", 8)
    createDish("Kvas", kvas, "blabla", 4)
    createDish("Varenyki", varenyki, "blabla", 14)
    createDish("Pelmeni", pelmeni, "blabla", 12)

    function createDish(name, image, description, price){
        const dishContainer = document.createElement("div");
        dishNumber++;
        dishContainer.classList.add("dish");
        dishContainer.setAttribute("id", `dish-${dishNumber}`);
        const dishImage = document.createElement("img");
        const dishTitle = document.createElement("p");
        const dishPrice = document.createElement("p")
        const dishDescription = document.createElement("p");

        dishTitle.classList.add("title")
        dishDescription.classList.add("description")
        dishPrice.classList.add("price")

        
        dishImage.src = image;
        dishTitle.textContent = name;
        dishDescription.textContent = description;
        dishPrice.textContent = `€${price}`
        
        dishContainer.appendChild(dishImage);
        dishContainer.appendChild(dishTitle);
        dishContainer.appendChild(dishDescription);
        dishContainer.appendChild(dishPrice);

        menuContainer.appendChild(dishContainer);

    }

    }

    function renderPage(){

        append(Elements.imageHeader, Elements.restaurantImage, Elements.imageText);
        append(Elements.imageText, Elements.firstParagraph, Elements.secondParagraph);
        append(content, Elements.imageHeader);
        append(content, Elements.headerText);
        append(content, Elements.viewMenu);

        function append(parent, ...children){
            for (let i = 0; i < children.length; i++){
            parent.appendChild(children[i]);
            }
        }
    }
