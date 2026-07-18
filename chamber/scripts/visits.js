
//for visits
const visitDisplay = document.querySelector("#visits")
let timestamp1 = window.localStorage.getItem("visit1");
let timestamp2 = Date.now(window.localStorage.getItem("visit2"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));
console.log(`number of visits: ${numVisits}`)
console.log(`timestamp1: ${timestamp1}`)
if (numVisits !== 0) {
    localStorage.setItem("visit2", timestamp2)
    console.log(`timestamp2: ${timestamp2}`)
    daynum = parseInt(timestamp2) - parseInt(timestamp1)
    console.log(`time difference: ${daynum}`)
    daySince = Math.floor(daynum / (24 * 60 * 60 * 1000));
    console.log(`day since last visit: ${daySince}`)
    visitDisplay.textContent = daySince;
    numVisits = 0;
    if (daySince == 0) {
        document.querySelector('#welcome').innerHTML = "Back so soon! Awesome!";
    }
    else {
        document.querySelector('#welcome').innerHTML = "You last visited " + daySince + " day ago";
    }
} else {
    visitDisplay.textContent = "This is your first visit!";
    let timestamp1 = Date.now(window.localStorage.getItem("visit1"));
    localStorage.setItem("visit1", timestamp1);
    document.querySelector('#welcome').innerHTML = "Welcome! Let us know if you have any questions";
    console.log(`this is your first visit`)
}

numVisits++;
localStorage.setItem("visits-ls", numVisits);