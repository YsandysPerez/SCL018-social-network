export const wall = () => {
  const divWall = document.createElement('div');
  divWall.className = 'wall';
  const viewWall = `
<header> 
<img src='./images/logo2.png' class = 'logotypeWall' alt = 'logotype'>
</header>
<nav class = 'navWall'>
    <img src="./images/home.png">
    <img src="./images/newpost.png">
    <img src="./images/getout.png">
  </nav>
    `;
  divWall.innerHTML = viewWall;
  return divWall;
};
