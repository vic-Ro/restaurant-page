const generateContact = () => {
  const content = document.getElementById('content');
  const divContainer = document.createElement('div');
  divContainer.setAttribute('id', 'div-container');

  //* Main title
  const mainTitle = document.createElement('h1');
  mainTitle.classList.add('title');
  mainTitle.textContent = 'CONTACT US';
  divContainer.appendChild(mainTitle);

  //* Contact Box
  const contactBox = document.createElement('section');
  contactBox.classList.add('contact-box');
  const item1 = document.createElement('div');
  item1.classList.add('contact-item');
  const item1Title = document.createElement('h3');
  item1Title.innerHTML = '<i class="fas fa-map-marked-alt"></i> Where are we?';
  item1Title.classList.add('subtitle');
  item1.appendChild(item1Title);
  const mapContainer = document.createElement('div');
  mapContainer.classList.add('map-container');
  mapContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2986.0552578375045!2d2.1083110225960136!3d41.546400786731546!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbcd54731431ec368!2sMaximmus%20Pizzeria%20Napoletana!5e0!3m2!1ses!2ses!4v1606670913215!5m2!1ses!2ses" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  item1.appendChild(mapContainer);
  contactBox.appendChild(item1);

  const item2 = document.createElement('div');
  item2.classList.add('contact-item');
  const item2Title = document.createElement('h3');
  item2Title.innerHTML = '<i class="fas fa-mobile-alt"></i> Orders and group reservations';
  item2Title.classList.add('subtitle');
  item2.appendChild(item2Title);
  const item2Phone = document.createElement('h4');
  item2Phone.classList.add('contact-phonenumber');
  item2Phone.textContent = '000 000 000';
  item2.appendChild(item2Phone);

  const div = document.createElement('div');
  const divTitle = document.createElement('h3');
  divTitle.innerHTML = '<i class="fas fa-hashtag"></i> Our social media';
  divTitle.classList.add('subtitle');
  div.appendChild(divTitle);
  const socialMediaSpan = document.createElement('span');
  socialMediaSpan.classList.add('social-media');
  socialMediaSpan.innerHTML = '<i class="fab fa-instagram"></i><i class="fab fa-facebook-square"></i><i class="fab fa-tripadvisor"></i>';
  div.appendChild(socialMediaSpan);
  item2.appendChild(div);

  const div2 = document.createElement('div');
  const div2Title = document.createElement('h3');
  div2Title.innerHTML = '<i class="fas fa-clock"></i> Opening hours</h3>';
  div2.appendChild(div2Title);
  const div2subtitle = document.createElement('h4');
  div2subtitle.classList.add('contact-hours');
  div2subtitle.textContent = 'MONDAY TO SUNDAY';
  div2.appendChild(div2subtitle);
  const div2span = document.createElement('span');
  div2span.classList.add('hours');
  div2span.innerHTML = '13:00 - 16:00<br>20:00 - 00:00';
  div2.appendChild(div2span);
  item2.appendChild(div2);

  contactBox.appendChild(item2);

  divContainer.appendChild(contactBox);

  content.appendChild(divContainer);
};

export default generateContact;
