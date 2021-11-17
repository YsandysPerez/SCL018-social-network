import { publishPost } from '../../lib/firebase.js';

export const showPost = () => {
  publishPost('post', PostCallback);
};
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

/*
export const showPost = () => {
  publishPost('post').then((post) => {
    console.log(post);
    const nav = document.getElementById('feed');
    const postUser = document.createElement('div');
    post.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().userPost}`);
      postUser.innerHTML += `
            <div class="post">
              <div src='' class="cardImage"> ${doc.data().userPost}</div>
            </div>
            `;
            nav.appendChild(postUser);
    });
  });
}; 




SOLUCION 2 

export const showPost = () => {
// const feedPost = publishPost('post');
  const array = publishPost('post');
  console.log(publishPost('post'))
  const nav = document.getElementById('feed');
  const postUser = document.createElement('div');
  console.log(array);
  // array.push(publishPost('post'));
  array.forEach((doc) => {
      postUser.innerHTML += `
            <div class="post">
              <div src='' class="cardImage"> ${doc.data().userPost}</div>
            </div>
            `;
            nav.appendChild(array);
  // array.push(publishPost('post'));
    });

    // console.log(`${doc.id} => ${doc.data().userPost}`);
    // console.log(doc)

       
  }; 



*/