/* Primary Nav Button */
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamButton").classList.toggle("open");
}
const x = document.getElementById('hamButton')
x.onclick = toggleMenu;


/*JS for date */

document.querySelector(".date").textContent = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(new Date());


/*Last Modified */
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastupdated').textContent = `Last Modification: ${document.lastModified}`;