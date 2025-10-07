/* =============================
   MAIN TITLE
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  const text = "■ game";
  const output = document.getElementById("typing-text-title");
  const cursor = document.getElementById("cursor-title");

  if (!output || !cursor) return; // ✅ no afecta otras páginas

  let i = 0;
  function typeWriter() {
  if (i < text.length) {
  output.textContent += text.charAt(i);
  i++;
  setTimeout(typeWriter, 100); // velocidad de escritura
} 
// no necesitamos hacer nada más, la animación CSS ya parpadea continuamente

  }

  typeWriter();
});

/* =============================
   TAG STYLES
   ============================= */

   document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".tags-list a");
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


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".tags-list li");

  items.forEach(item => {
    const link = item.querySelector("a");

    // Click: toggle permanente
    link.addEventListener("click", (e) => {
      e.preventDefault();
      item.classList.toggle("open");
    });
  });
});

  /* ===========================
     FOOTER POPUP MSN
     =========================== */
  const contactBtn = document.querySelector(".icon-nav-effect[aria-label='Contact']");
  const figmaBtn = document.querySelector(".icon-nav-effect[aria-label='Figma']");
  const resumeBtn = document.querySelector(".icon-nav-effect[aria-label='Resume']");
  const msnPopup = document.getElementById("msn-popup");
  const closeArea = document.getElementById("msn-close");
  const whatsappArea = document.getElementById("msn-whatsapp");
  const msnSound = new Audio("../ASSETS/SOUNDS/msn-zumbido.mp3");
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



