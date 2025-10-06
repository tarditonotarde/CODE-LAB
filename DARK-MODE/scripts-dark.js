/* ===========================
   NAV ACTIVE LINK (HEADER)
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#cubicle > .links a");

  const darkFolderRegex = /\/DARK-MODE\//i;
  const isDark = window.location.pathname.match(darkFolderRegex);

  // Obtenemos el archivo actual y removemos "-dark" si es modo dark
  let currentPath = window.location.pathname.split("/").pop(); // ej: me.html o me-dark.html
  if (isDark) currentPath = currentPath.replace("-dark", ""); // ej: me.html

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && (currentPath === "" || currentPath === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});


/* ----------------- INDEX PAGE EYES ----------------- */
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

    const isRightEye = eye.parentElement.classList.contains("eye-right");
    const offsetX = Math.cos(angle) * distance * (isRightEye ? -1 : 1);
    const offsetY = Math.sin(angle) * distance;

    pupil.setAttribute("transform", `translate(${offsetX}, ${offsetY})`);
  });
});


/* ===========================
   TYPING EFFECTS (INDEX)
   =========================== */
(function () {
  if (!window.jQuery) return;
  $(function () {
    const $typing = $('.typing');
    if (!$typing.length) return;

    let typingLine = $('.typing-line');
    const texts = ["deathcodes.", "sins.", "rituals.", "crypts.", "pits.", "nightmares.", "voids.", "curses.", "ruins.", "ashes."];
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

    $typing.on('click', () => window.location.href = "stuffs-dark.html");
    typeText(texts[index]);
  });
})();


/* ===========================
   LETTER EFFECTS (INDEX + CONTACT)
   =========================== */
(() => {
  const spans = document.querySelectorAll('.word span');
  if (!spans.length) return;
  spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => e.target.classList.add('active'));
    span.addEventListener('animationend', (e) => e.target.classList.remove('active'));
    setTimeout(() => span.classList.add('active'), 750 * (idx + 1));
  });
})();


/* ===========================
   CONTACT PAGE TYPING
   =========================== */
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


/* ===========================
   FOOTER POPUP
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.querySelector(".icon-nav-effect[aria-label='Contact']");
  const figmaBtn = document.querySelector(".icon-nav-effect[aria-label='Figma']");
  const resumeBtn = document.querySelector(".icon-nav-effect[aria-label='Resume']");
  const msnPopup = document.getElementById("msn-popup");
  const closeArea = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");

  const msnSound = new Audio("ASSETS/SOUNDS/msn-zumbido.mp3");
  msnSound.preload = "auto";

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

  if (figmaBtn) {
    figmaBtn.addEventListener("click", () => {
      window.open("https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769", "_blank");
    });
  }

  if (resumeBtn) {
    resumeBtn.addEventListener("click", () => {
      window.open("https://drive.google.com/file/d/1BSFvcdQJjesg4U2r8i4tGjXFQhhCA5L5/view", "_blank");
    });
  }

  if (msnPopup && closeArea) {
    closeArea.addEventListener("click", (e) => {
      e.stopPropagation();
      msnPopup.style.display = "none";
      msnSound.currentTime = 0;
      msnSound.play().catch(() => { });
    });
  }

  if (whatsappArea) {
    whatsappArea.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open("https://wa.me/34663830109", "_blank");
    });
  }

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


/* ===========================
   SNAKE GAME
   =========================== */
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


/* ===========================
   FOOTER ARROWS
   =========================== */
$(document).ready(function () {
  $(".arrow.prev").click(function () {
    window.history.back();
  });

  $(".arrow.next").click(function () {
    window.history.forward();
  });

  $(".arrow.scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });
});


/* ===========================
   ME PAGE TYPING
   =========================== */
document.addEventListener("DOMContentLoaded", () => {
  const text = "because if your product can’t make users happy, it should at least make them feel something.";
  const output = document.getElementById("typing-text-me");
  const cursor = document.getElementById("cursor-me");

  if (!output || !cursor) return;

  let i = 0;
  function typeWriter() {
    if (i < text.length) {
      output.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      cursor.style.display = "inline";
    }
  }

  typeWriter();
});


/* ===========================
   NAV ACTIVE LINKS (STUFFS + FOOTER)
   =========================== */
function activateNavLinks(selector) {
  const navLinks = document.querySelectorAll(selector);
  const darkFolderRegex = /\/DARK-MODE\//i;
  const isDark = window.location.pathname.match(darkFolderRegex);
  let currentPath = window.location.pathname.split("/").pop();
  if (isDark) currentPath = currentPath.replace("-dark", "");

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath || (linkPath === "index.html" && (currentPath === "" || currentPath === "index.html"))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  activateNavLinks(".stuffs-list a");
  activateNavLinks(".stuffooter-list a");
});


/* ===========================
   NAV EYE MOVEMENT + HOVER
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

  eye.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});


/* ===========================
   DARK MODE & NAV UNIFIED
   =========================== */
document.addEventListener("DOMContentLoaded", () => {

  // ---------------------------
  // Función para normalizar ruta (quitar DARK y -dark)
  // ---------------------------
  const toNormalPath = (path) => {
    path = path.replace(/\/?DARK-MODE\//i, "/");      // quitar carpeta DARK-MODE si existe
    path = path.replace(/-dark(?=\.html$)/i, "");    // quitar -dark si existe
    return path.replace(/\/+/g, "/");                // normalizar slashes
  };

  // ---------------------------
  // Detectar si estamos en dark mode
  // ---------------------------
  const currentPath = window.location.pathname;
  const isDark = currentPath.toLowerCase().includes("/dark-mode/") || /-dark\.html$/i.test(currentPath);

  // ---------------------------
  // Toggle dark mode (bombilla)
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
        newPath = "/DARK-MODE/" + base + "-dark" + ext;
      }
      window.location.href = newPath;
    });
  }

  // ---------------------------
  // Auto-dark links (si estamos en dark)
  // ---------------------------
  if (isDark) {
    const links = document.querySelectorAll("a[href$='.html']");
    links.forEach(link => {
      let href = link.getAttribute("href");
      if (!href.includes("-dark")) {
        let newHref = href.startsWith("/DARK-MODE/") ? href : "/DARK-MODE/" + href;
        newHref = newHref.replace(/(\.[^/.]+)$/, "-dark$1");
        link.setAttribute("href", newHref);
      }
    });
  }

  // ---------------------------
  // Activar nav links (header, stuffs, footer)
  // ---------------------------
  const activateNavLinks = (selector) => {
    const navLinks = document.querySelectorAll(selector);
    let currentFile = currentPath.split("/").pop().replace("-dark", "");
    if (!currentFile) currentFile = "index.html";

    navLinks.forEach(link => {
      let linkFile = link.getAttribute("href").split("/").pop().replace("-dark", "");
      if (linkFile === currentFile || (linkFile === "index.html" && currentFile === "index.html")) {
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
   STUFFS LINKS -> FORZAR /CODE-LAB/
   =========================== */
const stuffsLinks = document.querySelectorAll(".stuffs-list li a");

stuffsLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href") || "";

    // ignoramos anclas o enlaces externos
    if (href.startsWith("#") || /^https?:\/\//i.test(href)) return;

    e.preventDefault();

    // obtenemos solo el archivo (ux.html, brand.html, etc.)
    const filename = href.split("/").pop().replace("-dark", "");

    // construimos ruta absoluta en CODE-LAB
    const target = "/CODE-LAB/" + filename;

    // si el usuario hace ctrl/cmd/shift-click → abrir en nueva pestaña
    if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) {
      window.open(target, "_blank");
    } else {
      window.location.href = target;
    }
  });
});

}); 

/* ===========================
   GHOST EYES MOVEMENT (ME PAGE)
   =========================== */

const ghost = document.querySelector(".ghosting svg");
const eyeLeft = ghost.querySelector("#eyeleft");
const eyeRight = ghost.querySelector("#eyeright");

// Variables para flotación y respiración
let floatAngle = 0;
const floatSpeed = 0.02;
const floatAmplitude = 15;

// Variables para ojos
let mouseX = 0, mouseY = 0;

document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Animación principal
function animate() {
    // Movimiento flotante y respiración
    floatAngle += floatSpeed;
    const floatX = Math.sin(floatAngle) * 5;
    const floatY = Math.sin(floatAngle * 1.5) * floatAmplitude;
    const opacity = 0.6 + Math.sin(floatAngle * 1.3) * 0.4; // opacidad entre 0.2 y 1
    ghost.style.transform = `translate(${floatX}px, ${floatY}px)`;
    ghost.style.opacity = opacity;

    // Movimiento de ojos
    const rect = ghost.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (mouseX - centerX) / rect.width * 10;
    const offsetY = (mouseY - centerY) / rect.height * 10;

    eyeLeft.setAttribute("transform", `translate(${offsetX}, ${offsetY}) scale(1,1)`);
    eyeRight.setAttribute("transform", `translate(${offsetX}, ${offsetY}) scale(1,1)`);

    requestAnimationFrame(animate);
}

// Función de parpadeo más natural
function blink() {
    const duration = 100 + Math.random() * 100; // tiempo de cierre
    const scaleY = 0.1 + Math.random() * 0.1; // cierre parcial natural

    // Cerramos los ojos
    eyeLeft.setAttribute("transform", `scale(1,${scaleY})`);
    eyeRight.setAttribute("transform", `scale(1,${scaleY})`);

    setTimeout(() => {
        // Abrimos los ojos suavemente
        eyeLeft.setAttribute("transform", "scale(1,1)");
        eyeRight.setAttribute("transform", "scale(1,1)");
    }, duration);

    // Próximo parpadeo aleatorio entre 2 y 6 segundos
    setTimeout(blink, 2000 + Math.random() * 4000);
}

// Iniciar animaciones
animate();
setTimeout(blink, 2000 + Math.random() * 2000);
