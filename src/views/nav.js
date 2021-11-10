export const wall = () => {
  const divWall = document.createElement('div');
  divWall.className = 'wall';
  const viewWall = `
<header class='logotypeWall'> 
<img src='./images/logo2.png' class = 'logoWall' alt = 'logotype'>
</header>
<nav class = 'navWall'>
    <img class='icon' src="./images/home.png">
    <img class='icon' src="./images/newpost.png">
    <img class='icon' src="./images/getout.png">
  </nav>
    `;
  divWall.innerHTML = viewWall;
  return divWall;
};
