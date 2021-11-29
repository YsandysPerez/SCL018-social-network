import {
  publishPost,
  deletePost,
  auth,
  editTemplate,
  updateLikes,
  updateRecom,
} from '../../lib/firebase.js';
import { editPost } from './TemplateEditPost.js';

const postCallback = (posts) => {
  const nav = document.getElementById('feed');
  nav.innerHTML = '';
  const prueba = (element) => {
    const postUser = document.createElement('div');
    postUser.className = 'containerPost';
    const htmlTemplate1 = `
    <div class="allPost">
    <div class ="name">${element.userName}</div>
     <div class="post" id="${element.id}">
      <div class="feedPost"> ${element.userPost}</div>
     </div>
     <div class="imgPost">
       <div class="btnLike">
       <button id="btnLike" class="btn like" value="${element.id}">
       <img class="img" src="./images/btnlike.png">
       </button>
       <p class="number" id="counter-likes"> ${element.likesCounter} me gusta</p>
        </div>
        <div class="btnRecom">
        <button id="btnRecom" class="btn recom" value="${element.id}">
        <img class="img" src="./images/btnrecom.png">
        <p class="number"> ${element.recomCounter} recomiendo </p> 
        </div>
        `;

    const htmlTemplate3 = `
     </div>
    </div> 
    `;
    let htmlBtn2 = ``;

    if (element.userId === auth.currentUser.uid) {
      htmlBtn2 = `<button type = "button" class="btn" id='btnEdit'value="${element.id}">
                 <label for="btn-mod" class ="lbl-mod"><img class="img" src="./images/editar.gif"> </label>
                </button>
                <button type = "button" class="btn" id='btnDelete' value="${element.id}">
                  <img class="img" src="./images/basura.png">
                </button>`;
    }

    postUser.innerHTML += htmlTemplate1 + htmlBtn2 + htmlTemplate3;
    nav.appendChild(postUser);
  };
  posts.forEach(prueba);

  // Para eliminar el post
  const btnDeleteList = document.querySelectorAll('#btnDelete');
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
  const btnEditPost = document.querySelectorAll('#btnEdit');
  btnEditPost.forEach((btnE) => btnE.addEventListener('click', () => {
    document.getElementById('feed').innerHTML += editPost();
    const formPost = document.querySelector('#textPostInputEdit');
    const postText = document.getElementById(btnE.value).firstElementChild.textContent;
    formPost.value = postText;
    console.log(btnE.value);
    update(btnE.value);
  }));

  // Para dar Like
  const likeBtn = nav.querySelectorAll('.like');
  likeBtn.forEach((btnL) => {
    btnL.addEventListener('click', () => {
      const postId = btnL.value;
      updateLikes(postId);
    });
  });

  // Para recomendar
  const recomBtn = nav.querySelectorAll('.recom');
  recomBtn.forEach((btnR) => {
    btnR.addEventListener('click', () => {
      const postId = btnR.value;
      const userId = auth.currentUser.uid;
      updateRecom(postId, userId);
    });
  });

  return nav;
};

export const showPost = () => {
  publishPost('post', postCallback);
};
