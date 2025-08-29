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

/* ----------------- CONTACT / STUFFS PAGE ----------------- */

/* STUFFS PAGE */
const container = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  // Distribución inicial aleatoria
  const maxX = container.offsetWidth - card.offsetWidth;
  const maxY = container.offsetHeight - card.offsetHeight;
  card.style.left = Math.random() * maxX + 'px';
  card.style.top = Math.random() * maxY + 'px';
});

let zIndexCounter = 1;

cards.forEach(card => {
  let offsetX, offsetY;

  card.addEventListener('mousedown', e => {
    e.preventDefault();
    const rect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    card.style.zIndex = ++zIndexCounter;

    function moveAt(pageX, pageY) {
      let x = pageX - containerRect.left - offsetX;
      let y = pageY - containerRect.top - offsetY;

      // Limites dentro del contenedor
      if (x < 0) x = 0;
      if (y < 0) y = 0;
      if (x + card.offsetWidth > containerRect.width) x = containerRect.width - card.offsetWidth;
      if (y + card.offsetHeight > containerRect.height) y = containerRect.height - card.offsetHeight;

      card.style.left = x + 'px';
      card.style.top = y + 'px';
    }

    function onMouseMove(e) { moveAt(e.clientX, e.clientY); }

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  });
});


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
