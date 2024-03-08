var toggler = document.getElementById('toggler');
var isBlack = true;

toggler.addEventListener('click', function() {
    if (isBlack) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        // Úprava odkazů
        document.querySelectorAll('a').forEach(function(link) {
            link.classList.remove('dark-mode');
            link.classList.add('light-mode');
        });
        // Úprava položek seznamu
        var navlinks = document.querySelectorAll('.navigation ul li a');
        navlinks.forEach(function(item) {
            item.classList.add('light-mode');
            item.classList.remove('dark-mode');
        });

        var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(function(item) {
            item.classList.add('light-mode');
            item.classList.remove('dark-mode');
        });
        isBlack = false;
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        // Úprava odkazů
        document.querySelectorAll('a').forEach(function(link) {
            link.classList.remove('light-mode');
            link.classList.add('dark-mode');
        });
        // Úprava položek seznamu
        var navlinks = document.querySelectorAll('.navigation ul li a');
        navlinks.forEach(function(item) {
            item.classList.remove('light-mode');
            item.classList.add('dark-mode');
        });

        var headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headers.forEach(function(item) {
            item.classList.remove('light-mode');
            item.classList.add('dark-mode');
        });
        isBlack = true;
    }
});


window.addEventListener('scroll', function() {
    var navigation = document.querySelector('.navigation');
    var scrollPosition = window.scrollY;

    // Změna barvy navigačního menu
    if (scrollPosition > 100) { // Pokud uživatel posunul stránku o více než 100px dolů
        navigation.classList.add('bg-blur'); // Přidat novou třídu
    } else {
        navigation.classList.remove('bg-blur'); // Odebrat třídu
    }
});
