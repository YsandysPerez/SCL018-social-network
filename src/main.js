// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
import { showPage } from './views/routes.js';
import { onAuth } from './lib/firebase.js';
// import { firebaseInit } from './lib/farebase.js';

window.addEventListener('load', () => {
  onAuth();
  showPage(window.location.hash);
});

window.addEventListener('hashchange', () => {
  showPage(window.location.hash);
});
// myFunction();
