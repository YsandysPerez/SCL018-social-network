import { loginPage } from './login.js';
import { newPost } from './components/NewPost.js';
import { registerPage } from './register.js';
import { wall } from './nav.js';

export const showPage = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/' || hash === '' || hash === '#' || hash === '/' || hash === '#/login') {
    containerRoot.appendChild(loginPage());
  } else if (hash === '#/register') {
    containerRoot.appendChild(registerPage());
  } else if (hash === '#/newPost') {
    containerRoot.appendChild(newPost());
  } else if (hash === '#/nav') {
    containerRoot.appendChild(wall());
  }
};
