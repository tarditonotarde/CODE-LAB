/* INDEX PAGE */
/* This script handles the typing effect on the index page */
/* It types and deletes words from an array of texts */
/* The words are displayed in a typing animation */
/* The animation is triggered when the user clicks on the typing element */
/* The user is redirected to the "stuffs.html" page when they click on the typing element */

$(document).ready(() => {
  let typingElement = $('.typing');
  let typingLine = $('.typing-line');
  const texts = ["crap-codes", "tonterías", "experiments", "labs", "playgrounds", "bullshits", "nonsenses", "stupidities", "projects", "silly-stuffs"];
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


/* MENU TOGGLE */
// Asegúrate de que jQuery esté cargado antes de este script
$(document).ready(function () {
  $(".menu-toggle").click(function () {
    $(".navbar").toggleClass("active");
    $("body").toggleClass("menu-open");
  });
});






