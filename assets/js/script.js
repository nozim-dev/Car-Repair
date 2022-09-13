function ToggleNavBar() {
  let NavBar = document.querySelector(".menu_bar");
  let animBar = document.querySelector(".fa-bars");
  animBar.classList.toggle("anim_bar");
  NavBar.classList.toggle("nav_none");
}
