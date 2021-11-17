export const profilePage = () => {
  const containerRoot = document.getElementById('root');
  const profileSection = document.createElement('section');
  profileSection.className = 'profileSection';

  const profile = ` 
  <header class='profileHeader'>
    <img src='./images/logo2.png' class = 'logotypePro'>
  </header>
  <div>
  <img src='' alt='' class='profileImg' id='profileImg'>
  <h1 id="profileName" class="profileName">Nombre de usuario</h1>
  </div>
  <main id="profileContent" class="profileContent"></main>
  `;
  profileSection.innerHTML = profile;
  containerRoot.appendChild(profileSection);
  return profileSection;
};
