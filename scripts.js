// --------------------- NAV ACTIVE LINK ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#cubicle > .links a");
  const currentPath = window.location.pathname.split("/").pop(); // obtiene el nombre del archivo actual

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && currentPath === "")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/* ----------------- INDEX PAGE ----------------- */

document.addEventListener('mousemove', (e) => {
  const eyes = document.querySelectorAll('.ojo-svg');
  eyes.forEach(eye => {
    const pupil = eye.querySelector('#pupila');
    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeX;
    const dy = e.clientY - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(15, Math.hypot(dx, dy) / 10);

    // 👁️ Detectamos si es el ojo derecho
    const isRightEye = eye.parentElement.classList.contains("eye-right");

    // Si es el derecho, invertimos el movimiento en X
    const offsetX = Math.cos(angle) * distance * (isRightEye ? -1 : 1);
    const offsetY = Math.sin(angle) * distance;

    pupil.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
  });
});


/* TYPING EFFECTS */

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
  const figmaBtn = document.querySelector(".icon-nav-effect[aria-label='Figma']");
  const resumeBtn = document.querySelector(".icon-nav-effect[aria-label='Resume']");
  const msnPopup = document.getElementById("msn-popup");
  const closeArea = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");

  // 🔊 Crear sonidos dinámicamente
  const msnSound = new Audio("ASSETS/SOUNDS/msn-zumbido.mp3");
  msnSound.preload = "auto";

  // Contact → popup MSN
  if (contactBtn) {
    contactBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (msnPopup) {
        msnPopup.style.display = "block";
        msnPopup.classList.add("shake");
        msnSound.currentTime = 0;
        msnSound.play().catch(() => { });
      }
    });
  }

  // Figma → abrir enlace
  if (figmaBtn) {
    figmaBtn.addEventListener("click", () => {
      window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769", "_blank");
    });
  }

  // Resume → abrir enlace
  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      window.open("https://drive.google.com/file/d/1BSFvcdQJjesg4U2r8i4tGjXFQhhCA5L5/view", "_blank");
    });
  }

  // Cerrar popup
  if (msnPopup && closeArea) {
    closeArea.addEventListener("click", (e) => {
      e.stopPropagation();
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => { });
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
        msnSound.play().catch(() => { });
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


/* FOOTER ARROWS */

$(document).ready(function () {

  // Navegación atrás
  $(".arrow.prev").click(function () {
    window.history.back();
  });

  // Navegación adelante
  $(".arrow.next").click(function () {
    window.history.forward();
  });

  // Scroll hasta arriba
  $(".arrow.scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

});

/* =============================
   ME PAGE
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  const text = "I love solving problems and designing with impact.";
  const output = document.getElementById("typing-text-me");
  const cursor = document.getElementById("cursor-me");

  if (!output || !cursor) return; // ✅ no afecta otras páginas

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      output.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // velocidad de escritura
    } else {
      cursor.style.display = "inline"; // deja el cursor parpadeando
    }
  }

  typeWriter();
});


/* ===========NAV STUFFS PAGES ACTIVE==================== */

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".stuffs-list a");
  const currentPath = window.location.pathname.split("/").pop(); // archivo actual

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (
      linkPath === currentPath ||
      (linkPath === "index.html" && (currentPath === "" || currentPath === "/"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


/* CARDS PORTFOLIO */
$(document).ready(function () {
  $('.card').each(function (index) {
    $(this).delay(150 * index).animate({ opacity: 1 }, 500)
      .queue(function (next) {
        $(this).css('transform', 'translateY(0)');
        next();
      });
  });
});

/* ===========NAV STUFFOOTER PAGES ACTIVE==================== */

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".stuffooter-list a");
  const currentPath = window.location.pathname.split("/").pop(); // archivo actual

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (
      linkPath === currentPath ||
      (linkPath === "index.html" && (currentPath === "" || currentPath === "/"))
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

/* ----------------- NAV EYE ----------------- */
const eyes = document.querySelectorAll('.ojo-svg-header');

// Movimiento normal según el mouse
document.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
    const pupil = eye.querySelector('#pupila');
    if (eye.dataset.hovering === "true") return; // si está en hover no sigue el mouse

    const rect = eye.getBoundingClientRect();
    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const dx = e.clientX - eyeX;
    const dy = e.clientY - eyeY;
    const angle = Math.atan2(dy, dx);
    const distance = Math.min(15, Math.hypot(dx, dy) / 10);

    // 👁️ Detectamos si es el ojo derecho
    const isRightEye = eye.parentElement.classList.contains("eye-right");

    // Si es el derecho, invertimos el movimiento en X
    const offsetX = Math.cos(angle) * distance * (isRightEye ? -1 : 1);
    const offsetY = Math.sin(angle) * distance;

    pupil.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
  });
});

// Hover → mirar hacia arriba fijo
eyes.forEach(eye => {
  const pupil = eye.querySelector('#pupila');
  
  eye.addEventListener("mouseenter", () => {
    eye.dataset.hovering = "true";
    pupil.setAttribute("transform", `translate(0, -12)`); // 👆 pupila hacia arriba
  });

  eye.addEventListener("mouseleave", () => {
    eye.dataset.hovering = "false";
    pupil.setAttribute("transform", `translate(0,0)`); // vuelve al centro
  });

  // Click → scroll top
  eye.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


/* ===========================
   DARK MODE & NAV UNIFIED
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  // ---------------------------
  // Base path del proyecto (ej: /CODE-LAB/)
  // ---------------------------
  const basePath = window.location.pathname.split("/")[1]; // "CODE-LAB"
  const projectBase = "/" + basePath + "/";

  // ---------------------------
  // Función para normalizar ruta
  // ---------------------------
  const toNormalPath = (path) => {
    path = path.replace(/\/?DARK-MODE\//i, "/");     // quitar carpeta DARK-MODE
    path = path.replace(/-dark(?=\.html$)/i, "");    // quitar -dark
    return projectBase + path.replace(/^\//, "");    // añadir base del proyecto
  };

  // ---------------------------
  // Detectar dark mode
  // ---------------------------
  const currentPath = window.location.pathname;
  const isDark = currentPath.toLowerCase().includes("../dark-mode/") || /-dark\.html$/i.test(currentPath);

  // ---------------------------
  // Toggle dark mode
  // ---------------------------
  const lampToggle = document.getElementById("dark-toggle");
  if (lampToggle) {
    lampToggle.addEventListener("click", () => {
      let newPath;
      if (isDark) {
        // Salir de dark
        newPath = toNormalPath(currentPath);
      } else {
        // Entrar en dark
        const filename = currentPath.split("/").pop();
        const base = filename.replace(/\.[^/.]+$/, "");
        const ext = filename.match(/\.[^/.]+$/)?.[0] || "";
<<<<<<< HEAD
        newPath = "../DARK-MODE/" + base + "-dark" + ext;
=======
        newPath = projectBase + "DARK-MODE/" + base + "-dark" + ext;
>>>>>>> 2900458486df9314e87fc3748285e38f1f2182d8
      }
      window.location.href = newPath;
    });
  }

  // ---------------------------
  // Auto-dark links
  // ---------------------------
  if (isDark) {
    const links = document.querySelectorAll("a[href$='.html']");
    links.forEach(link => {
      let href = link.getAttribute("href");
      if (!href.includes("-dark")) {
<<<<<<< HEAD
        let newHref = href.startsWith("../DARK-MODE/") ? href : "../DARK-MODE/" + href;
=======
        let newHref = href.startsWith("DARK-MODE/") ? href : "DARK-MODE/" + href;
>>>>>>> 2900458486df9314e87fc3748285e38f1f2182d8
        newHref = newHref.replace(/(\.[^/.]+)$/, "-dark$1");
        link.setAttribute("href", projectBase + newHref);
      }
    });
  }

  // ---------------------------
  // STUFFS LINKS -> salir dark
  // ---------------------------
  const stuffsLinks = document.querySelectorAll(".stuffs-list li a");
  stuffsLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      if (isDark) {
        e.preventDefault();
        let targetHref = link.getAttribute("href");
        window.location.href = toNormalPath(targetHref);
      }
    });
  });
});
