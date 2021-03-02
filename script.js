const btnMenu = document.getElementById('btn-menu')
const navbarDropdown = document.getElementById('navbarNav')

btnMenu.addEventListener('click',()=>{
    navbarDropdown.classList.toggle('navbar-expanded')
})