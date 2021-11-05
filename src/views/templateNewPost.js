export const newPost = () => {
  const containerNewPost = document.createElement('div');
  containerNewPost.id = 'containerNewPostId';
  containerNewPost.className = 'containerNewPost';

  const newAddPost = `
  <div class='desktopMain'>
  <div class='newPostTitle' id='newPostTitle'>
  <img src='./images/backArrow.png' alt='volver' id='backButton' class='backButton'>Nueva Publicación
  </div>
  <main id='newPostContent' class='newPostContent'>
  <div id='newPostUserInfo' class='newPostUserInfo'>
  <img src='' alt='foto de perfil' id='newPostProfilePic' class='newPostProfilePic'>
  <p class='newPostUserName' id="newPostUserName"></p>
  </div>

  <div class='newPostContent'>
      <input type='file' id='newPostImgFile' class='inputFileNewPost' value=''>
      <textarea id='newPostText' name='newPostText' class='newPostTextInput' rows='4'cols='50' placeholder='Escribe aquí tu mensaje..'></textarea>
      <label for='newPostImgFile'>
      <img class='' src='./images/addImg.png'>
      <label>
      <input type='submit' value='Publicar' class='postButton' id='publishBtn'>
  </div>

  </main>
  
<footer class='fixedFooter'>
</footer>
</div>
`;
  containerNewPost.innerHTML = newAddPost;

  containerNewPost.innerHTML = newAddPost;
  return containerNewPost;
};
