
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("last-modified");

// Set current year
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Set last modified date
const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;





let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);
document.getElementById('reviewCount').textContent = reviewCount;