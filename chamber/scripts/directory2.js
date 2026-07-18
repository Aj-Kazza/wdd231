const baseURL = "https://aj-kazza.github.io/wdd231/chamber/";
//const linksURL = "https://aj-kazza.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#cards");
const linksURL = "data/members.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);

    if (!response.ok) {
      throw new Error("Unable to fetch member data.");
    }

    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error(error);
  }
}

getLinks();

const displayMembers = (members) => {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    const card = document.createElement("section");
    const fullName = document.createElement("p");
    const logo = document.createElement("img");
    const address = document.createElement("p");
    const phone = document.createElement("p");
    const url = document.createElement("a");
    const level = document.createElement("p");

    fullName.classList.add("member-name");
    level.classList.add("membership");

    let membership = "";
    switch (member.level) {
      case 1:
        membership = "Member";
        break;
      case 2:
        membership = "Silver";
        break;
      case 3:
        membership = "Gold";
        break;
    }

    // Build the h2 content out to show the member's full name
    fullName.textContent = `${member.name}`; // fill in the blank

    // Build the image logo by setting all the relevant attributes
    logo.setAttribute("src", member.image);
    logo.setAttribute("alt", `Logo of ${member.name}`); // fill in the blank
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "340");
    logo.setAttribute("height", "440");
    address.textContent = `Address: ${member.address}`;
    phone.textContent = `Phone: ${member.phone}`;
    url.textContent = `${member.website}`;
    url.setAttribute("href", member.website);
    level.textContent = `Membership: ${membership}`;

    // Append the section(card) with the created elements

    card.appendChild(fullName); //fill in the blank
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(url);
    card.appendChild(level);

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
};
