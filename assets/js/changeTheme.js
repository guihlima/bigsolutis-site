document.addEventListener('DOMContentLoaded', function () {
    const btnChangeTheme = document.getElementById('btnChangeTheme')
    const listColors = document.querySelector('.list-colors')
    const body = document.getElementById('body')
    const btnColorlight = document.getElementById('color01')
    const btnColordark = document.getElementById('color02')
    const iconBtn = document.getElementById('iconBtn')

    // Carregar o tema ao carregar a página
    loadTheme();

    function saveTheme(theme, iconClass) {
        localStorage.setItem('theme', theme)
        localStorage.setItem('iconClass', iconClass)
    }

    function loadTheme() {
        // console.log("ENtrou em loadTheme")
        const savedTheme = localStorage.getItem('theme')
        const savedIconClass = localStorage.getItem('iconClass');
        // console.log(savedTheme)
        if (savedTheme && savedIconClass) {
            body.classList.remove('theme-light', 'theme-dark'); // Remove ambas as classes antes de adicionar a correta
            body.classList.add(savedTheme);

            iconBtn.classList.remove('bi-sun-fill', 'bi-moon-fill');
            iconBtn.classList.add(savedIconClass);
        } else {
            // Se não houver tema salvo, define o tema padrão como light e o ícone como sun
            saveTheme('theme-light', 'bi-sun-fill');
            body.classList.add('theme-light');
            iconBtn.classList.add('bi-sun-fill');
        }
    }

    btnChangeTheme.addEventListener('click', function () {
        if (body.classList.contains('theme-light')) {
            body.classList.remove('theme-light')
            body.classList.add('theme-dark')

            iconBtn.classList.remove('bi-sun-fill')
            iconBtn.classList.add('bi-moon-fill')

            saveTheme('theme-dark', 'bi-moon-fill');
        } else {
            body.classList.remove('theme-dark')
            body.classList.add('theme-light')

            iconBtn.classList.remove('bi-moon-fill')
            iconBtn.classList.add('bi-sun-fill')

            saveTheme('theme-light', 'bi-sun-fill');
        }
    })


})