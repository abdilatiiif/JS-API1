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

  if (
    !characterName.value ||
    !characterAD.value ||
    !characterHP.value ||
    !selectedImg
  )
    return; // hvis inputs er tom, ikke lag character

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
const createEnemyBtn = document.getElementById("generate-enemy");
const enemyContainer = document.getElementById("enemy-creator");

console.log(enemyContainer);

createEnemyBtn.addEventListener("click", () => {
  const id = Math.floor(Math.random() * 100) + 1;

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // bildene lagret på array
  const monsterImg = [
    "assets/swamp-monster.jpg",
    "assets/monster.jpg",
    "assets/dragon.jpg",
  ];

  const enemy = {
    attackDamage: getRandomNumber(10, 40),
    health: getRandomNumber(50, 150),
    Image: monsterImg[Math.floor(Math.random() * monsterImg.length)],
    id: id,
  };

  const enemyHTML = document.createElement("div");
  enemyHTML.innerHTML = `<div id="enemy-display">
  <img id="enemy-img" src=${enemy.Image} class="profile-img" />
  <p id="enemy-name">Type:  Monster 👹 </p>
  <p id="enemy-hp">Health:  ${enemy.health} 🩸</p>
  <p id="enemy-attack">Attack: ${enemy.attackDamage} ⚔️</p>
  </div>`;

  // render monster på siden
  enemyContainer.appendChild(enemyHTML.firstElementChild);
  console.log(enemy);

  // lagre på local storage med egen id
  localStorage.setItem(`enemy${id}`, JSON.stringify(enemy));
});

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.

const fightBtn = document.getElementById("start-fight");

fightBtn.addEventListener("click", () => console.log("start fight"));

// npm test funker
