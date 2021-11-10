import { loginUser, inGoogle } from '../lib/firebase.js';

export const loginPage = () => {
  const containerRoot = document.getElementById('root');
  const loginSection = document.createElement('section');
  loginSection.className = 'loginSection';
  const login = `
    <div class='logo'>
        <img alt='logo login' src='./images/logo1.png' class = 'logotype'>   
    </div>
    <div class= 'loginForm'>
        <input type='email' id='loginEmail' class='loginEmail' placeholder='Correo electrónico'>
        <input type='password'id='loginPassword' class='loginPassword' placeholder='Contraseña'>
        <button class='btnLogin' id='btnLogin'>Iniciar sesión</button>
    </div>
    <div class='loginOption'>
        <p>Iniciar sesión con</p>
        <img src='./images/google.png' id='googleLogo' class='googleLogo'>
        <div class='userReg'> ¿No tienes cuenta? <a href='#/register' id='userReg'> <strong>Registrate</strong></a></div>
    </div>
    `;
  loginSection.innerHTML = login;
  containerRoot.appendChild(loginSection);
  document.getElementById('btnLogin').addEventListener('click', () => {
    const logEmail = document.getElementById('loginEmail').value;
    const logPass = document.getElementById('loginPassword').value;
    loginUser(logEmail, logPass);
  });
  document.getElementById('googleLogo').addEventListener('click', () => {
    inGoogle();
  });
  return loginSection;
};
