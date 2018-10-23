const DOC_HEADER_LINKS = document.getElementById('doc_header_links');

DOC_HEADER_LINKS.addEventListener('click', ()=> {
  DOC_HEADER_LINKS.classList.toggle('is-open');
});

const NAVBAR = document.getElementById('navbar');
const NAVBAR_BTN = document.getElementById('navbar_btn');

NAVBAR.addEventListener('click', ()=> {
  NAVBAR.classList.toggle('is-open');
});

NAVBAR_BTN.addEventListener('click', ()=> {
  NAVBAR.classList.toggle('is-open');
});

function getTop() {
  let doc_header_height = document.getElementById('doc-header').clientHeight;
  document.getElementById('main-doc').style.top = `${doc_header_height}px`;
  document.getElementById('main-doc').style.height = `calc(100vh - ${doc_header_height}px)`;
};

window.onload = getTop;
window.onresize = getTop;