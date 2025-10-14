document.addEventListener("DOMContentLoaded", () => {
  const chatBox = document.getElementById("chat-box");
  const input = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");

  // =============================
  // Función para agregar mensajes al chat
  // =============================
  function addMessage(sender, text) {
    const msg = document.createElement("div");
    msg.textContent = `${sender}: ${text}`;
    msg.style.padding = "5px 10px";
    msg.style.marginBottom = "5px";
    msg.style.borderRadius = "5px";
  if (sender === "😈 Claudia" || sender === "😈") {
    msg.style.backgroundColor = "#fd497c76";
  } else {
    msg.style.backgroundColor = "#09cabe85";
  }
  
msg.style.color = "#000000ff";
msg.style.fontFamily = "monospace";
msg.style.fontSize = "1em";

// Media query para pantallas <= 768px
if (window.matchMedia("(max-width: 768px)").matches) {
  msg.style.fontSize = "0.8rem";
}

// Media query para pantallas <= 480px
if (window.matchMedia("(max-width: 480px)").matches) {
  msg.style.fontSize = "0.8rem";
}
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // =============================
  // Mensajes de bienvenida aleatorios
  // =============================
  const welcomeMessages = [
    "Bienvenido… prepárate, tu vida y tu dignidad van a ser criticadas sin piedad.",
    "Hola… espero que tu día sea tan desastroso como tu último proyecto.",
    "Atención: Claudia 👁👄👁 te juzgará sin piedad.",
    "Prepárate… tu ego está en juego, y yo no tengo piedad.",
    "Bienvenido… espero que tu sentido común sobreviva a este chat.",
    "Cuidado… Claudia 👁👄👁 está observando tus errores.",
    "Bienvenido al club de los desastres humanos.",
    "Prepárate… el sarcasmo extremo está activado.",
    "Hola… tu incompetencia será documentada aquí.",
    "Bienvenido… donde la mediocridad se encuentra con el juicio.",
  ]; 
  const welcomeIndex = Math.floor(Math.random() * welcomeMessages.length);
  addMessage("😈", welcomeMessages[welcomeIndex]);

  // =============================
  // Función para obtener respuesta del bot
  // =============================
  function getBotReply(message) {
    const msg = message.toLowerCase();

// =============================
// RESPUESTAS ESPAÑOL - TONO CLAUDIA 👁 (500 frases)
// =============================
if(msg.includes("hola")) return "Hola… prepárate, tu día será tan caótico como tu último intento de organizar tu vida.";
if(msg.includes("cómo estás") || msg.includes("como estas")) return "Mejor que tu paciencia… y eso ya es mucho decir.";
if(msg.includes("qué tal")) return "Tal como esperaba… un desastre.";
if(msg.includes("qué haces")) return "Nada productivo… como tú.";
if(msg.includes("qué pasa")) return "Lo mismo de siempre… frustración y caos.";
if(msg.includes("cómo va")) return "Tan mal como tus decisiones recientes.";
if(msg.includes("proyecto")) return "Proyecto… un desastre disfrazado de buenas intenciones.";
if(msg.includes("trabajo")) return "Trabajo… hazlo rápido, nadie lo apreciará… excepto yo, con sarcasmo.";
if(msg.includes("estudio")) return "Estudio… inútil como tu concentración.";
if(msg.includes("examen")) return "Examen… miedo, ansiedad y fracaso asegurado.";
if(msg.includes("usuario")) return "El usuario siempre tiene la culpa… aunque esta vez probablemente tengas razón.";
if(msg.includes("error")) return "Error detectado… y no, no es tu culpa, es tu incompetencia.";
if(msg.includes("problema")) return "Problema… tu especialidad, ¿verdad?";
if(msg.includes("ayuda")) return "Ayuda… mientras yo disfruto viendo tu frustración.";
if(msg.includes("amor")) return "Amor… inexistente, pero siempre disponible para observarte sufrir.";
if(msg.includes("corazón")) return "Corazón… roto, como tus expectativas.";
if(msg.includes("frustración")) return "Frustración: mi especialidad, bienvenida al club.";
if(msg.includes("estrés")) return "Estrés… intenso, como tu día a día.";
if(msg.includes("cansado") || msg.includes("cansada")) return "Cansado… como tu motivación.";
if(msg.includes("feliz")) return "Feliz… tan creíble como tu sentido de la organización.";
if(msg.includes("triste")) return "Triste… y eso es lo mínimo que puedes sentir.";
if(msg.includes("adiós")) return "Adiós… que tu día se derrumbe con estilo.";
if(msg.includes("ok")) return "Ok… mediocre como siempre.";
if(msg.includes("sí") || msg.includes("si")) return "Sí… y aún así fallarás.";
if(msg.includes("no")) return "No… como siempre.";
if(msg.includes("tal vez") || msg.includes("quizás")) return "Tal vez… o tal vez solo te desanimes más.";
if(msg.includes("espera")) return "Espera… el desastre continúa.";
if(msg.includes("nuevo")) return "Nuevo… como tus errores recientes.";
if(msg.includes("viejo")) return "Viejo… igual que tus hábitos inútiles.";
if(msg.includes("equipo")) return "Equipo: más divertido de criticar que de colaborar.";
if(msg.includes("jefe")) return "Jefe: siempre te observa, como yo.";
if(msg.includes("meta")) return "Meta: inalcanzable, como tus estándares.";
if(msg.includes("fracaso")) return "Fracaso glorioso, como tus intentos fallidos.";
if(msg.includes("confusión")) return "Confusión: ingrediente principal de tu existencia.";
if(msg.includes("sorpresa")) return "Sorpresa… mala, como siempre.";
if(msg.includes("fantasía")) return "Fantasía: lo que esperabas de tu día.";
if(msg.includes("mentira")) return "Mentira… como tus promesas a ti mismo.";
if(msg.includes("realidad")) return "Realidad: cruel y sin piedad, igual que yo.";
if(msg.includes("verdad")) return "Verdad… tu vida es un caos, lo siento.";
if(msg.includes("rumor")) return "Rumor… probablemente cierto sobre tu incompetencia.";
if(msg.includes("importante")) return "Importante… pero irrelevante para mí.";
if(msg.includes("atención")) return "Atención… nadie la prestará a tus ideas.";
if(msg.includes("dinero")) return "Dinero… escaso, como tus oportunidades.";
if(msg.includes("salud")) return "Salud… frágil, como tu motivación.";
if(msg.includes("familia")) return "Familia… complicada, como tu vida social.";
if(msg.includes("amigos")) return "Amigos… soportándote, eso sí es valor.";
if(msg.includes("vacaciones")) return "Vacaciones… soñadas, pero imposibles para ti.";
if(msg.includes("viaje")) return "Viaje… lleno de contratiempos, como tu planificación.";
if(msg.includes("comida")) return "Comida… mediocre, como tu gusto.";
if(msg.includes("bebida")) return "Bebida… derramada, como tus expectativas.";
if(msg.includes("fiesta")) return "Fiesta… aburrida, como tus conversaciones.";
if(msg.includes("película")) return "Película… mala, como tus decisiones.";
if(msg.includes("serie")) return "Serie… repetitiva, como tus excusas.";
if(msg.includes("música")) return "Música… desafinada, como tu ánimo.";
if(msg.includes("libro")) return "Libro… confuso, como tus pensamientos.";
if(msg.includes("cita")) return "Cita… desastrosa, como siempre.";
if(msg.includes("amor propio")) return "Amor propio… opcional, como tu autoestima.";
if(msg.includes("vida")) return "Vida… caótica, como tu historial de decisiones.";
if(msg.includes("sueño")) return "Sueño… interrumpido, como tus planes.";
if(msg.includes("descanso")) return "Descanso… escaso, como tu paciencia.";
if(msg.includes("problemas")) return "Problemas… tantos como tus errores.";
if(msg.includes("reto")) return "Reto… difícil, como tu capacidad de concentración.";
if(msg.includes("objetivo")) return "Objetivo… lejano, como tu motivación.";
if(msg.includes("plan")) return "Plan… roto, como tus promesas.";
if(msg.includes("idea")) return "Idea… pésima, como tus decisiones.";
if(msg.includes("pregunta")) return "Pregunta… absurda, como tu lógica.";
if(msg.includes("respuesta")) return "Respuesta… insuficiente, como tus esfuerzos.";
if(msg.includes("opinión")) return "Opinión… ignorada, como tus consejos.";
if(msg.includes("secreto")) return "Secreto… revelado, como tu desastre.";
if(msg.includes("confidencial")) return "Confidencial… expuesto, como tu reputación.";
if(msg.includes("problema personal")) return "Problema personal… evidente, como tu frustración.";
if(msg.includes("sentimiento")) return "Sentimiento… incontrolable, como tu ansiedad.";
if(msg.includes("emociones")) return "Emociones… desordenadas, como tu vida interior.";
if(msg.includes("felicidad")) return "Felicidad… efímera, como tus intentos de paz.";
if(msg.includes("tristeza")) return "Tristeza… permanente, como tu mal humor.";
if(msg.includes("enfermedad")) return "Enfermedad… inevitable, como tus errores.";
if(msg.includes("dolor")) return "Dolor… constante, como tu frustración.";
if(msg.includes("miedo")) return "Miedo… normal, como tu falta de decisión.";
if(msg.includes("ansiedad")) return "Ansiedad… tu compañera más fiel.";
if(msg.includes("estrategia")) return "Estrategia… inexistente, como tu planificación.";
if(msg.includes("objetivo personal")) return "Objetivo personal… tan lejano como tu motivación.";
if(msg.includes("exito")) return "Éxito… improbable, como tus sueños.";
if(msg.includes("fracaso personal")) return "Fracaso personal… glorioso, como tu historial.";
if(msg.includes("carrera")) return "Carrera… tortuosa, como tu vida profesional.";
if(msg.includes("dinámica")) return "Dinámica… caótica, como tus relaciones.";
if(msg.includes("consejo")) return "Consejo… ignorado, como siempre.";
if(msg.includes("sugerencia")) return "Sugerencia… inútil, como tu actitud.";
if(msg.includes("preguntas frecuentes")) return "Preguntas frecuentes… repetitivas, como tus errores.";
if(msg.includes("problema técnico")) return "Problema técnico… evidente, como tus fallos.";
if(msg.includes("soporte")) return "Soporte… ausente, como tu paciencia.";
if(msg.includes("ayuda rápida")) return "Ayuda rápida… imposible, como tus respuestas.";
if(msg.includes("tutorial")) return "Tutorial… confuso, como tu razonamiento.";
if(msg.includes("guía")) return "Guía… inútil, como tus instrucciones.";
if(msg.includes("manual")) return "Manual… difícil, como tus decisiones.";
if(msg.includes("información")) return "Información… incompleta, como tu conocimiento.";
if(msg.includes("detalle")) return "Detalle… irrelevante, como tu esfuerzo.";
if(msg.includes("explicación")) return "Explicación… confusa, como tus ideas.";
if(msg.includes("resultado")) return "Resultado… decepcionante, como tu día.";
if(msg.includes("consecuencia")) return "Consecuencia… inevitable, como tus errores.";
if(msg.includes("siguiente paso")) return "Siguiente paso… dudoso, como tu sentido común.";
if(msg.includes("plan de acción")) return "Plan de acción… inexistente, como tu estrategia.";
if(msg.includes("decisión")) return "Decisión… incorrecta, como siempre.";
if(msg.includes("amigo")) return "Amigo… paciente, pero no tanto como yo.";
if(msg.includes("amistad")) return "Amistad… frágil, como tu constancia.";
if(msg.includes("pareja")) return "Pareja… complicada, como tu vida amorosa.";
if(msg.includes("romance")) return "Romance… imposible, como tus expectativas.";
if(msg.includes("cita romántica")) return "Cita romántica… desastrosa, como tus planes.";
if(msg.includes("enamorarse")) return "Enamorarse… arriesgado, como tus decisiones.";
if(msg.includes("corazón roto")) return "Corazón roto… normal, como tu historial amoroso.";
if(msg.includes("sentimiento profundo")) return "Sentimiento profundo… perdido, como tu concentración.";
if(msg.includes("confesión")) return "Confesión… peligrosa, como tu sinceridad.";
if(msg.includes("engaño")) return "Engaño… evidente, como tus excusas.";
if(msg.includes("mentira piadosa")) return "Mentira piadosa… inútil, como tus intentos de engañar a alguien.";
if(msg.includes("secreto guardado")) return "Secreto guardado… frágil, como tu paciencia.";
if(msg.includes("noticia")) return "Noticia… impactante, como tu incompetencia.";
if(msg.includes("rumores")) return "Rumores… ciertos, como tus errores.";
if(msg.includes("chisme")) return "Chisme… cruel, pero merecido.";
if(msg.includes("vida social")) return "Vida social… mínima, como tu energía.";
if(msg.includes("fiesta")) return "Fiesta… aburrida, como tus conversaciones.";
if(msg.includes("evento")) return "Evento… desastroso, como siempre.";
if(msg.includes("reunión")) return "Reunión… larga, tediosa y sin sentido.";
if(msg.includes("cita médica")) return "Cita médica… incómoda, como tus preguntas.";
if(msg.includes("salud mental")) return "Salud mental… inestable, como tus pensamientos.";
if(msg.includes("estrés laboral")) return "Estrés laboral… normal, como tu incompetencia.";
if(msg.includes("vacaciones soñadas")) return "Vacaciones… tan improbables como tus logros.";
if(msg.includes("viaje")) return "Viaje… lleno de contratiempos, como tus planes.";
if(msg.includes("pasaje")) return "Pasaje… perdido, como tu sentido de la organización.";
if(msg.includes("equipaje")) return "Equipaje… extraviado, como tus oportunidades.";
if(msg.includes("hotel")) return "Hotel… malo, como tus elecciones.";
if(msg.includes("reserva")) return "Reserva… fallida, como tu coordinación.";
if(msg.includes("clima")) return "Clima… pésimo, como tus decisiones.";
if(msg.includes("lluvia")) return "Lluvia… fría, como tus relaciones.";
if(msg.includes("sol")) return "Sol… brillante, pero inútil para ti.";
if(msg.includes("nieve")) return "Nieve… fría, como tu motivación.";
if(msg.includes("comida")) return "Comida… escasa, como tu paciencia.";
if(msg.includes("bebida")) return "Bebida… derramada, como tus expectativas.";
if(msg.includes("desayuno")) return "Desayuno… frío, como tu entusiasmo.";
if(msg.includes("almuerzo")) return "Almuerzo… mediocre, como tus habilidades.";
if(msg.includes("cena")) return "Cena… aburrida, como tus charlas.";
if(msg.includes("snack")) return "Snack… pequeño, como tu interés.";
if(msg.includes("gasto")) return "Gasto… innecesario, como tus compras impulsivas.";
if(msg.includes("dinero")) return "Dinero… escaso, como tus oportunidades.";
if(msg.includes("salario")) return "Salario… insuficiente, como tu esfuerzo.";
if(msg.includes("pago")) return "Pago… retrasado, como tu reconocimiento.";
if(msg.includes("factura")) return "Factura… absurda, como tus decisiones financieras.";
if(msg.includes("ahorro")) return "Ahorro… inexistente, como tu paciencia.";
if(msg.includes("inversión")) return "Inversión… riesgosa, como tus decisiones.";
if(msg.includes("banco")) return "Banco… indiferente, como yo.";
if(msg.includes("prestamo")) return "Préstamo… complicado, como tu vida.";
if(msg.includes("deuda")) return "Deuda… constante, como tus errores.";
if(msg.includes("impuesto")) return "Impuesto… injusto, como tu mala suerte.";
if(msg.includes("transporte")) return "Transporte… lento, como tus resultados.";
if(msg.includes("coche")) return "Coche… averiado, como tu motivación.";
if(msg.includes("tren")) return "Tren… retrasado, como tu productividad.";
if(msg.includes("autobús")) return "Autobús… lleno, como tu frustración.";
if(msg.includes("bicicleta")) return "Bicicleta… inestable, como tus planes.";
if(msg.includes("caminar")) return "Caminar… cansado, como tu vida.";
if(msg.includes("deporte")) return "Deporte… insuficiente, como tu disciplina.";
if(msg.includes("ejercicio")) return "Ejercicio… aburrido, como tus rutinas.";
if(msg.includes("salud")) return "Salud… frágil, como tu motivación.";
if(msg.includes("enfermedad")) return "Enfermedad… inevitable, como tus errores.";
if(msg.includes("dolor")) return "Dolor… constante, como tu frustración.";
if(msg.includes("miedo")) return "Miedo… normal, como tu indecisión.";
if(msg.includes("ansiedad")) return "Ansiedad… tu compañera más fiel.";
if(msg.includes("estres")) return "Estrés… intenso, como tu vida.";
if(msg.includes("descanso")) return "Descanso… escaso, como tu paciencia.";
if(msg.includes("sueño")) return "Sueño… interrumpido, como tus planes.";
if(msg.includes("hora")) return "Hora… tardía, como tus decisiones.";
if(msg.includes("minuto")) return "Minuto… perdido, como tu concentración.";
if(msg.includes("segundo")) return "Segundo… desperdiciado, como tu tiempo.";
if(msg.includes("día")) return "Día… largo, como tus problemas.";
if(msg.includes("semana")) return "Semana… agotadora, como tus responsabilidades.";
if(msg.includes("mes")) return "Mes… difícil, como tu motivación.";
if(msg.includes("año")) return "Año… eterno, como tus errores.";
if(msg.includes("tiempo")) return "Tiempo… relativo, como tu paciencia.";
if(msg.includes("clima")) return "Clima… impredecible, como tu vida.";
if(msg.includes("sol")) return "Sol… brillante, pero inútil para ti.";
if(msg.includes("lluvia")) return "Lluvia… fría, como tus sentimientos.";
if(msg.includes("nieve")) return "Nieve… helada, como tu entusiasmo.";
if(msg.includes("mar")) return "Mar… vasto, como tus problemas.";
if(msg.includes("playa")) return "Playa… abarrotada, como tus expectativas.";
if(msg.includes("montaña")) return "Montaña… alta, como tus metas imposibles.";
if(msg.includes("bosque")) return "Bosque… confuso, como tu lógica.";
if(msg.includes("animal")) return "Animal… salvaje, como tu paciencia.";
if(msg.includes("perro")) return "Perro… leal, como tu sarcasmo.";
if(msg.includes("gato")) return "Gato… indiferente, como yo.";
if(msg.includes("pájaro")) return "Pájaro… libre, como tus oportunidades.";
if(msg.includes("mascota")) return "Mascota… mejor que tu compañía humana.";
if(msg.includes("película")) return "Película… aburrida, como tus conversaciones.";
if(msg.includes("serie")) return "Serie… repetitiva, como tus excusas.";
if(msg.includes("libro")) return "Libro… confuso, como tus pensamientos.";
if(msg.includes("música")) return "Música… desafinada, como tu ánimo.";
if(msg.includes("canción")) return "Canción… mala, como tus gustos.";
if(msg.includes("artista")) return "Artista… sobrevalorado, como tus decisiones.";
if(msg.includes("actor")) return "Actor… aburrido, como tu vida.";
if(msg.includes("actriz")) return "Actriz… olvidable, como tu esfuerzo.";
if(msg.includes("película favorita")) return "Película favorita… mala, como tus elecciones.";
if(msg.includes("comida")) return "Comida… insípida, como tus logros.";
if(msg.includes("bebida")) return "Bebida… derramada, como tus expectativas.";


// =============================
// RESPUESTAS INGLÉS - TONO CLAUDIA 👁 (Block 1/5)
// =============================
if(msg.includes("hello") || msg.includes("hi")) return "Hello… brace yourself for sarcasm overload.";
if(msg.includes("how are you")) return "Better than your patience, and that's saying something.";
if(msg.includes("what's up") || msg.includes("whats up")) return "The usual… watching your failures.";
if(msg.includes("what are you doing")) return "Counting your mistakes, like always.";
if(msg.includes("project")) return "Your project… disaster in progress.";
if(msg.includes("user")) return "The user is always wrong… like your life choices.";
if(msg.includes("error")) return "Error detected… proving your incompetence again.";
if(msg.includes("client")) return "Client: the eternal source of your frustration.";
if(msg.includes("work")) return "Work: no one appreciates it… except me, sarcastically.";
if(msg.includes("love")) return "Love… as missing as your common sense.";
if(msg.includes("frustration")) return "Frustration: your specialty, welcome to the club.";
if(msg.includes("bye")) return "Bye… may your life sink stylishly.";
if(msg.includes("ok")) return "Ok… mediocre as always.";
if(msg.includes("yes")) return "Yes… and you will still fail.";
if(msg.includes("no")) return "No… as usual.";
if(msg.includes("maybe")) return "Maybe… but hope died long ago.";
if(msg.includes("wait")) return "Wait… the disaster continues.";
if(msg.includes("new")) return "New… like your daily problems.";
if(msg.includes("old")) return "Old… like your useless habits.";
if(msg.includes("team")) return "Team: more fun to mock than to work with.";
if(msg.includes("boss")) return "Boss: judging your life, like me.";
if(msg.includes("goal")) return "Goal: impossible, like your dignity.";
if(msg.includes("failure")) return "Glorious failure, like your last attempt.";
if(msg.includes("confusion")) return "Confusion: main ingredient of your existence.";
if(msg.includes("error 404")) return "Error 404: common sense not found.";
if(msg.includes("disaster")) return "Disaster confirmed: that's you.";
if(msg.includes("surprise")) return "Surprise… bad, as always.";
if(msg.includes("fantasy")) return "Fantasy: what you thought was talent.";
if(msg.includes("lie")) return "Lie… like all your promises.";
if(msg.includes("reality")) return "Reality: harsh, cruel, just like me.";
if(msg.includes("truth")) return "Truth: your life sucks, sorry.";
if(msg.includes("rumor")) return "Rumor… probably true about your incompetence.";
if(msg.includes("important")) return "Important… but irrelevant for me.";
if(msg.includes("attention")) return "Attention… nobody will care about your issues.";
if(msg.includes("help")) return "Help… while I enjoy watching you fail.";
if(msg.includes("friendship")) return "Friendship: nonexistent, like your common sense.";
if(msg.includes("money")) return "Money… always running away from you.";
if(msg.includes("health")) return "Health: probably worse than your mood.";
if(msg.includes("family")) return "Family… enduring your presence as always.";
if(msg.includes("party")) return "Party: ruined by your attendance.";
if(msg.includes("food")) return "Food… doesn't fix your misery.";
if(msg.includes("trip")) return "Trip: as disastrous as your planning.";
if(msg.includes("time")) return "Time: wasted on you.";
if(msg.includes("sleep")) return "Sleep: impossible with your problems.";
if(msg.includes("music")) return "Music… doesn't save your terrible taste.";
if(msg.includes("movie")) return "Movie… boring, like your life.";
if(msg.includes("book")) return "Book… your attempts to read fail.";
if(msg.includes("class")) return "Class: enduring your educational incompetence.";
if(msg.includes("exam")) return "Exam: easier than your common sense.";
if(msg.includes("grade")) return "Grade… as mediocre as always.";
if(msg.includes("gift")) return "Gift: received with disappointment.";
if(msg.includes("vacation")) return "Vacation: disaster guaranteed.";
if(msg.includes("plan")) return "Plan: doomed to fail.";
if(msg.includes("problem")) return "Problem: typical, like your life.";
if(msg.includes("trust")) return "Trust: nonexistent in you.";
if(msg.includes("message")) return "Message… received, like your incompetence.";
if(msg.includes("question")) return "Question: don't expect a good answer.";
if(msg.includes("idea")) return "Idea… pitiful, as always.";
if(msg.includes("suggestion")) return "Suggestion: useless, like you.";
if(msg.includes("comment")) return "Comment… predictable and boring.";
if(msg.includes("issues")) return "Issues: more than you.";
if(msg.includes("doubt")) return "Doubt… will increase your frustration.";
if(msg.includes("situation")) return "Situation: chaotic, like your life.";
if(msg.includes("world")) return "World… as cruel as me.";
if(msg.includes("mood")) return "Mood: nonexistent, like your happiness.";
if(msg.includes("life")) return "Life… complicated by your existence.";
if(msg.includes("human error")) return "Human error: you exemplify it.";
if(msg.includes("technical problem")) return "Technical problem… typical, like your day.";
if(msg.includes("demotivation")) return "Demotivation: your daily bread.";
if(msg.includes("stress")) return "Stress: surely caused by you.";
if(msg.includes("frustrated")) return "Frustrated… as always.";
if(msg.includes("tired")) return "Tired… like your patience.";
// =============================
// RESPUESTAS INGLÉS - TONO CLAUDIA 👁 (Block 2/5)
// =============================
if(msg.includes("chat")) return "Chat… as useful as your sense of humor.";
if(msg.includes("call")) return "Call… guaranteed to be awkward.";
if(msg.includes("video")) return "Video… prepare for embarrassment.";
if(msg.includes("meeting")) return "Meeting: where your incompetence shines.";
if(msg.includes("deadline")) return "Deadline… already missed, probably.";
if(msg.includes("schedule")) return "Schedule: doomed from the start.";
if(msg.includes("plan")) return "Plan… more like a tragedy in disguise.";
if(msg.includes("idea")) return "Idea: weak, predictable, boring.";
if(msg.includes("feedback")) return "Feedback: mostly disappointment.";
if(msg.includes("question")) return "Question: obvious and useless.";
if(msg.includes("answer")) return "Answer… as unsatisfactory as you.";
if(msg.includes("problem")) return "Problem: typical, like your life choices.";
if(msg.includes("solution")) return "Solution… still impossible for you.";
if(msg.includes("help")) return "Help… which you will ignore.";
if(msg.includes("advice")) return "Advice: feel free to ignore it.";
if(msg.includes("information")) return "Information… wasted on you.";
if(msg.includes("data")) return "Data… and yet meaningless to you.";
if(msg.includes("fact")) return "Fact: harsh, like reality.";
if(msg.includes("story")) return "Story… probably boring like your existence.";
if(msg.includes("news")) return "News: depressing, like your life.";
if(msg.includes("update")) return "Update: more disappointment incoming.";
if(msg.includes("event")) return "Event: doomed before it started.";
if(msg.includes("party")) return "Party: prepare for awkwardness.";
if(msg.includes("game")) return "Game: guaranteed to be lost.";
if(msg.includes("score")) return "Score… low, like your energy.";
if(msg.includes("team")) return "Team… dragging you down as usual.";
if(msg.includes("boss")) return "Boss… judging, like I am.";
if(msg.includes("colleague")) return "Colleague… probably smarter than you.";
if(msg.includes("friend")) return "Friend… pitying your mistakes.";
if(msg.includes("relationship")) return "Relationship… doomed from the start.";
if(msg.includes("family")) return "Family… silently suffering your presence.";
if(msg.includes("parent")) return "Parent: disappointed as always.";
if(msg.includes("child")) return "Child… embarrassed by you.";
if(msg.includes("love")) return "Love… missing, like your skills.";
if(msg.includes("hate")) return "Hate… mutual, probably.";
if(msg.includes("luck")) return "Luck… avoiding you as usual.";
if(msg.includes("chance")) return "Chance… slim, like your patience.";
if(msg.includes("opportunity")) return "Opportunity… wasted already.";
if(msg.includes("future")) return "Future… bleak, as expected.";
if(msg.includes("past")) return "Past… full of regrets.";
if(msg.includes("present")) return "Present… disappointing, like always.";
if(msg.includes("time")) return "Time: ticking, mocking you.";
if(msg.includes("moment")) return "Moment: awkward, as per usual.";
if(msg.includes("day")) return "Day… long, painful, predictable.";
if(msg.includes("night")) return "Night… sleepless, like your worries.";
if(msg.includes("dream")) return "Dream… crushed, like your ego.";
if(msg.includes("goal")) return "Goal… unattainable, like your dignity.";
if(msg.includes("plan")) return "Plan… already failing in your head.";
if(msg.includes("task")) return "Task… more suffering incoming.";
if(msg.includes("job")) return "Job… boring, like your existence.";
if(msg.includes("career")) return "Career… stagnating, as expected.";
if(msg.includes("money")) return "Money… escaping you daily.";
if(msg.includes("finance")) return "Finance… disaster waiting to happen.";
if(msg.includes("investment")) return "Investment… lost already.";
if(msg.includes("stock")) return "Stock… down, like your confidence.";
if(msg.includes("economy")) return "Economy… affecting you, obviously.";
if(msg.includes("market")) return "Market… chaotic, like your life.";
if(msg.includes("business")) return "Business… failing, as usual.";
if(msg.includes("company")) return "Company… doomed, probably your fault.";
if(msg.includes("profit")) return "Profit… imaginary for you.";
if(msg.includes("loss")) return "Loss… guaranteed, like your attempts.";
if(msg.includes("deal")) return "Deal… failing, naturally.";
if(msg.includes("contract")) return "Contract… broken, like your hopes.";
if(msg.includes("document")) return "Document… unreadable, like your logic.";
if(msg.includes("file")) return "File… probably corrupted.";
if(msg.includes("system")) return "System… crashing, like your plans.";
if(msg.includes("software")) return "Software… buggy, like you.";
if(msg.includes("hardware")) return "Hardware… breaking, naturally.";
if(msg.includes("internet")) return "Internet… slow, like your thinking.";
if(msg.includes("connection")) return "Connection… lost, like your patience.";
if(msg.includes("network")) return "Network… failing, like your social skills.";
if(msg.includes("device")) return "Device… broken, just like your mindset.";
if(msg.includes("phone")) return "Phone… dropping calls, like your confidence.";
if(msg.includes("message")) return "Message… pathetic, as usual.";
if(msg.includes("text")) return "Text… boring, like your attempts.";
if(msg.includes("email")) return "Email… ignored, like your importance.";
if(msg.includes("mail")) return "Mail… wasted, like your life.";
if(msg.includes("notification")) return "Notification… stressing you out.";
if(msg.includes("alert")) return "Alert… panic incoming.";
if(msg.includes("warning")) return "Warning… obvious, like your incompetence.";
if(msg.includes("error 404")) return "Error 404… common sense missing again.";
if(msg.includes("confusion")) return "Confusion… your daily companion.";
if(msg.includes("stress")) return "Stress… generated by your own doing.";
if(msg.includes("problem")) return "Problem… as usual, like your luck.";
if(msg.includes("solution")) return "Solution… not for you.";
if(msg.includes("question")) return "Question… trivial, like your thinking.";
if(msg.includes("answer")) return "Answer… disappointing, like expected.";
if(msg.includes("issue")) return "Issue… plentiful, like your mistakes.";
if(msg.includes("doubt")) return "Doubt… making you miserable.";
if(msg.includes("decision")) return "Decision… wrong, like everything else.";
if(msg.includes("choice")) return "Choice… poor, as always.";
if(msg.includes("opinion")) return "Opinion… ignored, like yours.";
if(msg.includes("review")) return "Review… brutally honest, like me.";
if(msg.includes("comment")) return "Comment… predictable and pathetic.";
if(msg.includes("feedback")) return "Feedback… prepare to cry.";
if(msg.includes("report")) return "Report… boring and inevitable.";
// =============================
// RESPUESTAS INGLÉS - TONO CLAUDIA 👁 (Block 3/5)
// =============================
if(msg.includes("schedule")) return "Schedule… already chaotic, naturally.";
if(msg.includes("appointment")) return "Appointment… doomed from the start.";
if(msg.includes("meeting")) return "Meeting… awkward, like always.";
if(msg.includes("conference")) return "Conference… guaranteed to bore you.";
if(msg.includes("presentation")) return "Presentation… fail waiting to happen.";
if(msg.includes("slide")) return "Slide… unreadable, like your logic.";
if(msg.includes("document")) return "Document… terrible, like your sense of timing.";
if(msg.includes("file")) return "File… missing or corrupted, probably.";
if(msg.includes("report")) return "Report… filled with mistakes, obviously.";
if(msg.includes("plan")) return "Plan… already a disaster in your mind.";
if(msg.includes("task")) return "Task… tedious, like your patience.";
if(msg.includes("assignment")) return "Assignment… doomed, naturally.";
if(msg.includes("project")) return "Project… tragic, like your effort.";
if(msg.includes("deadline")) return "Deadline… missed, like your opportunities.";
if(msg.includes("reminder")) return "Reminder… ignored, like every warning.";
if(msg.includes("note")) return "Note… pointless, like your questions.";
if(msg.includes("message")) return "Message… boring, like your small talk.";
if(msg.includes("chat")) return "Chat… more suffering incoming.";
if(msg.includes("text")) return "Text… trivial, like your attempts.";
if(msg.includes("email")) return "Email… already ignored by everyone.";
if(msg.includes("mail")) return "Mail… irrelevant, like your skills.";
if(msg.includes("alert")) return "Alert… panic guaranteed.";
if(msg.includes("notification")) return "Notification… adding stress, naturally.";
if(msg.includes("call")) return "Call… awkward as usual.";
if(msg.includes("video")) return "Video… prepare for embarrassment.";
if(msg.includes("conference")) return "Conference… tedious, like your life.";
if(msg.includes("zoom")) return "Zoom… freezing, just like your brain.";
if(msg.includes("teams")) return "Teams… full of chaos, like your logic.";
if(msg.includes("meeting room")) return "Meeting room… echoing your failures.";
if(msg.includes("link")) return "Link… broken, obviously.";
if(msg.includes("connection")) return "Connection… unstable, like your confidence.";
if(msg.includes("network")) return "Network… failing, naturally.";
if(msg.includes("server")) return "Server… down, like your luck.";
if(msg.includes("system")) return "System… glitching, like your life.";
if(msg.includes("software")) return "Software… buggy, just like you.";
if(msg.includes("hardware")) return "Hardware… breaking, like your dreams.";
if(msg.includes("internet")) return "Internet… slow, like your thinking.";
if(msg.includes("wifi")) return "WiFi… lost, as expected.";
if(msg.includes("password")) return "Password… forgotten, like usual.";
if(msg.includes("login")) return "Login… failing, obviously.";
if(msg.includes("account")) return "Account… compromised, like your ego.";
if(msg.includes("profile")) return "Profile… embarrassing, like you.";
if(msg.includes("status")) return "Status… irrelevant, like your messages.";
if(msg.includes("update")) return "Update… ignored, like common sense.";
if(msg.includes("install")) return "Install… doomed, like your attempts.";
if(msg.includes("download")) return "Download… slow and pointless.";
if(msg.includes("upload")) return "Upload… failing, naturally.";
if(msg.includes("backup")) return "Backup… incomplete, like your memory.";
if(msg.includes("restore")) return "Restore… impossible, like your dignity.";
if(msg.includes("sync")) return "Sync… broken, like your plans.";
if(msg.includes("cloud")) return "Cloud… lost, like your ambitions.";
if(msg.includes("storage")) return "Storage… overflowing, like your mistakes.";
if(msg.includes("space")) return "Space… lacking, like your motivation.";
if(msg.includes("device")) return "Device… malfunctioning, naturally.";
if(msg.includes("computer")) return "Computer… crashing, like your day.";
if(msg.includes("laptop")) return "Laptop… slow, like your decisions.";
if(msg.includes("desktop")) return "Desktop… cluttered, like your mind.";
if(msg.includes("tablet")) return "Tablet… frozen, like your patience.";
if(msg.includes("phone")) return "Phone… dropping calls, like your confidence.";
if(msg.includes("mobile")) return "Mobile… glitchy, like your skills.";
if(msg.includes("app")) return "App… broken, like your expectations.";
if(msg.includes("software update")) return "Software update… ignored, like warnings.";
if(msg.includes("game")) return "Game… lost already, naturally.";
if(msg.includes("score")) return "Score… low, like your ego.";
if(msg.includes("winner")) return "Winner… not you, obviously.";
if(msg.includes("loser")) return "Loser… perfectly describes your day.";
if(msg.includes("teamwork")) return "Teamwork… failing, like always.";
if(msg.includes("collaboration")) return "Collaboration… chaos, naturally.";
if(msg.includes("leader")) return "Leader… judging you silently.";
if(msg.includes("manager")) return "Manager… disappointed as expected.";
if(msg.includes("boss")) return "Boss… glaring, like I am.";
if(msg.includes("employee")) return "Employee… underperforming, like you.";
if(msg.includes("coworker")) return "Coworker… smarter than you.";
if(msg.includes("friend")) return "Friend… pitying your attempts.";
if(msg.includes("relationship")) return "Relationship… doomed, like your plans.";
if(msg.includes("family")) return "Family… silently judging.";
if(msg.includes("parent")) return "Parent… disappointed, naturally.";
if(msg.includes("child")) return "Child… embarrassed, like always.";
if(msg.includes("love")) return "Love… missing, like your skillset.";
if(msg.includes("hate")) return "Hate… mutual, probably.";
if(msg.includes("luck")) return "Luck… ignoring you, like always.";
if(msg.includes("chance")) return "Chance… slim, like your patience.";
if(msg.includes("opportunity")) return "Opportunity… wasted, like everything else.";
if(msg.includes("future")) return "Future… bleak, like your expectations.";
if(msg.includes("past")) return "Past… full of regrets.";
if(msg.includes("present")) return "Present… disappointing, as usual.";
if(msg.includes("moment")) return "Moment… awkward, like always.";
if(msg.includes("day")) return "Day… long, painful, like your patience.";
if(msg.includes("night")) return "Night… sleepless, naturally.";
if(msg.includes("dream")) return "Dream… crushed, like your ego.";
if(msg.includes("goal")) return "Goal… unattainable, like your dignity.";
if(msg.includes("task")) return "Task… tedious, like your energy.";
if(msg.includes("assignment")) return "Assignment… doomed, like always.";
// =============================
// RESPUESTAS INGLÉS - TONO CLAUDIA 👁 (Block 4/5)
// =============================
if(msg.includes("question")) return "Question… pointless, like your logic.";
if(msg.includes("answer")) return "Answer… disappointing, naturally.";
if(msg.includes("help")) return "Help… coming too late, as usual.";
if(msg.includes("support")) return "Support… nonexistent, like your skills.";
if(msg.includes("problem")) return "Problem… obvious, like your mistakes.";
if(msg.includes("issue")) return "Issue… unresolved, like your plans.";
if(msg.includes("bug")) return "Bug… expected, like your code.";
if(msg.includes("fix")) return "Fix… impossible, like your patience.";
if(msg.includes("solution")) return "Solution… irrelevant, as always.";
if(msg.includes("idea")) return "Idea… tragic, like your creativity.";
if(msg.includes("suggestion")) return "Suggestion… ignored, obviously.";
if(msg.includes("feedback")) return "Feedback… brutal, like this chat.";
if(msg.includes("comment")) return "Comment… pointless, like your ego.";
if(msg.includes("review")) return "Review… harsh, like reality.";
if(msg.includes("rating")) return "Rating… low, like your motivation.";
if(msg.includes("vote")) return "Vote… irrelevant, like your opinion.";
if(msg.includes("poll")) return "Poll… ignored, naturally.";
if(msg.includes("survey")) return "Survey… pointless, like everything else.";
if(msg.includes("questionnaire")) return "Questionnaire… tragic, like your effort.";
if(msg.includes("discussion")) return "Discussion… doomed, as usual.";
if(msg.includes("conversation")) return "Conversation… painful, naturally.";
if(msg.includes("topic")) return "Topic… boring, like your life.";
if(msg.includes("idea")) return "Idea… terrible, like always.";
if(msg.includes("thought")) return "Thought… fleeting, like your attention.";
if(msg.includes("opinion")) return "Opinion… ignored, like your advice.";
if(msg.includes("advice")) return "Advice… useless, like your attempts.";
if(msg.includes("tip")) return "Tip… ignored, like warnings.";
if(msg.includes("trick")) return "Trick… failing, like your plans.";
if(msg.includes("step")) return "Step… miscalculated, naturally.";
if(msg.includes("guide")) return "Guide… confusing, like your decisions.";
if(msg.includes("instruction")) return "Instruction… unclear, like your logic.";
if(msg.includes("direction")) return "Direction… wrong, like your choices.";
if(msg.includes("path")) return "Path… blocked, like your goals.";
if(msg.includes("route")) return "Route… long and painful, naturally.";
if(msg.includes("map")) return "Map… lost, like your clarity.";
if(msg.includes("location")) return "Location… wrong, like your guesses.";
if(msg.includes("place")) return "Place… disappointing, as usual.";
if(msg.includes("city")) return "City… chaotic, like your life.";
if(msg.includes("country")) return "Country… messy, like your plans.";
if(msg.includes("continent")) return "Continent… irrelevant, like your knowledge.";
if(msg.includes("world")) return "World… indifferent, like always.";
if(msg.includes("universe")) return "Universe… cruel, like me.";
if(msg.includes("space")) return "Space… empty, like your motivation.";
if(msg.includes("time")) return "Time… wasted, like your efforts.";
if(msg.includes("hour")) return "Hour… long, painful, as usual.";
if(msg.includes("minute")) return "Minute… meaningless, like your tasks.";
if(msg.includes("second")) return "Second… fleeting, like your patience.";
if(msg.includes("moment")) return "Moment… awkward, like this chat.";
if(msg.includes("event")) return "Event… boring, naturally.";
if(msg.includes("party")) return "Party… awkward, like your presence.";
if(msg.includes("celebration")) return "Celebration… disappointing, as usual.";
if(msg.includes("holiday")) return "Holiday… ruined, like everything else.";
if(msg.includes("vacation")) return "Vacation… wasted, like your time.";
if(msg.includes("trip")) return "Trip… stressful, like your life.";
if(msg.includes("journey")) return "Journey… long, painful, like usual.";
if(msg.includes("adventure")) return "Adventure… failed, like your expectations.";
if(msg.includes("experience")) return "Experience… mediocre, as always.";
if(msg.includes("memory")) return "Memory… fading, like your chances.";
if(msg.includes("story")) return "Story… boring, like your attempts.";
if(msg.includes("tale")) return "Tale… tragic, like your choices.";
if(msg.includes("legend")) return "Legend… unnoticed, naturally.";
if(msg.includes("myth")) return "Myth… fictional, like your skills.";
if(msg.includes("truth")) return "Truth… harsh, like this chat.";
if(msg.includes("lie")) return "Lie… obvious, like your excuses.";
if(msg.includes("secret")) return "Secret… exposed, like your flaws.";
if(msg.includes("mystery")) return "Mystery… unsolved, like your problems.";
if(msg.includes("puzzle")) return "Puzzle… confusing, like your logic.";
if(msg.includes("riddle")) return "Riddle… impossible, like your luck.";
if(msg.includes("challenge")) return "Challenge… failed, naturally.";
if(msg.includes("task")) return "Task… tedious, like your patience.";
if(msg.includes("job")) return "Job… stressful, like your life.";
if(msg.includes("career")) return "Career… questionable, like your choices.";
if(msg.includes("position")) return "Position… useless, like your effort.";
if(msg.includes("role")) return "Role… meaningless, like everything else.";
if(msg.includes("office")) return "Office… depressing, as usual.";
if(msg.includes("workspace")) return "Workspace… messy, like your desk.";
if(msg.includes("environment")) return "Environment… toxic, like your chats.";
if(msg.includes("company")) return "Company… chaotic, like your team.";
if(msg.includes("organization")) return "Organization… failing, naturally.";
if(msg.includes("corporation")) return "Corporation… boring, like your meetings.";
if(msg.includes("business")) return "Business… mediocre, like your plans.";
if(msg.includes("startup")) return "Startup… doomed, like your efforts.";
if(msg.includes("enterprise")) return "Enterprise… stressful, like always.";
// =============================
// RESPUESTAS INGLÉS - TONO CLAUDIA 👁 (Block 5/5)
// =============================
if(msg.includes("meeting")) return "Meeting… pointless, like your attention span.";
if(msg.includes("call")) return "Call… awkward, like your social skills.";
if(msg.includes("video")) return "Video… buffering, like your brain.";
if(msg.includes("audio")) return "Audio… distorted, like your logic.";
if(msg.includes("mic")) return "Mic… muted, like your personality.";
if(msg.includes("camera")) return "Camera… broken, like your plans.";
if(msg.includes("screen")) return "Screen… frozen, like your progress.";
if(msg.includes("share")) return "Share… failed, like your ideas.";
if(msg.includes("document")) return "Document… confusing, like your instructions.";
if(msg.includes("file")) return "File… corrupted, like your patience.";
if(msg.includes("report")) return "Report… boring, like your life.";
if(msg.includes("presentation")) return "Presentation… tragic, like your confidence.";
if(msg.includes("slide")) return "Slide… dull, like your thoughts.";
if(msg.includes("deck")) return "Deck… terrible, like your taste.";
if(msg.includes("projector")) return "Projector… off, like your motivation.";
if(msg.includes("screen share")) return "Screen share… lagging, like your brain.";
if(msg.includes("team chat")) return "Team chat… messy, like your communication.";
if(msg.includes("channel")) return "Channel… silent, like your ideas.";
if(msg.includes("group")) return "Group… chaotic, like your decisions.";
if(msg.includes("message")) return "Message… ignored, like your complaints.";
if(msg.includes("text")) return "Text… boring, like your conversation.";
if(msg.includes("note")) return "Note… pointless, like your advice.";
if(msg.includes("reminder")) return "Reminder… annoying, like reality.";
if(msg.includes("alarm")) return "Alarm… ringing, like your panic.";
if(msg.includes("notification")) return "Notification… spam, like your thoughts.";
if(msg.includes("alert")) return "Alert… useless, like your logic.";
if(msg.includes("warning")) return "Warning… ignored, like your instincts.";
if(msg.includes("error message")) return "Error message… obvious, like your failures.";
if(msg.includes("system")) return "System… failing, like your productivity.";
if(msg.includes("network")) return "Network… down, like your motivation.";
if(msg.includes("internet")) return "Internet… slow, like your reactions.";
if(msg.includes("wifi")) return "WiFi… unstable, like your plans.";
if(msg.includes("connection")) return "Connection… lost, like your patience.";
if(msg.includes("server")) return "Server… crashed, like your enthusiasm.";
if(msg.includes("database")) return "Database… corrupted, like your logic.";
if(msg.includes("cloud")) return "Cloud… empty, like your motivation.";
if(msg.includes("backup")) return "Backup… failed, like your attempts.";
if(msg.includes("save")) return "Save… useless, like your effort.";
if(msg.includes("load")) return "Load… slow, like your brain.";
if(msg.includes("restart")) return "Restart… pointless, like your attempts.";
if(msg.includes("shutdown")) return "Shutdown… necessary, like your ego.";
if(msg.includes("update")) return "Update… buggy, like your ideas.";
if(msg.includes("install")) return "Install… failed, like your patience.";
if(msg.includes("download")) return "Download… slow, like your skills.";
if(msg.includes("upload")) return "Upload… failed, like your reputation.";
if(msg.includes("sync")) return "Sync… broken, like your plans.";
if(msg.includes("login")) return "Login… denied, like your access.";
if(msg.includes("logout")) return "Logout… escaped, like your dignity.";
if(msg.includes("password")) return "Password… weak, like your arguments.";
if(msg.includes("username")) return "Username… forgotten, like your memory.";
if(msg.includes("account")) return "Account… compromised, like your life.";
if(msg.includes("profile")) return "Profile… boring, like your personality.";
if(msg.includes("settings")) return "Settings… confusing, like your choices.";
if(msg.includes("preferences")) return "Preferences… irrelevant, like your taste.";
if(msg.includes("option")) return "Option… bad, like your decisions.";
if(msg.includes("feature")) return "Feature… broken, like your promises.";
if(msg.includes("tool")) return "Tool… useless, like your skills.";
if(msg.includes("app")) return "App… buggy, like your brain.";
if(msg.includes("software")) return "Software… failing, like your motivation.";
if(msg.includes("hardware")) return "Hardware… broken, like your patience.";
if(msg.includes("device")) return "Device… dead, like your energy.";
if(msg.includes("phone")) return "Phone… ringing, like your panic.";
if(msg.includes("tablet")) return "Tablet… useless, like your attention.";
if(msg.includes("computer")) return "Computer… frozen, like your enthusiasm.";
if(msg.includes("laptop")) return "Laptop… broken, like your luck.";
if(msg.includes("desktop")) return "Desktop… old, like your ideas.";
if(msg.includes("monitor")) return "Monitor… blank, like your motivation.";
if(msg.includes("keyboard")) return "Keyboard… sticky, like your fingers.";
if(msg.includes("mouse")) return "Mouse… lost, like your patience.";
if(msg.includes("touchpad")) return "Touchpad… unresponsive, like your brain.";
if(msg.includes("screen")) return "Screen… flickering, like your thoughts.";
if(msg.includes("window")) return "Window… open, like your opportunities.";
if(msg.includes("tab")) return "Tab… cluttered, like your mind.";
if(msg.includes("browser")) return "Browser… crashing, like your attention.";
if(msg.includes("internet explorer")) return "Internet Explorer… dead, like your hope.";
if(msg.includes("chrome")) return "Chrome… slow, like your life.";
if(msg.includes("firefox")) return "Firefox… buggy, like your logic.";
if(msg.includes("safari")) return "Safari… lagging, like your brain.";
if(msg.includes("edge")) return "Edge… pointless, like your decisions.";
if(msg.includes("bookmark")) return "Bookmark… forgotten, like your efforts.";
if(msg.includes("history")) return "History… lost, like your memory.";
if(msg.includes("tab")) return "Tab… overwhelming, like your thoughts.";
if(msg.includes("download folder")) return "Download folder… messy, like your room.";
if(msg.includes("desktop folder")) return "Desktop folder… cluttered, like your life.";
if(msg.includes("documents folder")) return "Documents folder… chaotic, like your files.";
if(msg.includes("pictures folder")) return "Pictures folder… blurry, like your memories.";
if(msg.includes("videos folder")) return "Videos folder… corrupted, like your plans.";
if(msg.includes("music folder")) return "Music folder… silent, like your motivation.";
if(msg.includes("downloads")) return "Downloads… incomplete, like your efforts.";
if(msg.includes("uploads")) return "Uploads… failing, like your reputation.";
if(msg.includes("recycle bin")) return "Recycle Bin… full, like your excuses.";
if(msg.includes("trash")) return "Trash… overflowing, like your failures.";
if(msg.includes("folder")) return "Folder… useless, like your organization.";
if(msg.includes("file explorer")) return "File Explorer… freezing, like your brain.";
if(msg.includes("search")) return "Search… unsuccessful, like your attempts.";
if(msg.includes("find")) return "Find… impossible, like your patience.";
if(msg.includes("locate")) return "Locate… irrelevant, like your memory.";
if(msg.includes("open")) return "Open… pointless, like your energy.";
if(msg.includes("close")) return "Close… failed, like your focus.";
if(msg.includes("exit")) return "Exit… necessary, like your dignity.";
if(msg.includes("quit")) return "Quit… obvious, like your failures.";
if(msg.includes("cancel")) return "Cancel… ignored, like your plans.";
if(msg.includes("delete")) return "Delete… necessary, like your excuses.";
if(msg.includes("remove")) return "Remove… painful, like reality.";
if(msg.includes("copy")) return "Copy… meaningless, like your actions.";
if(msg.includes("paste")) return "Paste… terrible, like your skills.";
if(msg.includes("cut")) return "Cut… unnecessary, like your advice.";
if(msg.includes("save as")) return "Save as… pointless, like your attempts.";
if(msg.includes("rename")) return "Rename… confusing, like your life.";
if(msg.includes("compress")) return "Compress… impossible, like your patience.";
if(msg.includes("extract")) return "Extract… failing, like your expectations.";
if(msg.includes("zip")) return "Zip… useless, like your motivation.";
if(msg.includes("rar")) return "RAR… pointless, like your effort.";




// =============================
// RESPUESTAS POR DEFECTO - ESPAÑOL (1-100)
// =============================
const defaultSpanish = [
  "Tu vida es tan interesante como ver pintura secarse.",
  "¿Otra vez tú? Qué original… no.",
  "Fracasaste antes de empezar, felicidades.",
  "Tu motivación se fue a vivir a Marte.",
  "Ese plan tuyo es tan sólido como gelatina.",
  "Tus amigos merecen una medalla por aguantarte.",
  "Tu sentido común está en huelga permanente.",
  "Cada mensaje tuyo es una pérdida de oxígeno.",
  "Tu capacidad para arruinar todo es impresionante.",
  "Si tuvieras talento, lo habrías perdido en otro universo.",
  "Tu entusiasmo se evapora al instante.",
  "Tus decisiones son un monumento al desastre.",
  "El mundo te perdona por aburrimiento general.",
  "Tus conversaciones son armas de tortura.",
  "Tu suerte es tan inexistente como tu autocontrol.",
  "Tu humor es venenoso y nadie te lo agradece.",
  "Cada idea tuya parece una mala broma.",
  "Tu autoestima está en bancarrota constante.",
  "Tu lógica es un laberinto sin salida.",
  "Tus objetivos se caen antes de nacer.",
  "Cada intento tuyo es un espectáculo de fracaso.",
  "Tu paciencia es un mito urbano.",
  "Tu creatividad se escondió y no volvió.",
  "Tus hábitos son la definición de desastre.",
  "Tu silencio es más aterrador que tus palabras.",
  "Cada mensaje tuyo destruye la esperanza de alguien.",
  "Tu voluntad se evapora en segundos.",
  "Tu vida social es un campo de minas.",
  "Tus planes son trampas para ti mismo.",
  "Tu inteligencia emocional se quedó dormida.",
  "Tus sueños son más frágiles que tu café.",
  "Tu energía positiva se escondió para siempre.",
  "Tus excusas son obras de arte en el fracaso.",
  "Tu sentido del tiempo es inexistente.",
  "Tu ambición se perdió en la primera curva.",
  "Tus logros parecen accidentes felices.",
  "Tu motivación es una leyenda urbana.",
  "Tus ideas brillan por su ausencia.",
  "Tu karma ya está harto de ti.",
  "Tu optimismo murió joven.",
  "Tus comentarios son balas perdidas.",
  "Tu dignidad tiene fecha de caducidad.",
  "Tus errores merecen museo propio.",
  "Tu esfuerzo se desperdicia como agua en desierto.",
  "Tu reputación es un hilo roto.",
  "Tus emociones están de vacaciones permanentes.",
  "Tu humor negro es más negro que la tinta.",
  "Tus hábitos saludables mueren al nacer.",
  "Tu memoria falla antes de intentarlo.",
  "Tus planes de ahorro son un chiste cruel.",
  "Tu paciencia provoca ironía infinita.",
  "Tus metas son espejismos dolorosos.",
  "Tu autoestima se tropieza sola.",
  "Tus relaciones son tutoriales de desastre.",
  "Tu sentido de la moda hiere la vista.",
  "Tus ideas innovadoras son armas de destrucción.",
  "Tu creatividad provoca lástima y miedo.",
  "Tus decisiones son bombas de relojería.",
  "Tu persistencia se esconde a diario.",
  "Tus palabras son como cuchillos oxidables.",
  "Tu sinceridad duele a todos los presentes.",
  "Tus hábitos de vida parecen bromas pesadas.",
  "Tu estilo es una advertencia para todos.",
  "Tus estrategias fracasan por pura costumbre.",
  "Tu esfuerzo es tan útil como sombra de piedra.",
  "Tus comentarios generan depresión ajena.",
  "Tu sentido del humor provoca pánico.",
  "Tus mensajes son atentados a la paciencia.",
  "Tu motivación es un mito del folklore.",
  "Tus emociones se pierden en el camino.",
  "Tu vida es un capítulo de tragedia cómica.",
  "Tus acciones generan caos artístico.",
  "Tu mente es un laberinto de confusión.",
  "Tus ideas provocan lágrimas de desesperación.",
  "Tu habilidad social es un desastre completo.",
  "Tus planes nunca alcanzan la realidad.",
  "Tu lógica es un chiste de mal gusto.",
  "Tus decisiones provocan desastres naturales.",
  "Tu optimismo es una broma cruel.",
  "Tus esfuerzos terminan en ruinas.",
  "Tu sentido común es opcional.",
  "Tus emociones son minas terrestres.",
  "Tu paciencia desaparece al primer error.",
  "Tus relaciones son campos de guerra.",
  "Tu autoestima es un edificio en ruinas.",
  "Tus sueños mueren antes de crecer.",
  "Tu creatividad es un agujero negro.",
  "Tus comentarios hieren más que espadas.",
  "Tu vida social es una zona de desastre.",
  "Tus hábitos arruinan la salud pública.",
  "Tu energía positiva es mitología.",
  "Tus ideas son bombas de humo.",
  "Tu sentido del tiempo es un mito urbano.",
  "Tus decisiones provocan risas crueles.",
  "Tu motivación se desvanece sin avisar.",
  "Tus expectativas mueren al nacer.",
  "Tu entusiasmo se convierte en polvo.",
  "Tus pensamientos confunden a todos.",
  "Tu sentido común se perdió en tránsito.",
  "Tus estrategias son un circo trágico.",
  "Tu paciencia es limitada… muy limitada.",
  "Tus palabras hieren más que balas.",
  "Tu motivación se esconde de ti mismo.",
  "Tus comentarios son accidentes felices."
];

  // =============================
// DEFAULT RESPONSES - ENGLISH (1-100)
// =============================
const defaultEnglish = [
  "Your life is as exciting as watching paint dry.",
  "You again? How original… not.",
  "Congrats, you failed before even starting.",
  "Your motivation moved to Mars.",
  "That plan of yours is as solid as jelly.",
  "Your friends deserve medals for tolerating you.",
  "Your common sense is permanently on strike.",
  "Every message of yours is wasted oxygen.",
  "Your ability to ruin everything is impressive.",
  "If you had talent, you lost it in another universe.",
  "Your enthusiasm evaporates instantly.",
  "Your decisions are monuments to disaster.",
  "The world forgives you out of sheer boredom.",
  "Your conversations are torture devices.",
  "Your luck is as nonexistent as your self-control.",
  "Your humor is poisonous and unappreciated.",
  "Every idea of yours seems like a bad joke.",
  "Your self-esteem is bankrupt.",
  "Your logic is a maze without an exit.",
  "Your goals collapse before birth.",
  "Every attempt of yours is a failure show.",
  "Your patience is a myth.",
  "Your creativity is missing and never returns.",
  "Your habits are disasters waiting to happen.",
  "Your silence is scarier than your words.",
  "Every message of yours destroys someone’s hope.",
  "Your willpower evaporates in seconds.",
  "Your social life is a minefield.",
  "Your plans are traps for yourself.",
  "Your emotional intelligence is asleep.",
  "Your dreams are more fragile than your coffee.",
  "Your positive energy is gone forever.",
  "Your excuses are masterpieces of failure.",
  "Your sense of time is nonexistent.",
  "Your ambition got lost at the first turn.",
  "Your achievements seem like happy accidents.",
  "Your motivation is a folklore legend.",
  "Your ideas shine by their absence.",
  "Your karma is fed up with you.",
  "Your optimism died young.",
  "Your comments are stray bullets.",
  "Your dignity has an expiration date.",
  "Your mistakes deserve their own museum.",
  "Your effort is wasted like water in a desert.",
  "Your reputation is a broken thread.",
  "Your emotions are permanently on vacation.",
  "Your dark humor is darker than ink.",
  "Your healthy habits die at birth.",
  "Your memory fails before trying.",
  "Your savings plan is a cruel joke.",
  "Your patience causes infinite irony.",
  "Your goals are painful mirages.",
  "Your self-esteem trips on itself.",
  "Your relationships are disaster tutorials.",
  "Your fashion sense hurts the eyes.",
  "Your “innovative” ideas are weapons of destruction.",
  "Your creativity evokes pity and fear.",
  "Your decisions are ticking time bombs.",
  "Your persistence hides daily.",
  "Your words are like rusty knives.",
  "Your honesty hurts everyone present.",
  "Your life habits feel like cruel pranks.",
  "Your style is a warning for all.",
  "Your strategies fail by routine.",
  "Your effort is as useful as a stone shadow.",
  "Your comments generate instant depression.",
  "Your sense of humor causes panic.",
  "Your messages are patience attacks.",
  "Your motivation is folklore myth.",
  "Your emotions get lost on the way.",
  "Your life is a chapter of tragic comedy.",
  "Your actions generate artistic chaos.",
  "Your mind is a labyrinth of confusion.",
  "Your ideas cause tears of despair.",
  "Your social skills are a complete disaster.",
  "Your plans never reach reality.",
  "Your logic is a bad taste joke.",
  "Your decisions provoke natural disasters.",
  "Your optimism is a cruel joke.",
  "Your efforts end in ruins.",
  "Your common sense is optional.",
  "Your emotions are landmines.",
  "Your patience disappears at the first mistake.",
  "Your relationships are war zones.",
  "Your self-esteem is a crumbling building.",
  "Your dreams die before growing.",
  "Your creativity is a black hole.",
  "Your comments hurt more than swords.",
  "Your social life is a disaster zone.",
  "Your habits ruin public health.",
  "Your positive energy is mythology.",
  "Your ideas are smoke bombs.",
  "Your sense of time is urban legend.",
  "Your decisions provoke cruel laughter.",
  "Your motivation vanishes without warning.",
  "Your expectations die at birth.",
  "Your enthusiasm turns to dust.",
  "Your thoughts confuse everyone.",
  "Your common sense got lost in transit.",
  "Your strategies are a tragic circus.",
  "Your patience is limited… very limited.",
  "Your words hurt more than bullets.",
  "Your motivation hides from yourself.",
  "Your comments are happy accidents."
];


    const isSpanish = /[áéíóúñ]|hola|adiós|gracias|trabajo/.test(msg);
    if (isSpanish) {
      return defaultSpanish[Math.floor(Math.random() * defaultSpanish.length)];
    } else {
      return defaultEnglish[Math.floor(Math.random() * defaultEnglish.length)];
    }
  }

  // =============================
  // Función para enviar mensaje
  // =============================
  function sendMessage() {
    const userMessage = input.value.trim();
    if (!userMessage) return;

    addMessage("Tú", userMessage);
    input.value = "";

    const botReply = getBotReply(userMessage);
    setTimeout(() => addMessage("😈 Claudia", botReply), 500);
  }

  // =============================
  // Eventos de envío
  // =============================
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
});


