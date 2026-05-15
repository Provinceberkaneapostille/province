document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.accordion-item');

    items.forEach(item => {
        const button = item.querySelector('.accordion-header');
        const body = item.querySelector('.accordion-body');

        if (!button || !body) {
            return;
        }

        button.setAttribute('aria-expanded', 'false');

        button.addEventListener('click', () => {
            item.classList.toggle('open');
            button.setAttribute('aria-expanded', item.classList.contains('open'));
        });
    });
});
