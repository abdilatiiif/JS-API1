//Her kommer din Javascript-kode. Kommentarene er lagt til for å hjelpe deg med å dele opp oppgavene,
// du kan slette disse hvis du ønsker.

// Del 1: Lag karakter og lagre karakteren i localStorage

// selceting elements
const createCharacterBtn = document.getElementById("create-character");
const characterName = document.getElementById("character-name");
const characterHP = document.getElementById("character-hp");
const characterAD = document.getElementById("attack-damage");
const profilesPic = Array.from(
  document.querySelectorAll(".profile-pics")[0].children
); // viktig å converte HTML collection til array

const helterDiv = document.getElementsByClassName("helter");

let selectedImg;

profilesPic.forEach((img) => {
  img.addEventListener("click", (e) => {
    selectedImg = e.target.src;
  });
});

createCharacterBtn.addEventListener("click", () => {
  const id = Math.floor(Math.random() * 100) + 1;

  if (!characterName.value || !characterAD.value || !characterHP.value) return; // hvis inputs er tom, ikke lag character

  const newCharacter = {
    name: characterName.value,
    attackDamage: characterAD.value,
    health: characterHP.value,
    Image: selectedImg,
    id: id,
  };

  // lagre på local storage med egen id
  localStorage.setItem(`character${id}`, JSON.stringify(newCharacter));

  // legg inn character på siden

  const characterHTML = document.createElement("div");
  characterHTML.innerHTML = `<div id="character-display" class="profile-card">
            <h2>Hero</h2>
            <img
              id="char-img"
              src="${selectedImg}"
              alt="Profilbilde"
            />
            <p id="char-name">Navn: ${characterName.value}</p>
            <p id="char-hp">Helse: ${characterHP.value}</p>
            <p id="char-attack">attack:  ${characterAD.value}</p>
          </div>`;

  helterDiv[0].appendChild(characterHTML.firstElementChild);

  // siden husker heltene etter reload og vises på siden!

  // nullstiller input etter click

  characterName.value = "";
  characterHP.value = "";
  characterAD.value = "";
  selectedImg = null;

  console.log(newCharacter);
});

//Seksjon 2: Generer fiende

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.

// npm test funker
