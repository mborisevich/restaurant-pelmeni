export {loadAbout}
function loadAbout(){
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
        const pageTitle = document.createElement("h1");
        const aboutContainer = document.createElement("div");
        const restaurantName = document.createElement("p");
        const adressHeader = document.createElement("p");
        const adressInfo = document.createElement("p");
        const phoneHeader = document.createElement("p");
        const phoneInfo = document.createElement("p");
        const aboutText = document.createElement("p")
        return {pageTitle, aboutContainer, restaurantName, adressHeader, adressInfo, phoneHeader, phoneInfo, aboutText}
    }
    
    function configElements(){
        Elements.pageTitle.textContent = "About";
        Elements.aboutContainer.classList.add("about")
        Elements.adressHeader.classList.add("header");
        Elements.phoneHeader.classList.add("header");
        Elements.restaurantName.textContent = "Pelmeni Palace";
        Elements.adressHeader.textContent = "Address";
        Elements.phoneHeader.textContent = "Phone number";
        Elements.adressInfo.innerHTML = "Oosterstraat 11A" + " <br> " + "9711 NN, Groningen"
        Elements.phoneInfo.textContent = "+31618657438"
        Elements.aboutText.textContent = "Feel free to contact us to place a reservation or to ask any questions."
    }

    function renderPage(){
        append(content, Elements.pageTitle);

        append(Elements.aboutContainer, Elements.restaurantName, Elements.adressHeader, Elements.adressInfo, Elements.phoneHeader, Elements.phoneHeader,
            Elements.phoneInfo, Elements.aboutText
        )
        append(content, Elements.aboutContainer)

        function append(parent, ...children){
            for (let i = 0; i < children.length; i++){
            parent.appendChild(children[i]);
            }
        }
    }
    return {content}
}