/* ===========================
   GLOBAL JS UNIFICADO PORTFOLIO
   =========================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ===========================
     NAV ACTIVE LINK (HEADER, STUFFS, FOOTER)
     =========================== */
  const activateNavLinks = (selector) => {
    const navLinks = document.querySelectorAll(selector);
    let currentPath = window.location.pathname.split("/").pop().replace("-dark", "");
    if (!currentPath) currentPath = "index.html";

    navLinks.forEach(link => {
      let linkFile = link.getAttribute("href").split("/").pop().replace("-dark", "");
      if (linkFile === currentPath || (linkFile === "index.html" && currentPath === "index.html")) {
        link.classList.add("active");
        if (link.parentElement) link.parentElement.classList.add("active");
      } else {
        link.classList.remove("active");
        if (link.parentElement) link.parentElement.classList.remove("active");
      }
    });
  };

  activateNavLinks("#cubicle > .links a");      // header
  activateNavLinks(".stuffs-list a");           // stuffs
  activateNavLinks(".stuffooter-list a");       // footer

  /* ===========================
     DARK MODE DETECCIÓN
     =========================== */
  const isDark = window.location.pathname.toLowerCase().includes("/dark-mode/");

  /* ===========================
     DARK MODE TOGGLE
     =========================== */
  const lampToggle = document.getElementById("dark-toggle");
  if (lampToggle) {
    lampToggle.addEventListener("click", () => {
      const path = window.location.pathname;
      if (isDark) {
        const file = path.split("/").pop().replace("-dark", "");
        window.location.href = "/" + file;  // Volver a raíz
      } else {
        const file = path.split("/").pop().replace(".html", "-dark.html");
        window.location.href = "DARK-MODE/" + file; // Ir a DARK-MODE
      }
    });
  }

  /* ===========================
     ACTUALIZAR LINKS EN DARK MODE
     =========================== */
  if (isDark) {
    const navLinks = document.querySelectorAll("#cubicle > .links a, .stuffs-list a, .stuffooter-list a");
    navLinks.forEach(link => {
      const file = link.getAttribute("href").split("/").pop();
      if (!file.includes("-dark")) {
        link.setAttribute("href", "/DARK-MODE/" + file.replace(".html", "-dark.html"));
      }
    });
  }

  /* ===========================
     STUFFS LINKS: SALIR DARK MODE
     =========================== */
  const stuffsLinks = document.querySelectorAll(".stuffs-list li a");
  stuffsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (isDark) {
        e.preventDefault();
        let targetHref = link.getAttribute("href");
        targetHref = "/" + targetHref.split("/").pop().replace("-dark", "");
        window.location.href = targetHref;
      }
    });
  });

  /* ===========================
     INDEX PAGE EYES
     =========================== */
  const eyes = document.querySelectorAll('.ojo-svg');
  document.addEventListener('mousemove', (e) => {
    eyes.forEach(eye => {
      const pupil = eye.querySelector('#pupila');
      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(15, Math.hypot(dx, dy) / 10);

      const isRightEye = eye.parentElement.classList.contains("eye-right");
      const offsetX = Math.cos(angle) * distance * (isRightEye ? -1 : 1);
      const offsetY = Math.sin(angle) * distance;

      pupil.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
    });
  });

  /* ===========================
     TYPING EFFECTS INDEX
     =========================== */
  if (window.jQuery) {
    const $typing = $('.typing');
    if ($typing.length) {
      let typingLine = $('.typing-line');
      const texts = ["crap-codes.", "tonterías.", "experiments.", "labs.", "playgrounds.", "bullshits.", "nonsenses.", "stupidities.", "projects.", "silly-stuffs."];
      let index = 0;

      const typeText = (text, i = 0) => {
        if (i <= text.length) {
          typingLine.text("These are my " + text.slice(0, i));
          setTimeout(() => typeText(text, i + 1), 100);
        } else setTimeout(() => deleteText(text), 1000);
      };

      const deleteText = (text, i = text.length) => {
        if (i >= 0) {
          typingLine.text("These are my " + text.slice(0, i));
          setTimeout(() => deleteText(text, i - 1), 100);
        } else {
          index = (index + 1) % texts.length;
          setTimeout(() => typeText(texts[index]), 500);
        }
      };

      $typing.on('click', () => window.location.href = "stuffs.html");
      typeText(texts[index]);
    }
  }

  /* ===========================
     LETTER EFFECTS (INDEX + CONTACT)
     =========================== */
  const spans = document.querySelectorAll('.word span');
  spans.forEach((span, idx) => {
    span.addEventListener('click', e => e.target.classList.add('active'));
    span.addEventListener('animationend', e => e.target.classList.remove('active'));
    setTimeout(() => span.classList.add('active'), 750 * (idx + 1));
  });

  /* ===========================
     CONTACT PAGE TYPING
     =========================== */
  if (window.jQuery) {
    const $typingcontact = $('.typing-contact');
    if ($typingcontact.length) {
      let typingLineContact = $('.typing-line-contact');
      const textsContact = ["aliens?", "weather?", "design?", "zommbies?", "feetpics?", "coffee?", "code?", "punk", "cryptos?"];
      let idxContact = 0;

      const typeTextContact = (text, i = 0) => {
        if (i <= text.length) {
          typingLineContact.text("Let’s chat about " + text.slice(0, i));
          setTimeout(() => typeTextContact(text, i + 1), 100);
        } else setTimeout(() => deleteTextContact(text), 1000);
      };

      const deleteTextContact = (text, i = text.length) => {
        if (i >= 0) {
          typingLineContact.text("Let’s chat about " + text.slice(0, i));
          setTimeout(() => deleteTextContact(text, i - 1), 100);
        } else {
          idxContact = (idxContact + 1) % textsContact.length;
          setTimeout(() => typeTextContact(textsContact[idxContact]), 500);
        }
      };

      typeTextContact(textsContact[idxContact]);
    }
  }

  /* ===========================
     FOOTER POPUP MSN
     =========================== */
  const contactBtn = document.querySelector(".icon-nav-effect[aria-label='Contact']");
  const figmaBtn = document.querySelector(".icon-nav-effect[aria-label='Figma']");
  const resumeBtn = document.querySelector(".icon-nav-effect[aria-label='Resume']");
  const msnPopup = document.getElementById("msn-popup");
  const closeArea = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");
  const msnSound = new Audio("ASSETS/SOUNDS/msn-zumbido.mp3");
  msnSound.preload = "auto";

  if (contactBtn && msnPopup) {
    contactBtn.addEventListener("click", e => {
      e.stopPropagation();
      msnPopup.style.display = "block";
      msnPopup.classList.add("shake");
      msnSound.currentTime = 0;
      msnSound.play().catch(() => { });
    });
  }

  if (figmaBtn) figmaBtn.addEventListener("click", () => window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769", "_blank"));
  if (resumeBtn) resumeBtn.addEventListener("click", () => window.open("https://drive.google.com/file/d/1BSFvcdQJjesg4U2r8i4tGjXFQhhCA5L5/view", "_blank"));

  if (msnPopup && closeArea) {
    closeArea.addEventListener("click", e => {
      e.stopPropagation();
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => { });
    });
  }

  if (whatsappArea) whatsappArea.addEventListener("click", e => {
    e.stopPropagation();
    window.open("https://wa.me/34663830109", "_blank");
  });

  document.addEventListener("click", e => {
    if (msnPopup && msnPopup.style.display === "block" &&
      !msnPopup.contains(e.target) &&
      !(contactBtn && contactBtn.contains(e.target))) {
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => { });
    }
  });

  const game = document.getElementById("snakeGame");

  if (game) {
    // Hacer que el cursor sea pointer
    game.style.cursor = "pointer";

    // Cuando hagan click, se abre playground.html
    game.addEventListener("click", () => {
      window.location.href = "../playground.html";
    });

    const gridSize = 5;
    const cols = 200 / gridSize;
    const rows = 40 / gridSize;
    let snake = [{ x: 2, y: 2 }], direction, foods;
    const maxFood = 10;

    const resetGame = () => {
      const startX = Math.floor(Math.random() * cols);
      const startY = Math.floor(Math.random() * rows);
      snake = [{ x: startX, y: startY }];
      direction = { x: 1, y: 0 };
      foods = [];
      for (let i = 0; i < maxFood; i++) placeFood();
    };

    const placeFood = () => {
      if (foods.length >= maxFood) return;
      let food;
      do {
        food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
      } while (snake.some(seg => seg.x === food.x && seg.y === food.y));
      foods.push(food);
    };

    const moveFoodRandomly = () => {
      foods.forEach((food, index) => {
        let newFood;
        do {
          newFood = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
        } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
        foods[index] = newFood;
      });
    };

    const draw = () => {
      game.innerHTML = "";
      snake.forEach(seg => {
        const el = document.createElement("div");
        el.classList.add("segment");
        el.style.left = seg.x * gridSize + "px";
        el.style.top = seg.y * gridSize + "px";
        game.appendChild(el);
      });
      foods.forEach(f => {
        const el = document.createElement("div");
        el.classList.add("food");
        el.style.left = f.x * gridSize + "px";
        el.style.top = f.y * gridSize + "px";
        game.appendChild(el);
      });
    };

    const move = () => {
      const head = { ...snake[0] };
      head.x += direction.x;
      head.y += direction.y;

      if (Math.random() < 0.15) {
        const dirs = [{ x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }];
        direction = dirs[Math.floor(Math.random() * dirs.length)];
      }

      if (head.x < 0) head.x = 0;
      if (head.x >= cols) head.x = cols - 1;
      if (head.y < 0) head.y = 0;
      if (head.y >= rows) head.y = rows - 1;

      snake.unshift(head);
      const foodIndex = foods.findIndex(f => f.x === head.x && f.y === head.y);
      if (foodIndex !== -1) {
        foods.splice(foodIndex, 1);
        if (foods.length === 0) resetGame();
      } else snake.pop();

      draw();
    };

    resetGame();
    setInterval(move, 60);
    setInterval(moveFoodRandomly, 3000);
  }
  /* ===========================
     FOOTER ARROWS
     =========================== */
  if (window.jQuery) {
    $(".arrow.prev").click(() => window.history.back());
    $(".arrow.next").click(() => window.history.forward());
    $(".arrow.scroll-top").click(() => $("html, body").animate({ scrollTop: 0 }, "slow"));
  }

  /* ===========================
     ME PAGE TYPING
     =========================== */
  const output = document.getElementById("typing-text-me");
  const cursor = document.getElementById("cursor-me");
  if (output && cursor) {
    const text = "I love solving problems and designing with impact.";
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        output.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      } else cursor.style.display = "inline";
    };
    typeWriter();
  }

  /* ===========================
     NAV EYE MOVEMENT + HOVER HEADER
     =========================== */
  const eyesHeader = document.querySelectorAll('.ojo-svg-header');
  document.addEventListener('mousemove', (e) => {
    eyesHeader.forEach(eye => {
      const pupil = eye.querySelector('#pupila');
      if (eye.dataset.hovering === "true") return;

      const rect = eye.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const dx = e.clientX - eyeX;
      const dy = e.clientY - eyeY;
      const angle = Math.atan2(dy, dx);
      const distance = Math.min(15, Math.hypot(dx, dy) / 10);

      const isRightEye = eye.parentElement.classList.contains("eye-right");
      const offsetX = Math.cos(angle) * distance * (isRightEye ? -1 : 1);
      const offsetY = Math.sin(angle) * distance;

      pupil.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
    });
  });

  eyesHeader.forEach(eye => {
    const pupil = eye.querySelector('#pupila');
    eye.addEventListener("mouseenter", () => {
      eye.dataset.hovering = "true";
      pupil.setAttribute("transform", `translate(0, -12)`);
    });
    eye.addEventListener("mouseleave", () => {
      eye.dataset.hovering = "false";
      pupil.setAttribute("transform", `translate(0,0)`);
    });
    eye.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  });

}); // FIN DOMContentLoaded

/* ===========================
  CARD EFFECTS PORTFOLIO ITEMS
   =========================== */

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card');
  setTimeout(() => {
    cards.forEach(card => card.classList.add('visible'));
  }, 500); // espera 0.5 segundos antes de aplicar
});

/* ===========================
CARD EFFECTS PLAYGROUND ITEMS
 =========================== */

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.card-play');
  setTimeout(() => {
    cards.forEach(card => card.classList.add('visible'));
  }, 500); // espera 0.5 segundos antes de aplicar
});

/* ===========================
 STUFFS LINKS: SALIR DARK MODE
 =========================== */
const stuffsLinks = document.querySelectorAll(".stuffs-list li a");
stuffsLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (isDark) {
      e.preventDefault();
      let targetHref = link.getAttribute("href");
      // 🔧 aquí lo forzamos a la raíz, sin /DARK-MODE/
      targetHref = "/" + targetHref.split("/").pop().replace("-dark", "");
      window.location.href = targetHref;
    }
  });
});
// si no estamos en dark mode, deja que funcione normalmente

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
