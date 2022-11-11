function createScrewElement(){
    const screw = document.createElement("div");
    screw.classList.add("card", "mt-3", "mx-2");

    const image = document.createElement("img");
    image.setAttribute("src", "assets/img/srubka2.jpg");
    image.classList.add("card-img-top");

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = "Nazwa śrubki";

    const text = document.createElement("p");
    text.classList.add("card-text");
    text.innerHTML = "Kod śrubki";

    const button1 = document.createElement("button");
    button1.classList.add("btn", "btn-primary");
    button1.innerHTML = "Sprawdź ilość";

    const button2 = document.createElement("button");
    button2.classList.add("btn", "btn-warning");
    button2.innerHTML = "Pobierz";

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(button1);
    cardBody.appendChild(button2);

    screw.appendChild(image);
    screw.appendChild(cardBody);

    return screw;
}

function generateContent(count){
    const rootElement = document.querySelector("#root")
    for (let i = 0; i < count; i++)
    {
        rootElement.appendChild(createScrewElement());
    }
}

generateContent(9);