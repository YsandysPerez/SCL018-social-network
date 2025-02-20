import { createUser } from '../lib/firebase.js';

export const registerPage = () => {
  const containerRoot = document.getElementById('root');
  const resgisterSection = document.createElement('section');
  resgisterSection.className = 'resgisterSection';

  const register = `
   <input type="checkbox" id="btn-moda">
    <div class="desktopRegister">
      <div class= "registerContainer">
        <div class="lbl-moda">
        <label for="btn-moda"><strong>X</strong></label>
        </div>
        <div class= "regisLogo">
            <img  src="./images/logo2.png" class = "logotypeRegis">   
        </div>
        <div class= "registerForm">
          <input type="text" id="userRegister" class="userRegister" placeholder="Usuario">
          <input type="email" id="resgiterEmail" class="resgiterEmail" placeholder="Correo electrónico">
          <input type="password" id="registerPassword" class="registerPassword" placeholder="Contraseña">
          <a href="#/"><button class="btnRegister" id="btnRegister">Regístrate</button></a>
        </div>
      </div>
    </div>
    `;
  resgisterSection.innerHTML = register;
  containerRoot.appendChild(resgisterSection);
  document.getElementById('btnRegister').addEventListener('click', () => {
    const newEmail = document.getElementById('resgiterEmail').value;
    const newPass = document.getElementById('registerPassword').value;
    const newName = document.getElementById('userRegister').value;
    createUser(newEmail, newPass, newName);
  });
  return resgisterSection;
};
