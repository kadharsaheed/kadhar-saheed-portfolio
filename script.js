const menuButton = document.querySelector('.hamburger');
const navigation = document.querySelector('#primary-navigation');

function setMenuOpen(open) {
  navigation.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

menuButton.addEventListener('click', () => {
  setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
});

navigation.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) setMenuOpen(false);
});

const typedName = document.querySelector('.typed-name');
if (typedName) {
  const nameParts = ['Kadhar', 'Saheed'];
  typedName.replaceChildren();
  nameParts.forEach((part, partIndex) => {
    const word = document.createElement(partIndex ? 'em' : 'span');
    [...part].forEach((letter, letterIndex) => {
      const character = document.createElement('span');
      character.className = 'name-letter';
      character.textContent = letter;
      character.style.animationDelay = `${(partIndex * part.length + letterIndex) * 85}ms`;
      word.appendChild(character);
    });
    typedName.appendChild(word);
  });
}
