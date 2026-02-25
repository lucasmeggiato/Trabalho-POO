function marcarNavAtiva() {
  const pagina = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === pagina) {
      link.classList.add('active');
    }
  });
}

function menuHamburguer() {
  const btn = document.getElementById('hamburguer');
  const nav = document.getElementById('nav-menu');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    nav.classList.toggle('aberto');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('aberto');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  marcarNavAtiva();
  menuHamburguer();
});