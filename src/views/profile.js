export const profilePage = () => {
  const profileSection = document.createElement('section');
  profileSection.className = 'profileSection';

  const profile = ` 
  <header class='profileHeader'>
    <img src='./images/logo1.png' class = 'logotype'>
  </header>
  <div>
  <img src='' alt='' class='profileImg' id='profileImg'>
  <h1 id="profileName" class="profileName">Nombre de usuario</h1>
  </div>
  <main id="profileContent" class="profileContent"></main>
   `;
  profileSection.innerHTML = profile;
  return profileSection;
};
