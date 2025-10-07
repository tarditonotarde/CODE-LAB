/* ===========================
   GAME UNO TAROT (Flip + Animate + 3D Button)
   =========================== */

const cards = [
  "Yellow-0", "Yellow-1", "Yellow-2", "Yellow-3", "Yellow-4", "Yellow-5", "Yellow-6", "Yellow-7", "Yellow-8", "Yellow-9",
  "Yellow-Draw2-1", "Yellow-Draw2-2", "Yellow-Skip-1", "Yellow-Skip-2", "Yellow-Reverse-1", "Yellow-Reverse-2",
  "Blue-0", "Blue-1", "Blue-2", "Blue-3", "Blue-4", "Blue-5", "Blue-6", "Blue-7", "Blue-8", "Blue-9",
  "Blue-Draw2-1", "Blue-Draw2-2", "Blue-Skip-1", "Blue-Skip-2", "Blue-Reverse-1", "Blue-Reverse-2",
  "Red-0", "Red-1", "Red-2", "Red-3", "Red-4", "Red-5", "Red-6", "Red-7", "Red-8", "Red-9",
  "Red-Draw2-1", "Red-Draw2-2", "Red-Skip-1", "Red-Skip-2", "Red-Reverse-1", "Red-Reverse-2",
  "Green-0", "Green-1", "Green-2", "Green-3", "Green-4", "Green-5", "Green-6", "Green-7", "Green-8", "Green-9",
  "Green-Draw2-1", "Green-Draw2-2", "Green-Skip-1", "Green-Skip-2", "Green-Reverse-1", "Green-Reverse-2",
  "Wild-1", "Wild-2", "Wild-3", "Wild-4", "Draw4-1", "Draw4-2", "Draw4-3", "Draw4-4"
];

const meanings = {
  "Yellow-0": "Nothing changes. You’ll still fail spectacularly today.",
  "Yellow-1": "A tiny attempt at life… doomed from the start.",
  "Yellow-2": "Two paths, both ending in glorious disaster.",
  "Yellow-3": "Three mistakes you ignored like a genius idiot.",
  "Yellow-4": "Four reasons nobody gives a damn about you.",
  "Yellow-5": "Five chances you blew, keep it up.",
  "Yellow-6": "Six reminders that your existence is a bad plan.",
  "Yellow-7": "Seven times you lied to yourself. Pathetic.",
  "Yellow-8": "Eight excuses to keep screwing up your life.",
  "Yellow-9": "Nine broken promises, including the one to yourself.",
  "Yellow-Draw2-1": "Draw two more disasters, you’ll need them.",
  "Yellow-Draw2-2": "Another pair of fails, your misery expands.",
  "Yellow-Skip-1": "Skipping responsibilities? Hilarious, try harder.",
  "Yellow-Skip-2": "Another ignore-fest, your life rots faster.",
  "Yellow-Reverse-1": "Spin your life… straight into the void.",
  "Yellow-Reverse-2": "Another turn… your luck died long ago.",

  "Blue-0": "Nothing blue, just silent existential dread.",
  "Blue-1": "A mediocre day filled with minor torment.",
  "Blue-2": "Two new annoyances for your fragile ego.",
  "Blue-3": "Three pointless sighs wasted at your reflection.",
  "Blue-4": "Four signs someone secretly wishes you were dead.",
  "Blue-5": "Five ignored messages, like your existence itself.",
  "Blue-6": "Six tasks doomed to fail from the start.",
  "Blue-7": "Seven complaints no one gives a damn about.",
  "Blue-8": "Eight tiny lies crushing your soul like cement.",
  "Blue-9": "Nine perfect chances to ruin everything, take them.",
  "Blue-Draw2-1": "Draw two more failures, chaos included.",
  "Blue-Draw2-2": "Another dose of blue misery, enjoy it.",
  "Blue-Skip-1": "Skip something… probably your dignity.",
  "Blue-Skip-2": "Ignoring again won’t save your soul.",
  "Blue-Reverse-1": "Reverse… hope abandoned ship years ago.",
  "Blue-Reverse-2": "Another pointless turn to total despair.",

  "Red-0": "Zero passion, maximum rage contained.",
  "Red-1": "One fight, fully your fault, naturally.",
  "Red-2": "Two mistakes that will torch everything.",
  "Red-3": "Three lies, no one even blinks anymore.",
  "Red-4": "Four insults ready to demolish reality.",
  "Red-5": "Five idiotic decisions you’ll repeat gladly.",
  "Red-6": "Six destiny slaps, metaphoric but painful.",
  "Red-7": "Seven times your temper tanked spectacularly.",
  "Red-8": "Eight signs screaming: ‘leave now, dummy.’",
  "Red-9": "Nine ways to ruin the night, all achieved.",
  "Red-Draw2-1": "Draw two more reds, crimson chaos incoming.",
  "Red-Draw2-2": "Two extra disasters, life hates you.",
  "Red-Skip-1": "Skip something… sanity probably.",
  "Red-Skip-2": "Another leap into utter chaos.",
  "Red-Reverse-1": "You return… nothing improved, naturally.",
  "Red-Reverse-2": "Another spin, drama remains undefeated.",

  "Green-0": "Zero hope, everything festers in moldy green.",
  "Green-1": "A boring day, fueled by someone else’s envy.",
  "Green-2": "Two bad choices, pick, it won’t matter.",
  "Green-3": "Three unsolicited critiques, painfully accurate.",
  "Green-4": "Four shameful memories stalking you relentlessly.",
  "Green-5": "Five pathetic excuses that convince no one.",
  "Green-6": "Six steps straight into your personal apocalypse.",
  "Green-7": "Seven useless tips, as meaningless as you.",
  "Green-8": "Eight green problems, all non-edible, like your life.",
  "Green-9": "Nine failed attempts to blend in with society.",
  "Green-Draw2-1": "Two extra hurdles, misery upgraded.",
  "Green-Draw2-2": "Another sticky pair of green catastrophes.",
  "Green-Skip-1": "Skipping won’t save you from humiliation.",
  "Green-Skip-2": "Ignore again, watch things rot faster.",
  "Green-Reverse-1": "Unexpected spin… your plan collapses spectacularly.",
  "Green-Reverse-2": "Another twist to watch everything crumble.",

  "Wild-1": "Your freedom? A laughable illusion.",
  "Wild-2": "Wild chaos, meaningless, perfectly designed for you.",
  "Wild-3": "Pure madness. Enjoy it before it devours you.",
  "Wild-4": "Everything burns, guess who’s culpable? You.",
  "Draw4-1": "Four catastrophes, straight to your lap. Lucky.",
  "Draw4-2": "Another foursome of calamities, add to your misery.",
  "Draw4-3": "Four fresh disasters, just for you, ego intact.",
  "Draw4-4": "Ultimate unlucky combo: four lethal hits, no mercy."
};

function initUnoTarot() {
  const tarotContainer = document.getElementById("uno-tarot");
  if (!tarotContainer) return;

  tarotContainer.innerHTML = "";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("uno-tarot-main");
  tarotContainer.appendChild(mainContainer);

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function drawCards(num = 6) {
    mainContainer.innerHTML = "";
    const drawn = shuffle(cards).slice(0, num);
    const rows = [1, 5, 0];
    let index = 0;

    rows.forEach(count => {
      const row = document.createElement("div");
      row.classList.add("uno-tarot-row");

      for (let i = 0; i < count && index < drawn.length; i++, index++) {
        const card = drawn[index];
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("uno-card-wrapper");

        const cardElement = document.createElement("div");
        cardElement.classList.add("uno-card");
        cardElement.style.width = "100px";
        cardElement.style.height = "165px";

        const inner = document.createElement("div");
        inner.classList.add("uno-card-inner");

        const front = document.createElement("img");
        front.src = "/CODE-LAB/PLAYGROUND-ITEMS/UNO-CARDS/Cover-uno.svg";
        front.classList.add("uno-card-front");

        const back = document.createElement("img");
        back.src = `/CODE-LAB/PLAYGROUND-ITEMS/UNO-CARDS/${card}.svg`;
        back.classList.add("uno-card-back");

        inner.appendChild(front);
        inner.appendChild(back);
        cardElement.appendChild(inner);
        cardWrapper.appendChild(cardElement);

        const meaningDiv = document.createElement("div");
        meaningDiv.classList.add("uno-meaning");
        cardWrapper.appendChild(meaningDiv);

        cardElement.addEventListener("click", () => {
          cardElement.classList.toggle("flipped");
          meaningDiv.innerText = cardElement.classList.contains("flipped")
            ? meanings[card] || "✨ Interpreta según tu intuición"
            : "";
        });

        cardWrapper.style.opacity = "0";
        cardWrapper.style.transform = "translateY(50px)";
        setTimeout(() => {
          cardWrapper.style.transition = "all 0.6s ease";
          cardWrapper.style.opacity = "1";
          cardWrapper.style.transform = "translateY(0)";
        }, i * 100);

        row.appendChild(cardWrapper);
      }

      mainContainer.appendChild(row);
    });

    mainContainer.appendChild(button);
  }

  const button = document.createElement("button");
  button.classList.add("uno-tarot-button");

  const frontBtn = document.createElement("span");
  frontBtn.classList.add("face", "front");
  frontBtn.innerText = "draw your doom 🔮";

  const topBtn = document.createElement("span");
  topBtn.classList.add("face", "top");
  topBtn.innerText = "draw your doom 🔮";

  button.appendChild(frontBtn);
  button.appendChild(topBtn);

  button.addEventListener("click", () => drawCards(7));

  drawCards(7);
}

document.addEventListener("DOMContentLoaded", initUnoTarot);
