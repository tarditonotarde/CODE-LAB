$(document).ready(() => {
  let typingElement = $('.typing');

  typingElement.on('click', () => {
    typingElement.removeClass('animate');
    void typingElement[0].offsetWidth; // Forzar re-render en jQuery
    typingElement.addClass('animate');
  });
});
