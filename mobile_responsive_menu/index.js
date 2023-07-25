// wait or confirm that the all the content of the website is loaded
document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.menu-btn').addEventListener('click', showMenu)
    // document.getElementsByClassName('menu-btn').addEventListener('click', showMenu())


    function showMenu() {
        // console.log('clicked')
        const menu = document.querySelector('.mobile-menu-item');
        menu.style.height = '100%'
    }


    document.querySelector('.close-btn').addEventListener('click', closeMenu);

    function closeMenu(){
        const menu = document.querySelector('.mobile-menu-item');
        menu.style.height = '0'
    }
}) 