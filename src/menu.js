const pizzaInfo = [
  {
    name: 'Forcella',
    description: 'Light but delicious. New at Maximmus!',
    ingredients: 'Napoletano salami, mushrooms, San Marzano tomato, Fior di Latte Campana mozzarella, basil and extra virgin olive oil.',
    img: 'img/pizzas/forcella.png',
    price: '12,75€',
  },
  {
    name: 'La Friarelli',
    description: 'A classic that you cannot refuse to try.',
    ingredients: 'Mozzarella Fior di Latte Campana, fresh peppered sausage and Friarelli (typical Italian vegetable).',
    img: 'img/pizzas/friarelli.png',
    price: '14,50€',
  },
  {
    name: 'La Xampi',
    description: 'For lovers of mushrooms.',
    ingredients: 'Fresh peppered butifarra, mushrooms, San Marzano tomato, Fior di Latte Campana mozzarella, basil and extra virgin olive oil.',
    img: 'img/pizzas/xampi.png',
    price: '12,50€',
  },
  {
    name: 'L’Hortolana',
    description: 'Looking for the healthy option? This is yours!',
    ingredients: 'Mozzarella Fior di Latte Campana, zucchini, aubergine, red and yellow pepper, artichoke, friarelli and mushrooms.',
    img: 'img/pizzas/hortolana.png',
    price: '15,50€',
  },
  {
    name: 'Napoletana',
    description: 'Forget all the Neapolitan pizzas you\'ve ever eaten. This is the real thing!',
    ingredients: 'San Marzano tomato, Fior di Latte Campana mozzarella, Extra Virgin olive oil, oregano, capers, olives, anchovies and garlic.',
    img: 'img/pizzas/napoletana.png',
    price: '14,25€',
  },
  {
    name: 'Cotto e Tonno',
    description: 'Classic Maximmus with tuna.',
    ingredients: 'Tuna, sweet ham, San Marzano tomato, Fior di Latte Campana mozzarella, basil and extra virgin olive oil.',
    img: 'img/pizzas/cottoetonno.png',
    price: '13,50€',
  },
  {
    name: 'Ibérica',
    description: 'Missing one with Iberian ham huh?',
    ingredients: 'Mozzarella Fior di Latte, gorgonzola dolce PDO, basil, mushrooms, Parmesan shavings and Iberian ham.',
    img: 'img/pizzas/iberica.png',
    price: '16,50€',
  },
  {
    name: 'Ischia',
    description: 'Pizza made in honor of our Ischia pizzaiolo Francesco Ferrara.',
    ingredients: 'Mozzarella, basil, Parmigiano Reggiano PDO 24 months of maturation, Cantabrian anchovies, gorgonzola dolce PDO, tomato (pomodoro Calabrese).',
    img: 'img/pizzas/ischia.png',
    price: '15,50€',
  },
  {
    name: 'Only tonno',
    description: 'Ideal for tuna lovers.',
    ingredients: 'San Marzano tomato, Extra Virgin olive oil, oregano, garlic, tuna, basil and cherry tomatoes.',
    img: 'img/pizzas/tonno.png',
    price: '12,50€',
  },
  {
    name: 'Capri',
    description: 'One of our latest pizzas. Give it a try!',
    ingredients: 'Anchovies, basil, San Marzano type tomato, Extra Virgin olive oil, oregano and garlic.',
    img: 'img/pizzas/capri.png',
    price: '11,75€',
  },
  {
    name: 'Carbonara',
    description: 'The authentic carbonara of Roman origin.',
    ingredients: 'Mozzarella, mascarpone and egg cream, guanciale (Italian sausage, from pork galta, typical Italian), black pepper, Parmigiano Reggiano 24 months of maturation, basil and Extra Virgin olive oil.',
    img: 'img/pizzas/carbonara.png',
    price: '14,55€',
  },
  {
    name: 'Catanap',
    description: 'The perfect fusion between Catalonia and Naples!',
    ingredients: 'Fresh peppered sausage, Figueres onion, Fior di Latte Campana mozzarella, San Marzano type tomato, roasted red pepper and Extra Virgin olive oil.',
    img: 'img/pizzas/catanap.png',
    price: '13,55€',
  },
];

const generateMenu = () => {
  const content = document.getElementById('content');
  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'div-container');

  //* Main title
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('title');
  mainTitle.textContent = 'OUR PIZZAS';
  divContainer.appendChild(mainTitle);
  const subtitle = document.createElement('h2');
  subtitle.classList.add('subtitle');
  subtitle.textContent = 'All our pizzas are made with long fermentation dough, 24/48 hours and without oil in the dough.';
  divContainer.appendChild(subtitle);

  //* First section
  const section1 = document.createElement('section');
  section1.classList.add('menu-container');
  const listOfCards = document.createElement('ul');
  listOfCards.classList.add('menu-cards');
  const fragment = document.createDocumentFragment();
  pizzaInfo.forEach((element) => {
    const card = document.createElement('li');
    card.classList.add('card');
    const div1 = document.createElement('div');
    div1.classList.add('card-division');
    const img = document.createElement('img');
    img.src = element.img;
    img.alt = element.name;
    div1.appendChild(img);
    card.appendChild(div1);
    const div2 = document.createElement('div');
    div2.classList.add('card-division');
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = element.name;
    const description = document.createElement('span');
    description.classList.add('card-description');
    description.textContent = element.description;
    const hr = document.createElement('hr');
    hr.classList.add('card-hr');
    const cardSubtitle = document.createElement('h5');
    cardSubtitle.classList.add('card-subtitle');
    cardSubtitle.textContent = 'Ingredients';
    const cardIngredients = document.createElement('p');
    cardIngredients.classList.add('card-ingredients');
    cardIngredients.textContent = element.ingredients;
    const price = document.createElement('span');
    price.classList.add('card-price');
    price.textContent = element.price;
    div2.appendChild(cardTitle);
    div2.appendChild(description);
    div2.appendChild(hr);
    div2.appendChild(cardSubtitle);
    div2.appendChild(cardIngredients);
    div2.appendChild(price);
    card.appendChild(div2);
    fragment.appendChild(card);
  });
  listOfCards.appendChild(fragment);
  section1.appendChild(listOfCards);
  divContainer.appendChild(section1);

  content.appendChild(divContainer);
};

export default generateMenu;
