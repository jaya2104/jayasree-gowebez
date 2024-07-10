// getting the element
const Menu = document.getElementById("menu-toggle");
const Close = document.getElementById("close");
const Nav = document.querySelector(".nav-links");
// click event added to show navbar
Menu.addEventListener('click', function() {
    Nav.classList.toggle('show');
});
// click event added to show navbar
Close.addEventListener('click', function() {
    Nav.classList.remove('show');
    Nav.classList.toggle('hide');
});