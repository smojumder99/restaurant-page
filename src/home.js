
export function buildHomePage() {
    const content = document.querySelector("#content");
    const actualContent = document.createElement("div");
    const top = document.createElement("div");
    const topOne = document.createElement("h1");
    const topTwo = document.createElement("p");

    topOne.textContent = "Tasty Cakes";
    topTwo.textContent = `Welcome to Tasty Cakes, where every slice is a celebration.
                    We handcraft exquisite cakes and pastries using the finest ingredients, bringing a touch of
                    sweetness and elegance to your most cherished moments.
                    From custom wedding tiers to everyday treats, experience the art of baking in every bite.`;

    top.appendChild(topOne);
    top.appendChild(topTwo);


    const middle = document.createElement("div");
    const middleOne = document.createElement("h3");
    const middleTwo = document.createElement("ul");
    const middleLiOne = document.createElement("li");
    const middleLiTwo = document.createElement("li");

    middleOne.textContent = "Hours";
    middleLiOne.textContent = "Sunday to Wednesday: 9 am - 10pm";
    middleLiTwo.textContent = "Thursday: Closed";

    middleTwo.appendChild(middleLiOne);
    middleTwo.appendChild(middleLiTwo);
    middle.appendChild(middleOne);
    middle.appendChild(middleTwo);


    const bottom = document.createElement("div");
    const bottomOne = document.createElement("h3");
    const bottomTwo = document.createElement("p");

    bottomOne.textContent = "Location";
    bottomTwo.textContent = "Shop no.7, IA Market, New Town, Kolkata";

    bottom.appendChild(bottomOne);
    bottom.appendChild(bottomTwo);


    actualContent.classList.add("actual-content")
    actualContent.appendChild(top);
    actualContent.appendChild(middle);
    actualContent.appendChild(bottom);

    content.textContent="";
    content.appendChild(actualContent);

}