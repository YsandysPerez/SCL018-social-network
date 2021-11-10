import { loginPage } from './login.js';
// import { newPost } from './templateNewPost.js';
// import { profilePage } from './profile.js';
import { registerPage } from './register.js';
import { newPost } from './components/NewPost.js';
import { wall } from './nav.js';

export const showPage = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';
  if (hash === '#/' || hash === '' || hash === '#' || hash === '/') {
    containerRoot.appendChild(loginPage());
  } else if (hash === '#/login') {
    containerRoot.appendChild(loginPage());
  } else if (hash === '#/register') {
    containerRoot.appendChild(registerPage());
  } else if (hash === '#/newPost') {
    containerRoot.appendChild(newPost());
  } else if (hash === '#/nav') {
    containerRoot.appendChild(wall());
  }
};
/*
export const changeRouter = (hash) => {
  return showPage(hash);
};
*/
/* else if (hash === '#/newPost') {
  containerRoot.appendChild(newPost());
  // console.log('Login desde:' + hash);
} */
/* else if (hash === '#/profile') {
    containerRoot.appendChild(profilePage());
  } */
