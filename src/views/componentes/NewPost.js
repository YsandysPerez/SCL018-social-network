import { addPost } from '../../lib/firebase.js';

export const newPost = () => {
  const containerRoot = document.getElementById('root');
  const containerNewPost = document.createElement('div');
  containerNewPost.id = 'containerNewPostId';
  containerNewPost.className = 'containerNewPost';

  const newAddPost = `
    <header class='bookLovers'> 
      <img src='./images/logo2.png' class= 'logotypeWall' alt = 'logotype'>
    </header>
    <div class='desktopMain'>
    <div class='newPostTitle' id='newPostTitle'>
      <img src='./images/backArrow.png' alt='volver' id='backButton' class='backButton'>
      <img src='' alt='foto de perfil' id='newPostProfilePic' class='newPostProfilePic'>
      <p class='newPostUserName' id="newPostUserName"></p>
    </div>
    <div class='newPostContent'>
      <input type='file' id='newPostImgFile' class='inputFileNewPost' value=''>
      <textarea id='newPostText' name='newPostText' class='newPostTextInput' rows='4'cols='50' placeholder='Escribe aquí tu mensaje..'></textarea>
    <div class= 'imgPublic'>
      <label for='newPostImgFile'> 
      <img class='addImg' src='./images/addImg.png'>
      <label> 
      <input type='submit' value='Publicar' class='postButton' id='publishBtn'>
    </div>
  </div>
`;
  containerNewPost.innerHTML = newAddPost;
  containerRoot.appendChild(containerNewPost);

  document.getElementById('publishBtn').addEventListener('click', () => {
    const contentPost = document.getElementById('newPostText').value;
    addPost(contentPost);
  });

  return containerNewPost;
};
