document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', name: "flux capacitor" },
        { id: 'fc-2050', name: "power laces" },
        { id: 'fs-1987', name: "time circuits" },
        { id: 'ac-2000', name: "low voltage reactor" },
        { id: 'jj-1969', name: "warp equalizer" }
    ];

    const productSelect = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set current year
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    // Set last modified date
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;
});