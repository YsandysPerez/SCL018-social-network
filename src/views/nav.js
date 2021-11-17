// import { publishPost } from '../lib/firebase.js';
import { showPost } from './components/TemplatePost.js';
import { out } from '../lib/firebase.js';

export const wall = () => {
  const containerRoot = document.getElementById('root');
  const divWall = document.createElement('div');
  divWall.className = 'wall';
  const viewWall = `
<header class='logotypeWall1'> 
<img src='./images/logo2.png' class = 'logoWall' alt = 'logotype'>
</header>
<nav class = 'navWall'>
    <a href='#/nav'><img class='icon' src="./images/home.png"></a>
    <a href='#/newPost'><img class='icon' id='iconNewPost' src="./images/newpost.png"></a>
    <img class='icon' id='iconOut' src="./images/getout.png">
  </nav>
  <div id='feed'>
  </div>
    `;
  divWall.innerHTML = viewWall;
  containerRoot.appendChild(divWall);
  showPost();
  /* document.getElementById('iconNewPost').addEventListener('click', () => {
    window.location.hash = '#/newPost';
  }); */
  document.getElementById('iconOut').addEventListener('click', () => {
    out();
  });
  return divWall;
};
