function Rolagem() {
    function rolar(event) {
        event.preventDefault(); 
        var rol = event.target.getAttribute('href'); 
        var targetElement = document.querySelector(rol);
        if (targetElement)
            targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    function inicia() {
        document.querySelectorAll('nav.menu-desktop a').forEach(function(link) {
            link.addEventListener('click', rolar);
        });
    }

    window.addEventListener('load', inicia);
}

Rolagem();