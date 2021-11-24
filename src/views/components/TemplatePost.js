import {
  publishPost,
  deletePost,
  auth,
  editTemplate,
} from '../../lib/firebase.js';
import { editPost } from './TemplateEditPost.js';

function PostCallback(posts) {
  const nav = document.getElementById('feed');
  nav.innerHTML = '';
  const prueba = (element) => {
    const postUser = document.createElement('div');
    const htmlTemplate1 = `
    <div class="allPost">
    <div class ="name">${element.userName}</div>
     <div class="post" id="${element.id}">
      <div class="feedPost"> ${element.userPost}</div>
     </div>
     <div class="imgPost">
       <div class="btnLike">
       <img class="img" id="btnLike" src="./images/btnlike.png"></img>
       <p class="number-likes" id="counter-likes"> x me gusta</p>
        </div>
        <div class="btnRecom">
        <img class="img" src="./images/btnrecom.png">
        <p> x recomiendo </p> 
        `;

    const htmlTemplate3 = `</div>
     </div>
    </div> 
    `;
    let htmlBtn2 = ``;

    if (element.userId === auth.currentUser.uid) {
      htmlBtn2 = `<button type = "button" class="btnEdit" value="${element.id}">
                  <img class="img" src="./images/editar.gif">
                </button>
                <button type = "button" class="btnDelete" value="${element.id}">
                  <img class="img" src="./images/basura.png">
                </button>`;
    }

    postUser.innerHTML += htmlTemplate1 + htmlBtn2 + htmlTemplate3;
    nav.appendChild(postUser);
  };
  posts.forEach(prueba);

  // Para eliminar el post
  const btnDeleteList = document.querySelectorAll('.btnDelete');
  btnDeleteList.forEach((item) => {
    item.addEventListener('click', () => deletePost(item.value));
  });

  // Para editar el post
  const update = (data) => {
    const btnSave = document.querySelector('#btnPostEdit');
    btnSave.addEventListener('click', () => {
      editTemplate(data);
      const containerEdit = document.getElementById('containerEdit');
      containerEdit.remove();
    });
  };
  const btnEditPost = document.querySelectorAll('.btnEdit');
  btnEditPost.forEach((btnE) => btnE.addEventListener('click', () => {
    document.getElementById('root').innerHTML += editPost();
    const formPost = document.querySelector('#textPostInputEdit');
    const postText = document.getElementById(btnE.value).firstElementChild.textContent;
    formPost.value = postText;
    update(btnE.value);
  }));

  return nav;
}
export const showPost = () => {
  publishPost('post', PostCallback);
};
