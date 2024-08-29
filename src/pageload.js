export {loadPage};
import restaurant from './restaurant.png';
function loadPage(){
    //First select div container
    //Create function which create elements
    //Create function which configures elements
    //Create function with displays elements as children to their corresponding parents
    const content = document.querySelector("div#content")
    const Elements = createElements();
    configElements();
    renderPage();
    function createElements(){
        //Create header element with image text
        const imageHeader = document.createElement("div");
        const restaurantImage = document.createElement("img");
        const imageText = document.createElement("div");
        const firstParagraph = document.createElement("p");
        const secondParagraph = document.createElement("p");


        const headerText = document.createElement("h1")
        const viewMenu = document.createElement("button")
        return {imageHeader, restaurantImage, imageText, firstParagraph, secondParagraph, headerText, viewMenu}


    }
    
    function configElements(){
        Elements.imageHeader.classList.add("image-header");

        Elements.restaurantImage.classList.add("restaurant");
        Elements.restaurantImage.setAttribute("src", restaurant);
        
        Elements.imageText.classList.add("image-text");

        Elements.firstParagraph.textContent = `A culinary experience inspired by the owner's childhood in 
        a region of Ukraine with the richest agricultural soil in the world, known as Chernozem.`;
        Elements.firstParagraph.classList.add("head");

        Elements.secondParagraph.textContent = `Enjoy a range of hearty meals such as the Ukrainian Borsch or the meat-filled dumplings called Pelmeni.
        Treat yourself and nourish the body and soul with this home cooked food.`;

        Elements.headerText.textContent = `Pelmeni Palace`;

        Elements.viewMenu.classList.add("content-menu");
        Elements.viewMenu.setAttribute("id", "button-view")
        Elements.viewMenu.textContent = "View menu"


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
    return {content}
}