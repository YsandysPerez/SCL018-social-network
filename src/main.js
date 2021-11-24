import { showPage } from './views/routes.js';
import { onAuth } from './lib/firebase.js';

window.addEventListener('load', () => {
  onAuth();
  showPage(window.location.hash);
});

window.addEventListener('hashchange', () => {
  onAuth();
  showPage(window.location.hash);
});
