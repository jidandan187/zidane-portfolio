// Satu-satunya JavaScript: tahun di footer. Situs tetap utuh tanpa script ini.
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
