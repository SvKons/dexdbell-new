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

    document.addEventListener('DOMContentLoaded', function () {
        const currentPath = window.location.pathname;
        const currentPage = currentPath === '/' ? '/' : '/' + currentPath.split('/').filter(Boolean).pop();
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('link_active');
            }
        });
    });
};
nav();

const tabs = () => {
    const buttons = document.querySelectorAll('.tabs__button');
    const panels = document.querySelectorAll('.tabs__panel');

    if (buttons.length === 0 || panels.length === 0) {
        console.warn('Tabs: элементы не найдены');
        return;
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('tabs__button_active'));
            button.classList.add('tabs__button_active');

            panels.forEach(panel => panel.classList.remove('tabs__panel_active'));

            const targetPanel = document.getElementById(button.dataset.tab);

            if (targetPanel) {
                targetPanel.classList.add('tabs__panel_active');
            } else {
                console.error(`Панель с id="${button.dataset.tab}" не найдена`);
            }
        });
    });
};
tabs();

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
