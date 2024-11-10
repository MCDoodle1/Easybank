document.addEventListener("DOMContentLoaded", function () {
  const menuIconOpen = document.querySelector(".menu-icon-open");

  menuIconOpen.onclick = function () {
    menuIconOpen.classList.toggle("menu-icon-open");
    menuIconOpen.classList.toggle("menu-icon-close");
  };
});
