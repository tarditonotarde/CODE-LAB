/* =============================
   MAIN TITLE
   ============================= */

document.addEventListener("DOMContentLoaded", () => {
  const text = "■ case study";
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


