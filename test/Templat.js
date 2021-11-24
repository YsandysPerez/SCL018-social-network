import {  } from '../src/lib/firebase.js';

function PostCallback(posts) {
  const nav = document.getElementById('feed');
  nav.innerHTML = '';
  const prueba = (element) => {
    console.log(element);
    const postUser = document.createElement('div');
    /* postUser.innerHTML += `
    <div class='allPost'>
    <div class ='name'>${element.userName}</div>
     <div class='post'>
      <div class="feedPost"> ${element.userPost}</div>
     </div>
     <div class='imgPost'>
       <div class='btnLike'>
       <img class='img' id='btnLike' src='./images/btnlike.png'></img>
       <p class="number-likes" id="counter-likes"> x me gusta</p>
        </div>
        <div class='btnRecom'>
        <img class='img' src='./images/btnrecom.png'>
        <p> x recomiendo </p>
        <img class='img' id='delBtn'src='./images/basura.png' value='${auth.id}'>
        </div>
     </div>
    </div>
    `; */
    const htmlTemplate = `
    <div class='allPost'>
    <div class ='name'>${element.userName}</div>
     <div class='post' id='${element.id}'>
      <div class="feedPost"> ${element.userPost}</div>
     </div>
     <div class='imgPost'>
       <div class='btnLike'>
       <img class='img' id='btnLike' src='./images/btnlike.png'></img>
       <p class="number-likes" id="counter-likes"> x me gusta</p>
        </div>
        <div class='btnRecom'>
        <img class='img' src='./images/btnrecom.png'>
        <p> x recomiendo </p> `;

    const htmlTemplate2 = `</div>
     </div>
    </div>
    `;
    let htmlBtn = ``;

    if (element.userId === auth.currentUser.uid) {
      htmlBtn = `<button class='btnDelete' value='${element.id}'>
                  <img class='img' src='./images/basura.png'>
                </button>`;
    }

    postUser.innerHTML += htmlTemplate + htmlBtn + htmlTemplate2;
    nav.appendChild(postUser);
    // console.log(element.userPost);
  };
  posts.forEach(prueba);

  const btnDeleteList = document.querySelectorAll('.btnDelete');
  btnDeleteList.forEach((item) => {
    console.log(item);
    console.log(item.value);
    item.addEventListener('click', () => deletePost(item.value));
  });
  return nav;
}

export const showPost = () => {
  publishPost('post', PostCallback);
  // getCurrentUserData();
};
