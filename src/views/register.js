export const registerPage = () => {
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
    <img src='./images/google.png id=googleLogo' class='googleLogo'>
    </div>
    `;
  resgisterSection.innerHTML = register;
  return resgisterSection;
};
