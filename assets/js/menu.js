document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('menuIcon');
    const nav = document.querySelector('.nav-mobile');

    btnMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickOnButton = btnMenu.contains(event.target);
        const isMenuActive = nav.classList.contains('active');
        if (isMenuActive && !isClickInsideMenu && !isClickOnButton) {
            btnMenu.classList.remove('active');
            nav.classList.remove('active');
        }
    });
});