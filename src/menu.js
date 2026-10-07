
export function buildMenuPage() {
const actualContent = document.createElement('div');
actualContent.className = 'actual-content';


const h1 = document.createElement('h1');
h1.textContent = 'Menu';
actualContent.appendChild(h1);


const menuData = [
  {
    category: 'Cakes',
    ulClass: 'menu-items',
    items: [
      'Red Velvet Cake: Rs 50',
      'Matcha Cake: Rs 30',
      'Chocolate Cake: Rs 44',
      'Strawberry Cake: Rs 27'
    ]
  },
  {
    category: 'Cookies',
    ulClass: null, 
    items: [
      'Peanut Butter Cookies: Rs 15',
      'Almond Cookies: Rs 25',
      'Chocolate Cookies: Rs 18',
      'Butter Cream Cookies: Rs 12'
    ]
  },
  {
    category: 'Donuts',
    ulClass: null,
    items: [
      'Chocolate Sprinkle: Rs 20',
      'Tiramisu Donut: Rs 25',
      'Strawberry Donut: Rs 35',
      'Pudding Donut: Rs 45'
    ]
  }
];


menuData.forEach(section => {
  const sectionDiv = document.createElement('div');

  const h3 = document.createElement('h3');
  h3.className = 'category';
  h3.textContent = section.category;
  sectionDiv.appendChild(h3);

  const ul = document.createElement('ul');
  if (section.ulClass) {
    ul.className = section.ulClass;
  }

  section.items.forEach(itemText => {
    const li = document.createElement('li');
    li.textContent = itemText;
    ul.appendChild(li);
  });

  sectionDiv.appendChild(ul);
  actualContent.appendChild(sectionDiv);
});




 const content = document.querySelector("#content");

 content.textContent="";
 content.appendChild(actualContent);

}