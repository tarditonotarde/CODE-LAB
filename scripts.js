$(document).ready(() => {
  let typingElement = $('.typing');
  let typingLine = $('.typing-line');
  const texts = ["crap-code", "tonterías", "experiments", "labs", "playground", "bullshits", "nonsense", "stupidities", "projects", "silly-stuff"];
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
    typingElement.removeClass('animate');
    void typingElement[0].offsetWidth; // Forzar re-render en jQuery
    typingElement.addClass('animate');
  });

  typeText(texts[index]);
});
