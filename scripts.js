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
      msnSound.play().catch(() => {});
    });
  }

  if (figmaBtn) figmaBtn.addEventListener("click", () => window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769", "_blank"));
  if (resumeBtn) resumeBtn.addEventListener("click", () => window.open("https://drive.google.com/file/d/1BSFvcdQJjesg4U2r8i4tGjXFQhhCA5L5/view", "_blank"));

  if (msnPopup && closeArea) {
    closeArea.addEventListener("click", e => {
      e.stopPropagation();
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => {});
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
      msnSound.play().catch(() => {});
    }
  });

  /* ===========================
     SNAKE GAME
     =========================== */
  const game = document.getElementById("snakeGame");
  if (game) {
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
      do { food = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }; }
      while (snake.some(seg => seg.x === food.x && seg.y === food.y));
      foods.push(food);
    };

    const moveFoodRandomly = () => {
      foods.forEach((food, index) => {
        let newFood;
        do { newFood = { x: Math.floor(Math.random() * cols), y: Math.floor(Math.random() * rows) }; }
        while (snake.some(seg => seg.x === newFood.x && seg.y === newFood.y));
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
