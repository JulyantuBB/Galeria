const elements = document.getElementsByClassName("element")

function MenuButton(){
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const displayActual = element.style.display;
        element.style.display = displayActual === "none" ? "flex" : "none";
    }
}