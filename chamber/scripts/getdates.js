const currentYear = document.querySelector('#currentyear')
const lastModified = document.querySelector('#lastModified')
currentYear.innerHTML = new Date().getFullYear()
lastModified.innerHTML = document.lastModified