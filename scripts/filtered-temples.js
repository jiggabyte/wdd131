

document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        // Add more temple objects here...
        {
            templeName: "Accra Ghana",
            location: "Accra, Ghana",
            dedicated: "2004, January, 11",
            area: 17500,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
        },
        {
            templeName: "Adelaide Australia",
            location: "Adelaide, Australia",
            dedicated: "2000, June, 15",
            area: 10700,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Hong Kong China",
            location: "Hong Kong, China",
            dedicated: "1996, May, 26",
            area: 51921,
            imageUrl:
                "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/400x250/hong_kong_china_temple_baptistry.jpeg"
        },
    ];

    const figureTemplate = (templesData) => {
        return `
            <figure>
                <figcaption>${templesData.templeName}</figcaption>
                <p>Location : ${templesData.location}</p>
                <p>Dedicated: ${templesData.dedicated}</p>
                <p>Area : ${templesData.area}</p>           
                <img src="${templesData.imageUrl}" loading="lazy" alt="${templesData.templeName}" width="400" height="250">
            </figure>
                `;
    }


    const loadHome = () => {
      
        const templesHtml = temples.map(figureTemplate);

        document.querySelector(".gallery").innerHTML = templesHtml.join(" ");
    };

    document.querySelector("#home").addEventListener("click", (e) => {
        e.preventDefault();
        loadHome();
    });

    loadHome();

    const filterOld = () => {

        const templesArr = temples.filter((item) => {
            return Number(item.dedicated.substring(0, 4)) < 1900
        });

        console.log(templesArr);

        const templesHtml = templesArr.map(figureTemplate);

        document.querySelector(".gallery").innerHTML = templesHtml.join(" ");
    };

    document.querySelector("#old").addEventListener("click", (e) => {
        e.preventDefault();
        filterOld();
    });

    const filterNew = () => {

        const templesArr = temples.filter((item) => {
            return Number(item.dedicated.substring(0, 4)) > 2000
        });

        console.log(templesArr);

        const templesHtml = templesArr.map(figureTemplate);

        document.querySelector(".gallery").innerHTML = templesHtml.join(" ");
    }

    document.querySelector("#new").addEventListener("click", (e) => {
        e.preventDefault();
        filterNew();
    });

    const filterLarge = () => {

        const templesArr = temples.filter((item) => {
            return Number(item.area) > 90000
        });

        console.log(templesArr);

        const templesHtml = templesArr.map(figureTemplate);

        document.querySelector(".gallery").innerHTML = templesHtml.join(" ");
    }

    document.querySelector("#large").addEventListener("click", (e) => {
        e.preventDefault();
        filterLarge();
    });

    const filterSmall = () => {

        const templesArr = temples.filter((item) => {
            return Number(item.area) < 10000
        });

        console.log(templesArr);

        const templesHtml = templesArr.map(figureTemplate);

        document.querySelector(".gallery").innerHTML = templesHtml.join(" ");
    }

    document.querySelector("#small").addEventListener("click", (e) => {
        e.preventDefault();
        filterSmall();
    });

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
