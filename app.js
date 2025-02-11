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
            <p id="char-name">Navn: ${characterName.value} 🧍🏾‍♂️</p>
            <p id="char-hp">Helse: ${characterHP.value} 🩸</p>
            <p id="char-attack">attack:  ${characterAD.value} ⚔</p>
          </div>`;

  helterDiv[0].appendChild(characterHTML);

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

// alle monstere
const monsterImg = [
  "assets/swamp-monster.jpg",
  "assets/monster.jpg",
  "assets/dragon.jpg",
];

const heroImg = [
  "assets/hunter.jpg",
  "assets/mage.webp",
  "assets/death-knight.jpeg",
];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const id = Math.floor(Math.random() * 100) + 1;

createEnemyBtn.addEventListener("click", () => {
  // bildene lagret på array
  const id = Math.floor(Math.random() * 100) + 1;

  const enemy = {
    type: "monster",
    attackDamage: getRandomNumber(10, 40),
    health: getRandomNumber(50, 150),
    Image: monsterImg[Math.floor(Math.random() * monsterImg.length)],
    id: id,
  };
  // lagre på local storage med egen id
  localStorage.setItem(enemy.type + id, JSON.stringify(enemy));

  const enemyHTML = document.createElement("div");
  enemyHTML.innerHTML = `<div id="enemy-display">
  <img id="enemy-img" src=${enemy.Image} class="profile-img" />
  <p id="enemy-name">Type:  Monster 👹 </p>
  <p id="enemy-hp">Health:  ${enemy.health} 🩸</p>
  <p id="enemy-attack">Attack: ${enemy.attackDamage} ⚔️</p>
  </div>`;

  // render monster på siden
  enemyContainer.appendChild(enemyHTML);
  console.log(enemy);
});

// Seksjon 3: Sloss!
//Du skal vise frem helten og fienden. Se HTML-dokumentet for hvordan fremvisningen skal se ut, med tanke på hvilke tagger, hierarki og hvilke klasser de skal ha.
//Du skal lage den strukturen som vist i HTML, her i Javascript og legge de til i div'en "battle-arena" fra HTML.

const fightBtn = document.getElementById("start-fight");
const battle = document.getElementById("battle");
const result = document.getElementById("battle-result");

fightBtn.addEventListener("click", () => {
  battle.innerHTML = "";

  const enemy = {
    attackDamage: getRandomNumber(10, 40),
    health: getRandomNumber(50, 150),
    Image: monsterImg[Math.floor(Math.random() * monsterImg.length)],
    id: id,
  };

  const hero = {
    attackDamage: getRandomNumber(10, 40),
    health: getRandomNumber(50, 150),
    Image: heroImg[Math.floor(Math.random() * monsterImg.length)],
    id: id,
  };

  let fightHTML = document.createElement("div");

  fightHTML.innerHTML = `  <div id="character-display" class="profile-card">
          <h2>Helten</h2>
          <img id="char-img" src=${hero.Image} alt="Profilbilde" />
          <p id="char-name"></p>
          <p id="char-hp">Health: ${hero.health} 🩸</p>
          <p id="char-attack">Attack Damage: ${hero.attackDamage} ⚔️</p>
        </div> 
        
        <div id="enemy-fight-display" class="profile-card">
          <h2>Fiende</h2>
          <img id="enemy-fight-img" src=${enemy.Image} alt="Fiendens profilbilde" />
          <p id="enemy-fight-name"></p>
          <p id="enemy-fight-hp"> Health: ${enemy.health} 🩸</p>
          <p id="enemy-fight-attack"> Attack Damage: ${enemy.attackDamage} ⚔️</p>
        </div>`;

  // render fight på siden
  battle.appendChild(fightHTML);

  result.innerHTML =
    hero.health === enemy.health
      ? "uavgjort"
      : `${enemy.health < hero.health ? "Helten vant" : "Fienden vant"}`;

  fightHTML = "";
});

// Seksjon 4: Tester!
/*
// npm test funker, husk å kommenter ut all koden først før du bruker testene
////////////////////////////////////////////////////////////
//test 1

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// test 2

const newCharacter = {
  name: "Hero",
  health: 100,
  attackDamage: 25,
  Image: "image.jpg",
  id: 1,
};

// test 3

function hvemVinner(hero, enemy) {
  return hero.health === enemy.health
    ? "uavgjort"
    : `${enemy.health < hero.health ? "Helten vant" : "Fienden vant"}`;
}

module.exports = { getRandomNumber, newCharacter, hvemVinner };
*/
