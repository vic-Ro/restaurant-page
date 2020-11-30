const generateFooter = () => {
  const footer = document.getElementById('footer');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < 3; i += 1) {
    const div = document.createElement('div');
    div.classList.add('footer-item');
    const p = document.createElement('p');
    const img = document.createElement('img');
    switch (i) {
      case 0:
        div.innerHTML = '<a href="https://github.com/vic-Ro" target="_blank"><i class="fab fa-github-square"></i></a><a href="https://www.linkedin.com/in/victor-romero-10/" target="_blank"><i class="fab fa-linkedin"></i></a><a href="mailto:vromerocomino@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a>';
        fragment.appendChild(div);
        break;
      case 1:
        p.classList.add('footer-text');
        p.textContent = 'This is a fanpage. Maximus Pizza is an actual Pizzeria in Barcelona (Spain). If you ever want a good neapolitan pizza, I strongly recommend you give it a try!';
        div.appendChild(p);
        fragment.appendChild(div);
        break;
      case 2:
        img.src = 'img/madeby.png';
        img.alt = 'Made by Vic Romero';
        img.classList.add('madeby');
        div.appendChild(img);
        fragment.appendChild(div);
        break;
      default:
        break;
    }
  }
  footer.appendChild(fragment);
};

export default generateFooter;
