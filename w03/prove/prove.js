let selectelem = document.querySelector('.menu-btn');
const nav = document.querySelector('nav')

selectelem.addEventListener('click',ViewMenu);

function ViewMenu()
{
    nav.classList.toggle('navdisplay')
}