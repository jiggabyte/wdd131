

document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;

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
            headerElem.style.height = '110px';
            headerElemTitle.classList.remove('close');
        }
        hamButton.classList.toggle('open');
    });


});
