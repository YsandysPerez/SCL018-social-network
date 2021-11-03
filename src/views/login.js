// página de inicio
export const loginPage = () => {
  const loginSection = document.createElement('section');
  loginSection.className = 'loginSection';

  const login = `
    <div>
        <img  src='./images/logo1.png' class = 'logotype'>   
    </div>
    <div class= 'loginForm'>
        <input type='email' id='loginEmail' class='loginEmail' placeholder='Correo electrónico'>
        <input type='password'id='loginPassword' class='loginPassword' placeholder='Contraseña'>
        <button class='btnLogin' id='btnLogin'>Iniciar sesión</button>
    </div>
    <div class='loginOption'>
        <p>Iniciar sesión con</p>
        <img src='./images/google.png id=googleLogo' class='googleLogo'>
        <div class=''> ¿No tienes cuenta? <a href='' id=''>Registrate</a></div>
    </div>
    `;
  loginSection.innerHTML = login;
  return loginSection;
};
