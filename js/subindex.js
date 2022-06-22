const burgers = document.querySelector('.burgers');
const nav_menu = document.querySelector('.nav_menu');
const back = document.querySelector('.nav_back');

const handleBurgerClick = () => {
  burgers.classList.toggle("active");
  nav_menu.classList.toggle("active");
  back.classList.toggle("active");
}
const handleBackClick = () =>{
  burgers.classList.remove("active");
  nav_menu.classList.remove("active");
  back.classList.remove("active");
}

back.addEventListener('click', handleBackClick);
burgers.addEventListener('click', handleBurgerClick);