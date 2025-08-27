/* INDEX PAGE */
/* This script handles the typing effect on the index page */
/* It types and deletes words from an array of texts */
/* The words are displayed in a typing animation */
/* The animation is triggered when the user clicks on the typing element */
/* The user is redirected to the "stuffs.html" page when they click on the typing element */

$(document).ready(() => {
  let typingElement = $('.typing');
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

  typingElement.on('click', () => {
    window.location.href = "stuffs.html";
  });

  typeText(texts[index]);
});

/*LETTER EFFECTS*/
const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});



/* CONTACT PAGE */
/* MSN-style popup + Windows-like bottom bar */

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("msn-popup");
  const sound = document.getElementById("msn-sound");
  const winbar = document.getElementById("winbar");
  const startBtn = document.querySelector(".start-btn");
  const contactBtn = document.querySelector(".tray-btn[aria-label='Contact']");
  const stuffsBtn = document.querySelector(".tray-btn[aria-label='Stuffs']");
  const figmaBtn = document.querySelector(".tray-btn[aria-label='Figma']");
  const whatsappArea = document.getElementById("msn-whatsapp");
  const closeArea = document.getElementById("msn-close");

  const whatsappLink = "https://wa.me/34663830109";
  const figmaLink = "https://www.figma.com/proto/95WPIJoGGErxr5TYSXC9o0/Portfolio-Claudia-Tardito?page-id=2010%3A24768&node-id=2010-24769&viewport=115%2C74%2C0.31&t=llxvXUiUtBJnbqi1-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2010%3A24769"; // my figma

  let audioEnabled = false;
  let popupVisible = false;
  let footerShown = false;

  // Mostrar popup automáticamente a los 2 segundos
  setTimeout(() => {
    popup.style.display = "block";
    popup.classList.add("shake");
    popupVisible = true;
    if (audioEnabled) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
    }
  }, 2000);

  // Clicks globales
  document.addEventListener("click", (e) => {
    if (!audioEnabled) audioEnabled = true;
    if (!popupVisible) return;

    // Click en WhatsApp → abrir WhatsApp
    if (whatsappArea && whatsappArea.contains(e.target)) {
      window.open(whatsappLink, "_blank");
      sound.currentTime = 0;
      sound.play().catch(() => {});
      return;
    }

    // Click en cierre superior derecho → cerrar popup
    if (closeArea && closeArea.contains(e.target)) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
      popup.style.display = "none";
      popupVisible = false;
      if (!footerShown && winbar) {
        winbar.classList.remove("hidden");
        winbar.classList.add("appear");
        setTimeout(() => winbar.classList.remove("appear"), 300);
        footerShown = true;
      }
      return;
    }

    // Click dentro del popup → solo sonido
    if (popup.contains(e.target)) {
      sound.currentTime = 0;
      sound.play().catch(() => {});
      return;
    }

    // Click fuera del popup → último sonido, cerrar popup, mostrar footer
    sound.currentTime = 0;
    sound.play().catch(() => {});
    popup.style.display = "none";
    popupVisible = false;
    if (!footerShown && winbar) {
      winbar.classList.remove("hidden");
      winbar.classList.add("appear");
      setTimeout(() => winbar.classList.remove("appear"), 300);
      footerShown = true;
    }
  });

  // ----- Botones barra inferior -----
  if (startBtn) startBtn.addEventListener("click", () => window.location.href = "index.html");
  if (stuffsBtn) stuffsBtn.addEventListener("click", () => window.location.href = "stuffs.html");
  if (contactBtn) contactBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    popup.style.display = "block";
    popup.classList.add("shake");
    popupVisible = true;
    if (!audioEnabled) audioEnabled = true;
    sound.currentTime = 0;
    sound.play().catch(() => {});
  });
  if (figmaBtn) figmaBtn.addEventListener("click", () => {
    window.open(figmaLink, "_blank");
  });
});
/* CONTACT PAGE */
/* This script handles the MSN-style popup and Windows-like bottom bar on the contact page */

// NAV ITEMS 
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#cubicle > .links a");
  const currentPath = window.location.pathname.split("/").pop(); // nombre del archivo actual

  navLinks.forEach(link => {
    const linkPath = link.getAttribute("href");
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });
});
