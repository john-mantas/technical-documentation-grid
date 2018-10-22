const DOC_HEADER_LINKS = document.getElementById('doc_header_links');

DOC_HEADER_LINKS.addEventListener('click', ()=> {
  DOC_HEADER_LINKS.classList.toggle('is-open');
});

const NAVBAR = document.getElementById('navbar');

NAVBAR.addEventListener('click', ()=> {
  NAVBAR.classList.toggle('is-open');
});