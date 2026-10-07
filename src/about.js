
export function buildAboutPage() {
const content = document.querySelector("#content");
const actualContent = document.createElement('div');
actualContent.className = 'actual-content';


const aboutDiv = document.createElement('div');
const aboutP = document.createElement('p');


aboutP.textContent = `At Tasty Cakes, we believe the best moments in life are sweet.
    Baked fresh daily with love and premium ingredients, our cakes, cupcakes,
    and pastries are made to bring a smile to your face.
    Come taste the magic of homemade goodness right here in our neighborhood bakery.

    Bold flavors, stunning designs, and a whole lot of joy.
    Tasty Cakes is your go-to destination for custom cakes, decadent desserts,
    and sweet treats that taste exactly as good as they look.
    Whether it's a grand birthday bash or a Tuesday afternoon craving, let us make your day unforgettable.`;

aboutDiv.appendChild(aboutP);
actualContent.appendChild(aboutDiv);


const contactDiv = document.createElement('div');


const h2 = document.createElement('h2');
h2.className = 'contactHeader';
h2.textContent = 'Contact Us';
contactDiv.appendChild(h2);


const callP = document.createElement('p');
const callEm = document.createElement('em');
callEm.textContent = 'Call:';
callP.appendChild(callEm);
callP.appendChild(document.createTextNode(' +91 1230987654'));
contactDiv.appendChild(callP);


const emailP = document.createElement('p');
emailP.appendChild(document.createTextNode(' ')); 
const emailEm = document.createElement('em');
emailEm.textContent = 'Email:';
emailP.appendChild(emailEm);
emailP.appendChild(document.createTextNode(' tastycakes@email.com'));
contactDiv.appendChild(emailP);

actualContent.appendChild(contactDiv);

 content.textContent="";
content.appendChild(actualContent);


}