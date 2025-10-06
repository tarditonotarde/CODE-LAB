/* ===========================
   GAME UNO TAROT (Flip + Animate)
   =========================== */

const cards = [
  "Yellow-0","Yellow-1","Yellow-2","Yellow-3","Yellow-4","Yellow-5","Yellow-6","Yellow-7","Yellow-8","Yellow-9",
  "Yellow-Draw2-1","Yellow-Draw2-2","Yellow-Skip-1","Yellow-Skip-2","Yellow-Reverse-1","Yellow-Reverse-2",
  "Blue-0","Blue-1","Blue-2","Blue-3","Blue-4","Blue-5","Blue-6","Blue-7","Blue-8","Blue-9",
  "Blue-Draw2-1","Blue-Draw2-2","Blue-Skip-1","Blue-Skip-2","Blue-Reverse-1","Blue-Reverse-2",
  "Red-0","Red-1","Red-2","Red-3","Red-4","Red-5","Red-6","Red-7","Red-8","Red-9",
  "Red-Draw2-1","Red-Draw2-2","Red-Skip-1","Red-Skip-2","Red-Reverse-1","Red-Reverse-2",
  "Green-0","Green-1","Green-2","Green-3","Green-4","Green-5","Green-6","Green-7","Green-8","Green-9",
  "Green-Draw2-1","Green-Draw2-2","Green-Skip-1","Green-Skip-2","Green-Reverse-1","Green-Reverse-2",
  "Wild-1","Wild-2","Wild-3","Wild-4","Draw4-1","Draw4-2","Draw4-3","Draw4-4"
];

// Ejemplo de significados
const meanings = {
  "Yellow-0": "Nada cambia, igual vas a fracasar hoy.",
  "Yellow-1": "Un intento mínimo, pero sigue siendo insuficiente.",
  "Yellow-2": "Dos caminos, ambos llevan al desastre.",
  "Yellow-3": "Tres errores consecutivos que ignoraste.",
  "Yellow-4": "Cuatro razones por las que nadie te llama.",
  "Yellow-5": "Cinco oportunidades perdidas y contando.",
  "Yellow-6": "Seis recordatorios de que tu plan apesta.",
  "Yellow-7": "Siete veces que dijiste 'no pasa nada', mentira.",
  "Yellow-8": "Ocho excusas para no enfrentar tu vida.",
  "Yellow-9": "Nueve promesas rotas, incluyendo la tuya.",
  "Yellow-Draw2-1": "Toma dos problemas más, porque uno no basta.",
  "Yellow-Draw2-2": "Otro par de desastres, que no te tomen por sorpresa.",
  "Yellow-Skip-1": "Saltar responsabilidades no funcionará, lo siento.",
  "Yellow-Skip-2": "Otra oportunidad de ignorar la realidad.",
  "Yellow-Reverse-1": "Gira tu vida… directamente hacia el abismo.",
  "Yellow-Reverse-2": "Otro giro que solo empeorará las cosas.",

  "Blue-0": "Nada azul, solo tristeza silenciosa.",
  "Blue-1": "Un día normal lleno de decepciones leves.",
  "Blue-2": "Dos problemas nuevos, no lo mereces, pero los tendrás.",
  "Blue-3": "Tres suspiros inútiles frente al espejo.",
  "Blue-4": "Cuatro señales de que alguien te odia en secreto.",
  "Blue-5": "Cinco mensajes ignorados, incluyendo los tuyos.",
  "Blue-6": "Seis tareas que empezarás y nunca terminarás.",
  "Blue-7": "Siete quejas que nadie escuchará.",
  "Blue-8": "Ocho mentiras blancas que te destruyen lentamente.",
  "Blue-9": "Nueve oportunidades para arruinarlo todo más rápido.",
  "Blue-Draw2-1": "Dos problemas inesperados, disfruta el caos.",
  "Blue-Draw2-2": "Otra dosis de mala suerte azul.",
  "Blue-Skip-1": "Salta algo, probablemente tu dignidad.",
  "Blue-Skip-2": "Ignorar otra vez no arreglará nada.",
  "Blue-Reverse-1": "Reversa… tu esperanza se va de vacaciones.",
  "Blue-Reverse-2": "Otro giro inútil hacia la desesperación.",

  "Red-0": "Cero pasión, solo ira contenida.",
  "Red-1": "Una pelea que tú provocaste, obviamente.",
  "Red-2": "Dos errores que harán arder todo.",
  "Red-3": "Tres mentiras que ya no sorprenden a nadie.",
  "Red-4": "Cuatro insultos listos para explotar.",
  "Red-5": "Cinco malas decisiones que repetirás.",
  "Red-6": "Seis bofetadas metafóricas del destino.",
  "Red-7": "Siete veces que tu temperamento falla.",
  "Red-8": "Ocho señales de que deberías irte ya.",
  "Red-9": "Nueve maneras de arruinar la noche.",
  "Red-Draw2-1": "Toma dos problemas más, roja calamidad.",
  "Red-Draw2-2": "Dos cargas más, porque la vida es cruel.",
  "Red-Skip-1": "Saltas algo… tu cordura probablemente.",
  "Red-Skip-2": "Otro salto hacia el caos.",
  "Red-Reverse-1": "Vuelves, pero todo sigue mal.",
  "Red-Reverse-2": "Giro inútil, tu drama sigue intacto.",

  "Green-0": "Cero esperanza, todo verde y mohoso.",
  "Green-1": "Un día aburrido lleno de envidia ajena.",
  "Green-2": "Dos opciones malas, elige a ciegas.",
  "Green-3": "Tres críticas que nadie pidió.",
  "Green-4": "Cuatro recuerdos vergonzosos que vuelven.",
  "Green-5": "Cinco excusas que no convencen a nadie.",
  "Green-6": "Seis pasos hacia el desastre natural de tu vida.",
  "Green-7": "Siete consejos inútiles, como siempre.",
  "Green-8": "Ocho problemas verdes, no comestibles.",
  "Green-9": "Nueve intentos fallidos de ser normal.",
  "Green-Draw2-1": "Dos obstáculos más, bienvenida la desdicha.",
  "Green-Draw2-2": "Otro par de problemas verdes y pegajosos.",
  "Green-Skip-1": "Saltar no evitará la vergüenza.",
  "Green-Skip-2": "Ignorar otra vez solo empeora todo.",
  "Green-Reverse-1": "Giro inesperado… tu plan fracasa.",
  "Green-Reverse-2": "Otro giro para perder el control.",

  "Wild-1": "Tu libertad es una ilusión.",
  "Wild-2": "Caos salvaje, sin sentido ni gracia.",
  "Wild-3": "Locura pura, disfrútala mientras puedas.",
  "Wild-4": "Todo arderá, y tú serás responsable.",
  "Draw4-1": "Toma cuatro problemas de golpe, suerte.",
  "Draw4-2": "Otro cuarteto de calamidades.",
  "Draw4-3": "Cuatro disgustos nuevos para ti.",
  "Draw4-4": "El gran combo de la mala suerte: cuatro golpes letales."
};


function initUnoTarot() {
  const tarotContainer = document.getElementById("uno-tarot");
  if (!tarotContainer) return;

  tarotContainer.innerHTML = ""; // limpiar contenido

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("uno-tarot-main");
  tarotContainer.appendChild(mainContainer);

  // Función para barajar
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Función para sacar cartas
  function drawCards(num = 7) {
    mainContainer.innerHTML = ""; // limpiar tirada anterior
    const drawn = shuffle(cards).slice(0, num);
    const rows = [3, 3, 1];
    let index = 0;

    rows.forEach(count => {
      const row = document.createElement("div");
      row.classList.add("uno-tarot-row");

      for (let i = 0; i < count && index < drawn.length; i++, index++) {
        const card = drawn[index];
        const cardWrapper = document.createElement("div");
        cardWrapper.classList.add("uno-card-wrapper");

        const cardElement = document.createElement("div");
        cardElement.classList.add("uno-card");

        const inner = document.createElement("div");
        inner.classList.add("uno-card-inner");

        const front = document.createElement("img");
        front.src = "/PLAYGROUND-ITEMS/UNO-CARDS/Cover-uno-2.svg";
        front.classList.add("uno-card-front");

        const back = document.createElement("img");
        back.src = `/PLAYGROUND-ITEMS/UNO-CARDS/${card}.svg`;
        back.classList.add("uno-card-back");

        inner.appendChild(front);
        inner.appendChild(back);
        cardElement.appendChild(inner);
        cardWrapper.appendChild(cardElement);

        // Flip y significado
        const meaningDiv = document.createElement("div");
        meaningDiv.classList.add("uno-meaning");
        cardWrapper.appendChild(meaningDiv);

        cardElement.addEventListener("click", () => {
          cardElement.classList.toggle("flipped");
          meaningDiv.innerText = cardElement.classList.contains("flipped")
            ? meanings[card] || "✨ Interpreta según tu intuición"
            : "";
        });

        // Animación de entrada
        cardWrapper.style.opacity = "0";
        cardWrapper.style.transform = "translateY(50px)";
        setTimeout(() => {
          cardWrapper.style.transition = "all 0.6s ease";
          cardWrapper.style.opacity = "1";
          cardWrapper.style.transform = "translateY(0)";
        }, i * 100); // retardo para efecto escalonado

        row.appendChild(cardWrapper);
      }

      mainContainer.appendChild(row);
    });

    // Botón abajo
    mainContainer.appendChild(button);
  }

  const button = document.createElement("button");
  button.innerText = "Sacar cartas 🔮";
  button.classList.add("uno-tarot-button");
  button.addEventListener("click", () => drawCards(7));

  drawCards(7); // tirada inicial
}

document.addEventListener("DOMContentLoaded", initUnoTarot);
