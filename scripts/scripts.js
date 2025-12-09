const nav = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');

    burger.addEventListener('click', function () {
        nav.classList.toggle('active');
        burger.classList.toggle('open');
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            burger.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('active');
            burger.classList.remove('open');
        }
    });
};
nav();

const scrollArrow = () => {
    const scrollToTopButton = document.querySelector('.scroll-to-top');

    if (!scrollToTopButton) {
        return;
    }

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });

    scrollToTopButton.addEventListener('click', event => {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    });
};
scrollArrow();
