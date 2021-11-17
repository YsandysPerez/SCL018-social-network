import { publishPost } from '../../lib/firebase.js';

function PostCallback(posts) {
  const nav = document.getElementById('feed');
  nav.innerHTML = '';
  const prueba = (element) => {
    const postUser = document.createElement('div');
    postUser.innerHTML += `
    <div class='allPost'>
     <div class='post'>
      <div class="feedPost"> ${element}</div>
     </div>
     <div class='imgPost'>
       <div class='btnLike'>
        <img class='img' src='./images/btnlike.png'> 
        <p> x me gusta </p>
        </div>
        <div class='btnRecom'>
        <img class='img' src='./images/btnrecom.png'>
        <p> x recomiendo </p>
        </div>
     </div>
    </div>
    `;
    nav.appendChild(postUser);
    // console.log(nav);
  };
  posts.forEach(prueba);
  return nav;
}

export const showPost = () => {
  publishPost('post', PostCallback);
};
