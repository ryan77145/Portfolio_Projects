const contactForm = document.getElementById('contact');

if (contactForm) {
    const banner = document.getElementsByClassName('formsubmittedbanner')[0];
    const close = document.getElementsByClassName('closebtn')[0];

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);

        const response = await fetch('https://www.ryanshill.co/api/contact', {
            method: 'POST',
            body: new URLSearchParams(formData)
        });

        if (response.ok) {
            banner.classList.toggle('active');
        }
    });

    close.addEventListener('click', () => {
        banner.classList.toggle('active');
    });
}
