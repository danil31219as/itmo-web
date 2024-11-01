(function() {
    document.addEventListener('DOMContentLoaded', function() {
        const startTime = performance.timing.navigationStart;
        const endTime = performance.timing.loadEventEnd;
        let timing = performance.getEntriesByType('navigation')[0];
        const loadTime = timing.responseStart - timing.requestStart;

        const footer = document.querySelector('#load-time');
        footer.textContent = `Время загрузки страницы: ${loadTime} мс`;

        const currentPage = document.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('font-bold', 'text-orange-700');
            }
        });
    });
})();
