// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
import { showPage } from './views/routes.js';
// import { firebaseInit } from './lib/farebase.js';

window.addEventListener('load', () => {
  showPage(window.location.hash);
});

window.addEventListener('hashchange', () => {
  showPage(window.location.hash);
});
// myFunction();
