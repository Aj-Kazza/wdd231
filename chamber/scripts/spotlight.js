const spotlightContainer = document.querySelector("#spotlights");

const membersURL = "data/members.json";

async function getMembers() {
  try {
    const response = await fetch(membersURL);

    if (response.ok) {
      const data = await response.json();

      displaySpotlights(data.members);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }
}

function displaySpotlights(members) {
  // Only Silver (2) and Gold (3) members
  const qualifiedMembers = members.filter(
    (member) => member.level === 2 || member.level === 3,
  );

  // Randomize members
  const shuffledMembers = qualifiedMembers.sort(() => Math.random() - 0.5);

  // Pick 3 random companies
  const selectedMembers = shuffledMembers.slice(
    0,
    2 + Math.floor(Math.random() * 2),
  );

  spotlightContainer.innerHTML = "";

  selectedMembers.forEach((member) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${member.name}</h3>

      <img 
        src="${member.image}" 
        alt="${member.name} logo"
      >

      <p>${member.address}</p>

      <p>${member.phone}</p>

      <p>
        Membership:
        ${member.level === 3 ? "Gold" : "Silver"}
      </p>

      <a href="${member.website}" target="_blank">
        Visit Website
      </a>
    `;

    spotlightContainer.appendChild(card);
  });
}

getMembers();
