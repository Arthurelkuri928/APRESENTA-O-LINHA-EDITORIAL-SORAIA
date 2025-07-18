document.addEventListener('DOMContentLoaded', () => {
    const summaryLinks = document.querySelectorAll('.summary-nav a');

    summaryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const href = this.getAttribute('href');
            
            if (href && href.startsWith('#')) {
                event.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const yOffset = -20; 
                    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

                    window.scrollTo({top: y, behavior: 'smooth'});
                }
            }
        });
    });
});
