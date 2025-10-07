document.addEventListener("DOMContentLoaded", () => {
  const portraits = [
    "/Users/claudiatardito/CODE-LAB/PLAYGROUND-ITEMS/HATERS/portrait1.jpg",
    "/Users/claudiatardito/CODE-LAB/PLAYGROUND-ITEMS/HATERS/portrait2.jpg",
    "/Users/claudiatardito/CODE-LAB/PLAYGROUND-ITEMS/HATERS/portrait3.jpg",
    "/Users/claudiatardito/CODE-LAB/PLAYGROUND-ITEMS/HATERS/portrait4.jpg",
    "/Users/claudiatardito/CODE-LAB/PLAYGROUND-ITEMS/HATERS/portrait5.jpg"
  ];

  let currentPortrait = 0;
  const portraitContainer = document.getElementById("portrait-container");
  const drawCanvas = document.getElementById("draw-canvas");
  const ctx = drawCanvas.getContext("2d");
  const stickerLayer = document.getElementById("sticker-layer");

  let drawing = false;
  let currentTool = "brush";
  let color = "#ff0066";
  let size = 18;

  const canvasWidth = 200;
  const canvasHeight = 300;

  // Set size
  portraitContainer.style.width = canvasWidth + "px";
  portraitContainer.style.height = canvasHeight + "px";
  drawCanvas.width = canvasWidth;
  drawCanvas.height = canvasHeight;
  stickerLayer.style.width = canvasWidth + "px";
  stickerLayer.style.height = canvasHeight + "px";

  function setPortrait(index) {
    portraitContainer.style.backgroundImage = `url(${portraits[index]})`;
    ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
    stickerLayer.innerHTML = "";
  }

  setPortrait(currentPortrait);

  document.getElementById("next-portrait").addEventListener("click", () => {
    currentPortrait = (currentPortrait + 1) % portraits.length;
    setPortrait(currentPortrait);
  });

  // TOOL SELECTION
  document.querySelectorAll(".tool-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tool-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTool = btn.dataset.tool;
    });
  });

  document.getElementById("color-picker").addEventListener("input", e => color = e.target.value);
  document.getElementById("size-range").addEventListener("input", e => size = e.target.value);

  // DRAWING
  function getCoords(e) {
    const rect = drawCanvas.getBoundingClientRect();
    if (e.touches) return [e.touches[0].clientX - rect.left, e.touches[0].clientY - rect.top];
    return [e.clientX - rect.left, e.clientY - rect.top];
  }

  function startDraw(e) {
    if (["brush","spray","eraser"].includes(currentTool)) {
      drawing = true;
      draw(e);
    }
  }

  function endDraw() {
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
      for (let i=0;i<20;i++){
        const offsetX = Math.random()*size - size/2;
        const offsetY = Math.random()*size - size/2;
        ctx.fillStyle = color;
        ctx.fillRect(x+offsetX,y+offsetY,1,1);
      }
    } else if (currentTool === "eraser") {
      ctx.clearRect(x-size/2, y-size/2, size, size);
    }
  }

  drawCanvas.addEventListener("mousedown", startDraw);
  drawCanvas.addEventListener("touchstart", startDraw);
  drawCanvas.addEventListener("mousemove", draw);
  drawCanvas.addEventListener("touchmove", draw);
  drawCanvas.addEventListener("mouseup", endDraw);
  drawCanvas.addEventListener("touchend", endDraw);
  drawCanvas.addEventListener("mouseleave", endDraw);

  // STICKERS
  document.querySelectorAll(".sticker-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const newSticker = document.createElement("img");
      newSticker.src = btn.src;
      newSticker.className = "sticker";
      newSticker.style.left = "75px";
      newSticker.style.top = "125px";
      stickerLayer.appendChild(newSticker);

      // Drag
      let offsetX, offsetY;
      const rect = stickerLayer.getBoundingClientRect();

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

        // Limitar al canvas
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

  // SAVE
  document.getElementById("save-btn").addEventListener("click", () => {
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = canvasWidth;
    tmpCanvas.height = canvasHeight;
    const tmpCtx = tmpCanvas.getContext("2d");

    const img = new Image();
    img.src = portraits[currentPortrait];
    img.onload = () => {
      tmpCtx.drawImage(img,0,0,canvasWidth,canvasHeight);
      tmpCtx.drawImage(drawCanvas,0,0);

      stickerLayer.querySelectorAll(".sticker").forEach(st => {
        tmpCtx.drawImage(st, parseInt(st.style.left), parseInt(st.style.top), st.offsetWidth, st.offsetHeight);
      });

      const link = document.createElement("a");
      link.download = "vandalized-portrait.png";
      link.href = tmpCanvas.toDataURL("image/png");
      link.click();
    };
  });

  // UNDO & CLEAR
  document.getElementById("undo-btn").addEventListener("click", () => ctx.clearRect(0,0,drawCanvas.width,drawCanvas.height));
  document.getElementById("clear-btn").addEventListener("click", () => {
    ctx.clearRect(0,0,drawCanvas.width,drawCanvas.height);
    stickerLayer.innerHTML = "";
  });
});
