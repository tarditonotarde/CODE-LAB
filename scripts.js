/* ----------------- INDEX PAGE ----------------- */
(function () {
  if (!window.jQuery) return;
  $(function () {
    const $typing = $('.typing');
    if (!$typing.length) return;

    let typingLine = $('.typing-line');
    const texts = ["crap-codes.", "tonterías.", "experiments.", "labs.", "playgrounds.", "bullshits.", "nonsenses.", "stupidities.", "projects.", "silly-stuffs."];
    let index = 0;

    function typeText(text, i = 0) {
      if (i <= text.length) {
        typingLine.text("These are my " + text.slice(0, i));
        setTimeout(() => typeText(text, i + 1), 100);
      } else {
        setTimeout(() => deleteText(text), 1000);
      }
    }

    function deleteText(text, i = text.length) {
      if (i >= 0) {
        typingLine.text("These are my " + text.slice(0, i));
        setTimeout(() => deleteText(text, i - 1), 100);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(() => typeText(texts[index]), 500);
      }
    }

    $typing.on('click', () => window.location.href = "stuffs.html");
    typeText(texts[index]);
  });
})();

/* LETTER EFFECTS */
(() => {
  const spans = document.querySelectorAll('.word span');
  if (!spans.length) return;
  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => e.target.classList.add('active'));
    span.addEventListener('animationend', (e) => e.target.classList.remove('active'));
    setTimeout(() => span.classList.add('active'), 750 * (idx + 1));
  });
})();

/* ----------------- CONTACT PAGE ----------------- */
(function () {
  if (!window.jQuery) return;
  $(function () {
    const $typingcontact = $('.typing-contact');
    if (!$typingcontact.length) return;

    let typingLineContact = $('.typing-line-contact');
    const texts = ["aliens?", "weather?", "design?", "zommbies?", "feetpics?", "coffee?", "code?", "punk", "cryptos?"];
    let index = 0;

    function typeText(text, i = 0) {
      if (i <= text.length) {
        typingLineContact.text("Let’s chat about " + text.slice(0, i));
        setTimeout(() => typeText(text, i + 1), 100);
      } else {
        setTimeout(() => deleteText(text), 1000);
      }
    }

    function deleteText(text, i = text.length) {
      if (i >= 0) {
        typingLineContact.text("Let’s chat about " + text.slice(0, i));
        setTimeout(() => deleteText(text, i - 1), 100);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(() => typeText(texts[index]), 500);
      }
    }

    $typingcontact.on('click', () => window.location.href = "stuffs.html");
    typeText(texts[index]);
  });
})();

/* LETTER EFFECTS CONTACT */
(() => {
  const spans = document.querySelectorAll('.word span');
  if (!spans.length) return;
  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => e.target.classList.add('active'));
    span.addEventListener('animationend', (e) => e.target.classList.remove('active'));
    setTimeout(() => span.classList.add('active'), 750 * (idx + 1));
  });
})();

/* FOOTER */
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".icon-nav-effect[aria-label='Contact']");
  const figmaBtn   = document.querySelector(".icon-nav-effect[aria-label='Figma']");
  const msnPopup   = document.getElementById("msn-popup");
  const closeArea  = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");

  // 🔊 Crear sonidos dinámicamente
  const msnSound = new Audio("ASSETS/SOUNDS/msn-zumbido.mp3");
  msnSound.preload = "auto";
  const winSound = new Audio("ASSETS/SOUNDS/Win-bin.mp3");
  winSound.preload = "auto";

  // Contact → popup MSN
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (msnPopup) {
        msnPopup.style.display = "block";
        msnPopup.classList.add("shake");
        msnSound.currentTime = 0;
        msnSound.play().catch(() => {});
      }
    });
  }

  // Figma → abrir enlace
  if (figmaBtn) {
    figmaBtn.addEventListener("click", () => {
      window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito", "_blank");
      winSound.currentTime = 0;
      winSound.play().catch(() => {});
    });
  }

  // Cerrar popup
  if (msnPopup && closeArea) {
    closeArea.addEventListener("click", (e) => {
      e.stopPropagation();
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => {});
    });
  }

  // WhatsApp
  if (whatsappArea) {
    whatsappArea.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open("https://wa.me/34663830109", "_blank");
    });
  }

  // Cerrar popup al click fuera
  if (msnPopup) {
    document.addEventListener("click", (e) => {
      if (msnPopup.style.display === "block" &&
          !msnPopup.contains(e.target) &&
          !(contactBtn && contactBtn.contains(e.target))) {
        msnPopup.style.display = "none";
        msnSound.currentTime = 0;
        msnSound.play().catch(() => {});
      }
    });
  }
});

/* SNAKE PLAY */
document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("snakeGame");
  if (!game) return;
  const gridSize = 5;
  const cols = 200 / gridSize;
  const rows = 40 / gridSize;

  let snake, direction, foods;
  const maxFood = 10;

  function resetGame() {
    const startX = Math.floor(Math.random() * cols);
    const startY = Math.floor(Math.random() * rows);
    snake = [{ x: startX, y: startY }, ...snake.slice(0, snake.length - 1)];
    direction = { x: 1, y: 0 };
    foods = [];
    for (let i = 0; i < maxFood; i++) placeFood();
  }

  function placeFood() {
    if (foods.length >= maxFood) return;
    let food;
    do {
      food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
    } while (snake.some(seg => seg.x === food.x && seg.y === food.y));
    foods.push(food);
  }

  function moveFoodRandomly() {
    foods.forEach((food, index) => {
      let newFood;
      do {
        newFood = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) };
      } while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
      foods[index] = newFood;
    });
  }

  function draw() {
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
  }

  function move() {
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
    } else {
      snake.pop();
    }

    draw();
  }

  snake = [{ x: 2, y: 2 }];
  resetGame();
  setInterval(move, 60);
  setInterval(moveFoodRandomly, 3000);
});
