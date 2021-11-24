export const editPost = () => {
  const editPostTemplate = `<div class="containerEdit" id="containerEdit"> 
    <div class="modal-header">
    <div class="postEdit">     
                  <form id="formPostEdit" class= "formPostEdit">
                          <div id="btnPostCancelEdit" class = "btnPostCancelEdit" > X </div>
                          <input type="text"  id= "textPostInputEdit" class="textPostInputEdit" />
                          <button type = "button" id="btnPostEdit" class = "btnPostEdit" type="submit"> Guardar</button>
                  </form> 
              </div> 
              </div>
          </div> `;

  /* document.getElementById('btnPostCancelEdit').addEventListener('click', () => {
    window.location.hash = '#/nav';
  }); */
  return editPostTemplate;
};
