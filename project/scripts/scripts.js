document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (contactForm !== null) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            alert('Your message has been sent! Thank you for contacting us.');
        });
    }


    // Hamburger menu functionality
    const nav = document.querySelector("nav ul");

    // header mobile background expansion
    const headerElem = document.querySelector('header');
    const headerElemTitle = document.querySelector('h1');

    const hamButton = document.querySelector('#menu');

    let headerCheck = false;

    hamButton.addEventListener("click", () => {
        nav.classList.toggle("open");
        headerCheck = !headerCheck;
        if (headerCheck) {
            headerElem.style.height = '250px';
            headerElemTitle.classList.add('close');
        } else {
            headerElem.style.height = '250px';
            headerElemTitle.classList.remove('close');
        }
        hamButton.classList.toggle('open');
    });
});
