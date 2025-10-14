document.addEventListener("DOMContentLoaded", () => {
  let stress = 0;
  let chaos = 0;
  let happiness = 100;
  let embarrassment = 0;
  let currentEvent = 0;

  const eventText = document.getElementById("event-text");
  const optionsContainer = document.getElementById("options-container");
  const restartBtn = document.getElementById("restart-btn");
  const stressBar = document.getElementById("stress-bar");
  const chaosBar = document.getElementById("chaos-bar");
  const happinessBar = document.getElementById("happiness-bar");
  const embarrassmentBar = document.getElementById("embarrassment-bar");

  const events = [
    { text: "Your boss asks for an urgent report. What do you do?", options: [["Do it quickly",20,10,-5,0],["Ignore it",30,20,-10,5],["Delegate it",40,30,-15,10]] },
    { text: "The coffee machine breaks. What do you do?", options: [["Try to fix it",10,5,-5,0],["Blame IT",5,10,-10,5],["Ignore it",0,0,-15,0]] },
    { text: "You get an unexpected email from HR. Open it?", options: [["Open immediately",15,5,-10,5],["Ignore",10,0,-5,0],["Forward to colleague",20,10,-15,10]] },
    { text: "Printer jammed. What's your move?", options: [["Fix it yourself",5,5,-5,0],["Call IT",0,10,-5,0],["Kick it",20,20,-10,5]] },
    { text: "A coworker stole your lunch. Reaction?", options: [["Complain loudly",10,5,-5,10],["Ignore",0,0,0,0],["Report to manager",20,10,-5,5]] },
    { text: "Team meeting starts early. Your choice?", options: [["Participate actively",10,10,-5,0],["Pretend busy",5,5,0,5],["Sleep under desk",20,20,-20,10]] },
    { text: "Accidentally reply-all to a private email. Reaction?", options: [["Apologize",15,5,-5,10],["Ignore",20,10,-10,5],["Blame IT",10,0,-5,0]] },
    { text: "Fire drill! You are unprepared. Action?", options: [["Evacuate",5,10,-5,0],["Hide in office",20,5,-10,5],["Prank colleagues",30,20,-15,10]] },
    { text: "You spilled coffee on important documents. Response?", options: [["Clean quickly",10,5,-5,5],["Ignore",20,10,-10,5],["Blame janitor",30,20,-5,10]] },
    { text: "IT asks you to install software immediately. Decision?", options: [["Install",10,5,-5,0],["Delay",20,10,-5,5],["Delegate",30,15,-10,5]] },
    { text: "Your desk chair collapses. Reaction?", options: [["Laugh it off",5,0,-5,0],["Complain",10,5,-10,5],["Use it anyway",20,10,-15,10]] },
    { text: "Surprise performance review. Your move?", options: [["Answer honestly",10,5,-5,0],["Lie",20,10,-10,5],["Cry silently",30,15,-5,10]] },
    { text: "Company party starts suddenly. Join?", options: [["Dance",5,10,5,0],["Hide",0,0,0,0],["Prank boss",20,20,-5,10]] },
    { text: "You receive a mysterious memo. Action?", options: [["Read",10,5,-5,5],["Ignore",0,0,0,0],["Tear it up",15,10,-5,10]] },
    { text: "End of the day. One last decision: relax?", options: [["Meditate",-10,0,10,0],["Go home quietly",0,0,0,0],["Prank IT",20,20,-5,10]] },
    { text: "You accidentally break the office printer.", options: [["Fix it",10,10,-5,0],["Hide the evidence",20,20,-10,5],["Blame someone else",30,15,-15,10]] },
    { text: "Coffee spill on your keyboard.", options: [["Clean it",5,0,-5,0],["Ignore it",0,0,-10,5],["Panic",15,5,-15,10]] },
    { text: "You forgot to send an important email.", options: [["Send immediately",10,5,-5,0],["Blame IT",20,10,-10,5],["Do nothing",0,0,-15,10]] },
    { text: "Your colleague took credit for your work.", options: [["Confront them",20,10,-5,5],["Ignore",0,0,0,0],["Report to manager",30,15,-10,10]] },
    { text: "Office Wi-Fi goes down during a meeting.", options: [["Call IT",5,5,-5,0],["Panic",20,10,-10,5],["Continue with phone hotspot",10,0,-5,0]] }
  ];

  function updateBars() {
    stressBar.style.width = stress + "%";
    chaosBar.style.width = chaos + "%";
    happinessBar.style.width = happiness + "%";
    embarrassmentBar.style.width = embarrassment + "%";
  }

  function applyConsequences(s, c, h, e) {
    stress = Math.min(100, Math.max(0, stress + s));
    chaos = Math.min(100, Math.max(0, chaos + c));
    happiness = Math.min(100, Math.max(0, happiness + h));
    embarrassment = Math.min(100, Math.max(0, embarrassment + e));
    updateBars();
  }

  function getEndingMessage() {
    if (stress >= 100) return "You reached ultimate stress. HR sends you a mindfulness link... after firing you.";
    if (chaos >= 100) return "Chaos reigns supreme. The office burns, but at least it’s warm.";
    if (embarrassment >= 100) return "Your embarrassment peaked. You’re now the office meme forever.";
    if (happiness <= 0) return "Happiness hit rock bottom. You now officially identify as a spreadsheet.";
    return "Somehow you survived the office. Congratulations, corporate gladiator.";
  }

  function checkGameOver() {
    if (happiness <= 0 || stress >= 100 || chaos >= 100 || embarrassment >= 100) {
      eventText.innerHTML = `<h2>${getEndingMessage()}</h2>`;
      optionsContainer.innerHTML = "";
      restartBtn.style.display = "block";
      return true;
    }
    return false;
  }

  function showEvent(index) {
    if (checkGameOver()) return;
    if (index >= events.length) {
      eventText.innerHTML = "<h2>You survived another corporate day. Barely.</h2>";
      optionsContainer.innerHTML = "";
      restartBtn.style.display = "block";
      return;
    }

    const ev = events[index];
    eventText.textContent = ev.text;
    optionsContainer.innerHTML = "";

    ev.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.textContent = opt[0];
      btn.addEventListener("click", () => {
        applyConsequences(opt[1], opt[2], opt[3], opt[4]);
        currentEvent++;
        showEvent(currentEvent);
      });
      optionsContainer.appendChild(btn);
    });
  }

  restartBtn.addEventListener("click", () => {
    stress = 0; chaos = 0; happiness = 100; embarrassment = 0;
    currentEvent = 0;
    restartBtn.style.display = "none";
    updateBars();
    showEvent(currentEvent);
  });

  updateBars();
  showEvent(currentEvent);
});







/*
    { text: "Your boss asks for an urgent report. What do you do?", options: [["Do it quickly",20,10,-5,0],["Ignore it",30,20,-10,5],["Delegate it",40,30,-15,10]] },
    { text: "The coffee machine breaks. What do you do?", options: [["Try to fix it",10,5,-5,0],["Blame IT",5,10,-10,5],["Ignore it",0,0,-15,0]] },
    { text: "You get an unexpected email from HR. Open it?", options: [["Open immediately",15,5,-10,5],["Ignore",10,0,-5,0],["Forward to colleague",20,10,-15,10]] },
    { text: "Printer jammed. What's your move?", options: [["Fix it yourself",5,5,-5,0],["Call IT",0,10,-5,0],["Kick it",20,20,-10,5]] },
    { text: "A coworker stole your lunch. Reaction?", options: [["Complain loudly",10,5,-5,10],["Ignore",0,0,0,0],["Report to manager",20,10,-5,5]] },
    { text: "Team meeting starts early. Your choice?", options: [["Participate actively",10,10,-5,0],["Pretend busy",5,5,0,5],["Sleep under desk",20,20,-20,10]] },
    { text: "Accidentally reply-all to a private email. Reaction?", options: [["Apologize",15,5,-5,10],["Ignore",20,10,-10,5],["Blame IT",10,0,-5,0]] },
    { text: "Fire drill! You are unprepared. Action?", options: [["Evacuate",5,10,-5,0],["Hide in office",20,5,-10,5],["Prank colleagues",30,20,-15,10]] },
    { text: "You spilled coffee on important documents. Response?", options: [["Clean quickly",10,5,-5,5],["Ignore",20,10,-10,5],["Blame janitor",30,20,-5,10]] },
    { text: "IT asks you to install software immediately. Decision?", options: [["Install",10,5,-5,0],["Delay",20,10,-5,5],["Delegate",30,15,-10,5]] },
    { text: "Your desk chair collapses. Reaction?", options: [["Laugh it off",5,0,-5,0],["Complain",10,5,-10,5],["Use it anyway",20,10,-15,10]] },
    { text: "Surprise performance review. Your move?", options: [["Answer honestly",10,5,-5,0],["Lie",20,10,-10,5],["Cry silently",30,15,-5,10]] },
    { text: "Company party starts suddenly. Join?", options: [["Dance",5,10,5,0],["Hide",0,0,0,0],["Prank boss",20,20,-5,10]] },
    { text: "You receive a mysterious memo. Action?", options: [["Read",10,5,-5,5],["Ignore",0,0,0,0],["Tear it up",15,10,-5,10]] },
    { text: "End of the day. One last decision: relax?", options: [["Meditate",-10,0,10,0],["Go home quietly",0,0,0,0],["Prank IT",20,20,-5,10]] },
    { text: "You accidentally break the office printer.", options: [["Fix it",10,10,-5,0],["Hide the evidence",20,20,-10,5],["Blame someone else",30,15,-15,10]] },
    { text: "Coffee spill on your keyboard.", options: [["Clean it",5,0,-5,0],["Ignore it",0,0,-10,5],["Panic",15,5,-15,10]] },
    { text: "You forgot to send an important email.", options: [["Send immediately",10,5,-5,0],["Blame IT",20,10,-10,5],["Do nothing",0,0,-15,10]] },
    { text: "Your colleague took credit for your work.", options: [["Confront them",20,10,-5,5],["Ignore",0,0,0,0],["Report to manager",30,15,-10,10]] },
    { text: "Office Wi-Fi goes down during a meeting.", options: [["Call IT",5,5,-5,0],["Panic",20,10,-10,5],["Continue with phone hotspot",10,0,-5,0]] }
*/