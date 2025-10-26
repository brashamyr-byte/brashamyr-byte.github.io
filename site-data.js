document.querySelector('.search-form').addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.querySelector('input').value.toLowerCase();
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const title = card.querySelector('h3').textContent.toLowerCase();
    card.style.display = title.includes(query) ? 'block' : 'none';
  });
});