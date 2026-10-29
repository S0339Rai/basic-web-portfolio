document.querySelectorAll('a'), forEach(link => {
    link.addEventListener('click', function(event) {
        const url = this.getAttribute('href');

        if (
            url &&
            !url.startWith('#') &&
            !url.startWith('http') &&
            this.target !== '_blank'
        ) {
            event.preventDefault();

            document.body.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = url;
            }, 300);
        }
    });
});