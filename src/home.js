const generateHome = () => {
  const content = document.getElementById('content');
  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'div-container');

  //* Main title
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('title');
  mainTitle.textContent = 'WE ARE MAXIMMUS';
  divContainer.appendChild(mainTitle);

  //* First section
  const section1 = document.createElement('section');
  section1.classList.add('video-content');
  const subtitle = document.createElement('p');
  subtitle.classList.add('subtitle');
  subtitle.textContent = 'Maximmus was born with the desire to create a piece of Naples in Barcelona.';
  section1.appendChild(subtitle);
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video-container');
  videoContainer.innerHTML = '<iframe src="https://player.vimeo.com/video/288503359" width="640" height="360" frameborder="0" fullscreen" allowfullscreen></iframe>';
  section1.appendChild(videoContainer);
  divContainer.appendChild(section1);

  //* Second section
  const section2 = document.createElement('section');
  section2.classList.add('page-content');
  const section2Title = document.createElement('h2');
  section2Title.classList.add('section-title');
  section2Title.textContent = 'SLOW PIZZA, HIGH QUALITY FOOD';
  section2.appendChild(section2Title);
  const ul = document.createElement('ul');
  ul.classList.add('products-list');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 4; i += 1) {
    const li = document.createElement('li');
    li.classList.add('products-list__item');
    const img = document.createElement('img');
    img.classList.add('product-img');
    const span = document.createElement('span');
    span.classList.add('product-item__title');
    const p = document.createElement('p');
    span.classList.add('product-item__description');
    switch (i) {
      case 0:
        img.src = 'img/pizza.svg';
        img.alt = 'Pizza';
        span.textContent = 'PIZZAS HANDMADE';
        p.textContent = 'Our pizzas are really handmade. Don\'t expect a pizza with a perfect circumference. We have 12 different pizzas waiting for you. Decide your favorite!';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);
        break;
      case 1:
        img.src = 'img/salad.svg';
        img.alt = 'Salad';
        span.textContent = 'SALADS';
        p.textContent = 'Add a healthy touch with our salads with top quality products. We have 4 different salads.';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);
        break;
      case 2:
        img.src = 'img/wine.svg';
        img.alt = 'Drinks';
        span.textContent = 'DRINKS';
        p.textContent = 'Soft drinks, beers or wines. Decide your favorite drink according to the occasion and enjoy!';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);
        break;
      case 3:
        img.src = 'img/cupcake.svg';
        img.alt = 'Coffee';
        span.textContent = 'COFFEE AND DESSERTS';
        p.textContent = 'Shall we finish with something sweet? Our desserts will not leave you indifferent.';
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(p);
        break;
      default:
        break;
    }
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  section2.appendChild(ul);
  const hr = document.createElement('hr');
  hr.classList.add('card-hr');
  section2.appendChild(hr);

  // Article
  const article = document.createElement('article');
  article.classList.add('recommended');
  const recommendedTitle = document.createElement('h3');
  recommendedTitle.classList.add('recommended-title');
  recommendedTitle.textContent = 'Did you know we were rated by "El País", "El comidista" and Tripadvisor as one of the best Pizzerias of Spain?';
  article.appendChild(recommendedTitle);
  for (let i = 0; i < 3; i += 1) {
    const img = document.createElement('img');
    switch (i) {
      case 0:
        img.src = 'img/comidista.png';
        img.alt = 'El Comidista';
        break;
      case 1:
        img.src = 'img/el_pais.svg';
        img.alt = 'El Pais';
        break;
      case 2:
        img.src = 'img/tripadvisor.jpg';
        img.alt = 'Travellers\' choice';
        break;
      default:
        break;
    }
    article.appendChild(img);
  }
  section2.appendChild(article);

  //* Last append
  divContainer.appendChild(section2);
  content.appendChild(divContainer);
};

export default generateHome;
