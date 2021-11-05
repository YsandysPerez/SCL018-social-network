import loginPage from './view/login.js'

const containerRoot = document.getElementById('root');

export const showPages = () => {
  containerRoot.innerHTML = '';
  containerRoot.appendChild(loginPage());
  console.log('aqui!');
};
