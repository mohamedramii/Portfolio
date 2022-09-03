const menu = document.getElementById('menu');
const actions = document.getElementById('actions');

menu.addEventListener('click', () => {
handleMenu();
})

function handleMenu(){
    menu.classList.toggle('active');
    actions.classList.toggle('active');
}