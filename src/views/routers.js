import { loginPage } from './login.js';
import { registerPage } from './register.js';

export const showPage = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/' || hash === '' || hash === '#' || hash === '/') {
    containerRoot.appendChild(loginPage());
  } else if (hash === '#/login') {
    containerRoot.appendChild(loginPage());
  } else if (hash === '#/register') {
    containerRoot.appendChild(registerPage());
  }
};
/*
export const changeRouter = (hash) => {
  return showPage(hash);
};
*/
