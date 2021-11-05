import { createUser, inGoogle } from '../lib/firebase.js';

export const registerPage = () => {
  const containerRoot = document.getElementById('root');
  const resgisterSection = document.createElement('section');
  resgisterSection.className = 'resgisterSection';

  const register = `
      <div>
            <img  src='./images/logo1.png' class = 'logotype'>   
      </div>
      <div class= 'registerForm'>
      <input type='text' id='userRegister' class='userRegister' placeholder='Usuario'>
      <input type='email' id='resgiterEmail' class='resgiterEmail' placeholder='Correo electrónico'>
      <input type='password'id='registerPassword' class='registerPassword' placeholder='Contraseña'>
      <button class='btnRegister' id='btnRegister'>Regístrate</button>
      </div>
      <div class='registerOption'>
      <p>Regístrate con</p>
      <img src='./images/google.png' id='googleLogo' class='googleLogo'>
      </div>
      `;
  resgisterSection.innerHTML = register;
  containerRoot.appendChild(resgisterSection);
  document.getElementById('btnRegister').addEventListener('click', () => {
    const newEmail = document.getElementById('resgiterEmail').value;
    const newPass = document.getElementById('registerPassword').value;
    createUser(newEmail, newPass);
    // validUser(newEmail);
  });
  document.getElementById('googleLogo').addEventListener('click', () => {
    inGoogle();
  });
  return resgisterSection;
};
