export const editPost = () => {
  const editPostTemplate = `
  <input type="checkbox" id="btn-mod">
  <div class="containerEdit" id="containerEdit"> 
    <div class="modal-header">    
                  <form id="formPostEdit" class= "formPostEdit">
                          <div class="btn-cerrar">
                          <label for="btn-mod"> X <label>
                          </div>
                          <div class="editIntro">
                          <p class="textIntro">Edita tu post</p>
                          </div>
                          <input type="text"  id= "textPostInputEdit" class="textPostInputEdit" />
                          <div class="btnSave">
                          <button type = "button" id="btnPostEdit" class = "btnPostEdit" type="submit"> Guardar</button>
                          </div>
                  </form>  
              </div>
              <label for="btn-mod" class="cerrar-modal"></label>
          </div> `;
  return editPostTemplate;
};
