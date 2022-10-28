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


/*Join Us Banner */
const day = new Date();
const day2 = new Date();


const today = day.getDay();

if (today < 1 || today > 2) {
    const banner = document.querySelector('.meeting');
    banner.remove();
}  


/* Last visit */

const lastVisit = localStorage.getItem('date');
localStorage.setItem('date', day);

const lastVisitDay = Date.parse(lastVisit);
let numberOfDays = (day - lastVisitDay)/86400000;

if (!numberOfDays) {
    document.querySelector("#lastVisit").textContent = 0;
}
else {
    document.querySelector("#lastVisit").textContent = numberOfDays.toFixed(0);
}
