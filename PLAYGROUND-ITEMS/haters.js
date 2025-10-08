document.addEventListener("DOMContentLoaded", () => {
  // ==========================
  // PATHS DE LOS PORTRAITS
  // ==========================
  const portraits = [
    "/PLAYGROUND-ITEMS/HATERS/portrait1.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait2.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait3.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait4.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait5.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait7.svg",
    "/PLAYGROUND-ITEMS/HATERS/portrait7.svg",
  ];

  // ==========================
  // ELEMENTOS DEL DOM
  // ==========================
  let currentPortrait = 0;
  const portraitContainer = document.getElementById("portrait-container");
  const drawCanvas = document.getElementById("draw-canvas");
  const ctx = drawCanvas.getContext("2d");
  const stickerLayer = document.getElementById("sticker-layer");

  // ==========================
  // ESTADO DE DIBUJO
  // ==========================
  let drawing = false;
  let currentTool = "brush";
  let color = "#ff0066";
  let size = 2;

  const canvasWidth = 350;
  const canvasHeight = 350;

  // ==========================
  // HISTORIAL PARA UNDO
  // ==========================
  const history = [];
  const maxHistory = 50;

  function saveState() {
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = canvasWidth;
    tmpCanvas.height = canvasHeight;
    const tmpCtx = tmpCanvas.getContext("2d");
    tmpCtx.drawImage(drawCanvas, 0, 0);

    const stickersState = Array.from(stickerLayer.querySelectorAll(".sticker")).map(st => ({
      src: st.src,
      left: st.style.left,
      top: st.style.top,
      width: st.offsetWidth,
      height: st.offsetHeight
    }));

    history.push({canvas: tmpCanvas, stickers: stickersState});
    if (history.length > maxHistory) history.shift();
  }

  // ==========================
  // AJUSTES DE TAMAÑO
  // ==========================
  portraitContainer.style.width = canvasWidth + "px";
  portraitContainer.style.height = canvasHeight + "px";
  drawCanvas.width = canvasWidth;
  drawCanvas.height = canvasHeight;
  stickerLayer.style.width = canvasWidth + "px";
  stickerLayer.style.height = canvasHeight + "px";

  // ==========================
  // FUNCIONES DE PORTRAITS
  // ==========================
  function setPortrait(index) {
    portraitContainer.style.backgroundImage = `url(${portraits[index]})`;
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    stickerLayer.innerHTML = "";
    saveState();
  }

  setPortrait(currentPortrait);

  document.getElementById("next-portrait").addEventListener("click", e => {
    e.preventDefault();
    currentPortrait = (currentPortrait + 1) % portraits.length;
    setPortrait(currentPortrait);
  });

  document.getElementById("prev-portrait").addEventListener("click", e => {
    e.preventDefault();
    currentPortrait = (currentPortrait - 1 + portraits.length) % portraits.length;
    setPortrait(currentPortrait);
  });

  // ==========================
  // SELECCIÓN DE HERRAMIENTAS
  // ==========================
  document.querySelectorAll(".tool-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault(); // evita scroll al top
      document.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTool = btn.dataset.tool.toLowerCase();
    });
  });

  document.getElementById("color-picker").addEventListener("input", e => color = e.target.value);
  document.getElementById("size-range").addEventListener("input", e => size = e.target.value);

  // ==========================
  // FUNCIONES DE DIBUJO
  // ==========================
  function getCoords(e) {
    const rect = drawCanvas.getBoundingClientRect();
    if (e.touches) return [e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top];
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  function startDraw(e) {
    if (["brush", "spray", "eraser"].includes(currentTool)) {
      drawing = true;
      const [x, y] = getCoords(e);
      if (currentTool === "brush") {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
      draw(e);
    }
  }

  function endDraw() {
    if (drawing) saveState(); // guardamos estado después de cada trazo
    drawing = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!drawing) return;
    const [x, y] = getCoords(e);

    if (currentTool === "brush") {
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.strokeStyle = color;
      ctx.lineTo(x, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
    } else if (currentTool === "spray") {
      for (let i = 0; i < 20; i++) {
        const offsetX = Math.random() * size - size / 2;
        const offsetY = Math.random() * size - size / 2;
        ctx.fillStyle = color;
        ctx.fillRect(x + offsetX, y + offsetY, 1, 1);
      }
    } else if (currentTool === "eraser") {
      ctx.clearRect(x - size / 2, y - size / 2, size, size);
    }
  }

  // ==========================
  // EVENTOS DE CANVAS
  // ==========================
  drawCanvas.addEventListener("mousedown", startDraw);
  drawCanvas.addEventListener("touchstart", startDraw);
  drawCanvas.addEventListener("mousemove", draw);
  drawCanvas.addEventListener("touchmove", draw);
  drawCanvas.addEventListener("mouseup", endDraw);
  drawCanvas.addEventListener("touchend", endDraw);
  drawCanvas.addEventListener("mouseleave", endDraw);

  // ==========================
  // STICKERS
  // ==========================
  document.querySelectorAll(".sticker-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      const newSticker = document.createElement("img");
      newSticker.src = btn.src;
      newSticker.className = "sticker";
      newSticker.style.left = "75px";
      newSticker.style.top = "125px";
      stickerLayer.appendChild(newSticker);

      saveState(); // guardamos estado al agregar un sticker

      let offsetX, offsetY;

      const startDrag = e => {
        e.preventDefault();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        offsetX = clientX - newSticker.offsetLeft;
        offsetY = clientY - newSticker.offsetTop;

        window.addEventListener("mousemove", drag);
        window.addEventListener("mouseup", stopDrag);
        window.addEventListener("touchmove", drag);
        window.addEventListener("touchend", stopDrag);
      };

      const drag = e => {
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        let left = clientX - offsetX;
        let top = clientY - offsetY;

        left = Math.max(0, Math.min(left, canvasWidth - newSticker.offsetWidth));
        top = Math.max(0, Math.min(top, canvasHeight - newSticker.offsetHeight));

        newSticker.style.left = left + "px";
        newSticker.style.top = top + "px";
      };

      const stopDrag = () => {
        window.removeEventListener("mousemove", drag);
        window.removeEventListener("mouseup", stopDrag);
        window.removeEventListener("touchmove", drag);
        window.removeEventListener("touchend", stopDrag);
      };

      newSticker.addEventListener("mousedown", startDrag);
      newSticker.addEventListener("touchstart", startDrag);
    });
  });

  // ==========================
  // SAVE
  // ==========================
  document.getElementById("save-btn").addEventListener("click", e => {
    e.preventDefault();
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = canvasWidth;
    tmpCanvas.height = canvasHeight;
    const tmpCtx = tmpCanvas.getContext("2d");

    const img = new Image();
    img.src = portraits[currentPortrait];
    img.onload = () => {
      tmpCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
      tmpCtx.drawImage(drawCanvas, 0, 0);

      stickerLayer.querySelectorAll(".sticker").forEach(st => {
        tmpCtx.drawImage(st, parseInt(st.style.left), parseInt(st.style.top), st.offsetWidth, st.offsetHeight);
      });

      const link = document.createElement("a");
      link.download = "your-infame-artwork.png";
      link.href = tmpCanvas.toDataURL("image/png");
      link.click();
    };
  });

  // ==========================
  // UNDO & CLEAR
  // ==========================
  document.getElementById("undo-btn").addEventListener("click", e => {
    e.preventDefault();
    if (history.length < 2) return;
    history.pop(); // quitamos estado actual
    const lastState = history[history.length - 1];

    // Restauramos canvas
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    ctx.drawImage(lastState.canvas, 0, 0);

    // Restauramos stickers
    stickerLayer.innerHTML = "";
    lastState.stickers.forEach(st => {
      const s = document.createElement("img");
      s.src = st.src;
      s.className = "sticker";
      s.style.left = st.left;
      s.style.top = st.top;
      s.style.width = st.width + "px";
      s.style.height = st.height + "px";
      stickerLayer.appendChild(s);
    });
  });

  document.getElementById("clear-btn").addEventListener("click", e => {
    e.preventDefault();
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    stickerLayer.innerHTML = "";
    saveState();
  });

  // Guardamos estado inicial
  saveState();
});

// ==========================
// TOOLBAR ACTIVE EFFECT
// ==========================
document.querySelectorAll('#toolbar .tool-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('#toolbar .tool-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
