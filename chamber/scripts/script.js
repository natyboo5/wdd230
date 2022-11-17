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

// if (!numberOfDays) {
//     document.querySelector("#lastVisit").textContent = 0;
// }
// else {
//     document.querySelector("#lastVisit").textContent = numberOfDays.toFixed(0);
// }


if (!numberOfDays) {
    const numDaysN = document.querySelector("#lastVisit");
    if (numDaysN) { numDaysN.textContent = 0; }
    // document.querySelector("#lastVisit").textContent = 0
}
else {
    const numDaysY = document.querySelector("#lastVisit");
    if (numDaysY) numDaysY.textContent = numberOfDays.toFixed(0);
    // document.querySelector("#lastVisit").textContent = number_mSdayS.toFixed(0);
}

/*** FORM ****/
/*----- Hidden date and time for the join form ----- */

const joinDateCurrent = document.querySelector(".joinDate");
if (joinDateCurrent) { joinDateCurrent.textContent = day }


/*** DIRECTORY *******/

const displayDirectory = (dataDirectory) => {
    dataDirectory.companies.forEach (
        company => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let URL = document.createElement('a');
        let email = document.createElement('p');
        
        name.textContent = `${company.name}`;

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Photo of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
       
        address.textContent = `${company.address}`;
        phoneNumber.textContent = `${company.phoneNumber}`;
        // URL.textContent = `${company.URL}`;
        let linkWebsite = document.createTextNode(company.URL);
        URL.appendChild(linkWebsite);
        URL.href = company.URL;
        URL.target = '_blank';

        // URL.setAttribute('href', company.URL);


        email.textContent = `${company.email}`;
        
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(URL);
        card.appendChild(email);
        document.querySelector('article.directory').appendChild(card);
      }
    )
  }

/*------ JSON application--------*/  
async function getDirectory() {
    const response = await fetch("./json/data.json");
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      displayDirectory(data);
    }
  }
  const dir = document.querySelector('.directory');
  if (dir) {
    getDirectory();
  }

/*------------Button Listeners ----------------*/

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

if (gridbutton || listbutton) {

gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
	display.classList.add("list");
	display.classList.remove("grid");
});
}
