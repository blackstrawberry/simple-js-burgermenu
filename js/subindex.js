const burgers = document.querySelector('.burgers');
const nav_menu = document.querySelector('.nav_menu');
let isburger = false;

const handleBurgerClick = () => {
  if(isburger === false){
    isburger = true;
    burgers.classList.add("active");
    nav_menu.classList.add("active");
  }else{
    isburger = false;
    burgers.classList.remove("active");
    nav_menu.classList.remove("active");
  }
}


burgers.addEventListener('click', handleBurgerClick);