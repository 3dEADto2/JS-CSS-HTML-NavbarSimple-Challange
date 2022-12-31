const menuIcon = document.querySelector('.menu-icon');
let navbarIsShown = false;

function showNavbar () {
    const navbarEl = document.querySelector('.small-screen-navbar');
    const topContEl = document.querySelector('.top-container');
    navbarEl.classList.toggle('navbar-shown');
    navbarIsShown = navbarIsShown ? false : true;
    topContEl.classList.toggle('box-shadow');
}

function isNavbarShown () {
    if (navbarIsShown && window.innerWidth > 600) {
        showNavbar();
    }
}

menuIcon.addEventListener('click', showNavbar)
window.addEventListener('resize', isNavbarShown);