
//on render event
//1.resive text from body

//2.split the text to nodes

//3.split text node to chars

//4.colorize every chars

//5.display chars


function getEleUsingID(ID) {
    return document.getElementById(ID);
}

function CreateElement(name, className, id = null, textContent = "", father = null) {

    const element = document.createElement(name);
    if (className)
        element.classList.add(className);

    if (textContent !== "") {
        element.textContent = textContent;
    }

    if (id) {
        element.id = id;
    }

    if (father) {
        const parent = getEleUsingID(father);
        parent.appendChild(element);
    }
    else {
        document.body.appendChild(element);
    }

    return element;
}

function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let Chars = [];
const parag = getEleUsingID("small");
const background = getEleUsingID("big");

function splitNode(Node) {

    if (Node.nodeType === 3) {
        for (const char of Node.textContent) {
            Chars.push(CreateElement("span", "Char", "", char, "small"));
        }

    }
    else if (Node.nodeType === 1 && Node.tagName === "BR") {

        Chars.push(Node);
    }

}

function colorizeChars() {

    for (const char of Chars) {

        if (char.tagName = "SPAN") {
            char.style.color = getRandomColor();
        }
    }
    background.style.backgroundColor = getRandomColor();
}

function Display() {
    parag.innerHTML = "";

    colorizeChars();

    for (const ele of Chars) {
        parag.appendChild(ele);

    }

    parag.textContent = text;

}



document.addEventListener("DOMContentLoaded", () => {

    for (const Node of parag.childNodes) {
        splitNode(Node);
    }



    setInterval(() => {
        Display();
    }, 3000);
    Display();

});





