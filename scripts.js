/* ----------------- INDEX PAGE ----------------- */
(function () {
  // Solo correr la parte de INDEX si existe jQuery y existe .typing
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

/* LETTER EFFECTS (no depende de jQuery) */
(() => {
  const spans = document.querySelectorAll('.word span');
  if (!spans.length) return;
  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => e.target.classList.add('active'));
    span.addEventListener('animationend', (e) => e.target.classList.remove('active'));
    setTimeout(() => span.classList.add('active'), 750 * (idx + 1));
  });
})();


/* ----------------- STUFFS PAGE ----------------- */



/* ----------------- LETTER CONTACT PAGE ----------------- */
(function () {
  // Solo correr la parte de INDEX si existe jQuery y existe .typing
  if (!window.jQuery) return;
  $(function () {
    const $typingcontact = $('.typing-contact');
    if (!$typingcontact.length) return;

    let typingLineContact = $('.typing-line-contact');
    const texts = [
  "aliens?",
  "weather?",
  "design?",
  "zommbies?",
  "feetpics?",
  "coffee?",
  "code?",
  "punk",
  "cryptos?"
];
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

/* LETTER EFFECTS CONTACT (no depende de jQuery) */
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
  const msnSound   = document.getElementById("msn-sound");
  const closeArea  = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");

  // Click en Contact → abrir popup MSN
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (msnPopup && msnSound) {
        msnPopup.style.display = "block";
        msnPopup.classList.add("shake");
        msnSound.currentTime = 0;
        msnSound.play().catch(() => {});
      }
    });
  }

  // Click en Figma → abrir enlace
  if (figmaBtn) {
    figmaBtn.addEventListener("click", () => {
      window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769", "_blank");
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

  // Área WhatsApp
  if (whatsappArea) {
    whatsappArea.addEventListener("click", (e) => {
      e.stopPropagation(); // No cierra el popup
      window.open("https://wa.me/34663830109", "_blank");
    });
  }

  // Cerrar popup al click fuera (excepto Contact y WhatsApp)
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


document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("msn-popup");
  const msnSound = document.getElementById("msn-sound"); // Zumbido MSN
  // Evita errores si esta página no tiene popup
  const hasPopup = !!popup && !!msnSound;

  const winSound = new Audio("ASSETS/SOUNDS/Win-bin.mp3"); // Sonido Win para Stuffs/Figma
  const winbar = document.getElementById("winbar");

  const startBtn  = document.querySelector(".start-btn");
  const contactBtn = document.querySelector(".tray-btn[aria-label='Contact']");
  const stuffsBtn  = document.querySelector(".tray-btn[aria-label='Stuffs']");
  const figmaBtn   = document.querySelector(".tray-btn[aria-label='Figma']");
  const closeArea  = document.getElementById("msn-close");

  const currentPage = window.location.pathname.split("/").pop();

  // Mostrar footer siempre
  if (winbar) {
    winbar.classList.remove("hidden");
    winbar.classList.add("appear");
    setTimeout(() => winbar.classList.remove("appear"), 300);
  }

  // --- Popup automático SOLO en contact.html ---
  if (hasPopup && currentPage === "contact.html") {
    setTimeout(() => {
      popup.style.display = "block";
      popup.classList.add("shake");
      // Puede que el browser bloquee el audio auto; no pasa nada si falla
      msnSound.currentTime = 0;
      msnSound.play().catch(() => {});
    }, 2000);
  }

  // --- Click en icono Contact → abrir popup MSN (stuffs y contact) ---
  if (hasPopup && contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.style.display = "block";
      popup.classList.add("shake");
      msnSound.currentTime = 0;
      msnSound.play().catch(() => {});
    });
  }

  // --- Cerrar popup (X) ---
  if (hasPopup && closeArea) {
    closeArea.addEventListener("click", (e) => {
      e.stopPropagation();
      popup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => {});
    });
  }

  // --- (Opcional) Cerrar popup al click fuera ---
  if (hasPopup) {
    document.addEventListener("click", (e) => {
      if (popup.style.display === "block" && !popup.contains(e.target) && !(contactBtn && contactBtn.contains(e.target))) {
        popup.style.display = "none";
        msnSound.currentTime = 0;
        msnSound.play().catch(() => {});
      }
    });
  }

  // --- Iconos barra inferior ---
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      winSound.currentTime = 0;
      winSound.play().catch(() => {});
      window.location.href = "index.html";
    });
  }

  if (stuffsBtn) {
    stuffsBtn.addEventListener("click", () => {
      winSound.currentTime = 0;
      winSound.play().catch(() => {});
      window.location.href = "stuffs.html";
    });
  }

  if (figmaBtn) {
    figmaBtn.addEventListener("click", () => {
      winSound.currentTime = 0;
      winSound.play().catch(() => {});
      window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito", "_blank");
    });
  }

  // --- Dejar activo el link de navegación ---
  const navLinks = document.querySelectorAll("#cubicle > .links a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});


/*SNAKE PLAY*/
document.addEventListener("DOMContentLoaded", () => {
  const game = document.getElementById("snakeGame");
  const gridSize = 5;
  const cols = 200 / gridSize;
  const rows = 40 / gridSize;

  let snake, direction, foods;

  const maxFood = 10;

  function resetGame() {
    // Mantener tamaño de snake pero reiniciar posición y dirección
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

    // Cambio de dirección aleatorio fluido
    if (Math.random() < 0.15) {
      const dirs = [
        { x: 1, y: 0 }, { x: -1, y: 0 }, { x: 0, y: 1 }, { x: 0, y: -1 }
      ];
      direction = dirs[Math.floor(Math.random() * dirs.length)];
    }

    // Limitar dentro del área
    if (head.x < 0) head.x = 0;
    if (head.x >= cols) head.x = cols - 1;
    if (head.y < 0) head.y = 0;
    if (head.y >= rows) head.y = rows - 1;

    snake.unshift(head); // siempre agregamos el nuevo segmento

    // Comer comida
    const foodIndex = foods.findIndex(f => f.x === head.x && f.y === head.y);
    if (foodIndex !== -1) {
      foods.splice(foodIndex, 1);
      if (foods.length === 0) resetGame(); // reinicio inmediato
    } else {
      snake.pop(); // si no come, la serpiente sigue creciendo por que no hacemos pop
    }

    draw();
  }

  // Inicializar
  snake = [{ x: 2, y: 2 }]; // tamaño inicial 1
  resetGame();
  setInterval(move, 60); // más rápido y fluido
  setInterval(moveFoodRandomly, 3000); // comidas cambian cada 3s
});




/* FOOTER */
