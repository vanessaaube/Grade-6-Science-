const questions = [
  { topic: "particles", section: "Particles", prompt: "According to the particle model, all matter is made of…", choices: ["energy only", "tiny particles", "empty space only", "one continuous substance"], answer: 1, explanation: "The particle model says every solid, liquid, and gas is made of tiny particles too small to see without special tools." },
  { topic: "particles", section: "Particles", prompt: "How are particles arranged in a solid?", choices: ["Far apart and random", "Close together in fixed positions", "Only at the bottom", "In separate layers"], answer: 1, explanation: "Solid particles are packed closely in fixed positions. They vibrate, but they do not slide past one another." },
  { topic: "particles", section: "Particles", prompt: "What do particles in a liquid do?", choices: ["Stay completely still", "Disappear and reappear", "Stay close but slide past each other", "Spread very far apart"], answer: 2, explanation: "Liquid particles remain close together but can move and slide around each other, so a liquid can flow." },
  { topic: "particles", section: "Particles", prompt: "Which description best matches a gas?", choices: ["Particles are far apart and move freely", "Particles are locked into a pattern", "Particles have no energy", "Particles touch in neat rows"], answer: 0, explanation: "Gas particles have lots of space between them and move quickly in all directions." },
  { topic: "particles", section: "Particles", prompt: "Why can a gas be compressed more easily than a liquid?", choices: ["Gas particles are softer", "There is more empty space between gas particles", "Gas particles have no mass", "Liquids are always cold"], answer: 1, explanation: "A gas has large spaces between its particles. Compression pushes those particles closer together." },
  { topic: "particles", section: "Particles", prompt: "When perfume spreads across a room, this shows that gas particles…", choices: ["are motionless", "are moving and mixing", "turn into solids", "lose all energy"], answer: 1, explanation: "Perfume particles move through the air and mix with air particles. This spreading is called diffusion." },

  { topic: "heat-phases", section: "Heat + phases", prompt: "What is thermal energy?", choices: ["Energy connected to particle motion", "The amount of matter", "A type of matter", "The size of a container"], answer: 0, explanation: "Thermal energy is related to the motion and arrangement of particles in matter." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "What usually happens to particles when matter is heated?", choices: ["They move faster", "They stop moving", "They become smaller", "They lose mass"], answer: 0, explanation: "Heating adds thermal energy. The particles usually move faster and may spread farther apart." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "Melting is the change from…", choices: ["gas to liquid", "liquid to solid", "solid to liquid", "solid to gas only"], answer: 2, explanation: "During melting, a solid gains thermal energy and becomes a liquid." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "Freezing happens when a liquid…", choices: ["gains enough energy to become gas", "loses energy and becomes solid", "is mixed with another liquid", "becomes warmer"], answer: 1, explanation: "A liquid freezes when it loses thermal energy and its particles settle into fixed positions." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "Evaporation changes a liquid into a…", choices: ["solid", "gas", "different element", "crystal only"], answer: 1, explanation: "During evaporation, particles at the liquid's surface gain enough energy to escape as a gas." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "Condensation is most likely to form on…", choices: ["the outside of a cold glass", "a dry towel in a drawer", "a warm, empty plate", "a sealed bag of ice"], answer: 0, explanation: "Water vapour loses thermal energy near the cold glass and changes from gas to liquid droplets." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "Which phase change can happen at the surface of a liquid below its boiling point?", choices: ["Freezing", "Melting", "Evaporation", "Condensation"], answer: 2, explanation: "Evaporation can happen from a liquid's surface at many temperatures, not only at the boiling point." },
  { topic: "heat-phases", section: "Heat + phases", prompt: "During boiling, bubbles in water are mainly filled with…", choices: ["oxygen only", "liquid water", "water vapour", "nothing at all"], answer: 2, explanation: "At the boiling point, liquid water changes into water vapour throughout the liquid, forming bubbles." },

  { topic: "temperature", section: "Temperature", prompt: "Temperature is a measure related to the…", choices: ["average motion of particles", "colour of a material", "shape of a container", "total amount of matter only"], answer: 0, explanation: "Temperature tells us about the average kinetic energy—the average motion—of particles." },
  { topic: "temperature", section: "Temperature", prompt: "Which tool measures temperature?", choices: ["Balance", "Ruler", "Thermometer", "Graduated cylinder"], answer: 2, explanation: "A thermometer measures temperature. Different thermometers may use liquid expansion or electronic sensors." },
  { topic: "temperature", section: "Temperature", prompt: "In Canada, everyday temperatures are commonly measured in…", choices: ["metres", "degrees Celsius", "grams", "litres"], answer: 1, explanation: "Degrees Celsius (°C) is the common temperature unit used for weather and science measurements in Canada." },
  { topic: "temperature", section: "Temperature", prompt: "At normal air pressure, pure water freezes at…", choices: ["0 °C", "10 °C", "50 °C", "100 °C"], answer: 0, explanation: "Pure water freezes at 0 °C under normal atmospheric pressure." },
  { topic: "temperature", section: "Temperature", prompt: "At normal air pressure, pure water boils at…", choices: ["0 °C", "37 °C", "50 °C", "100 °C"], answer: 3, explanation: "Pure water boils at 100 °C under normal atmospheric pressure." },
  { topic: "temperature", section: "Temperature", prompt: "Two cups are both at 20 °C, but one has more water. Which statement is true?", choices: ["They have the same temperature", "The fuller cup must be hotter", "The smaller cup has no thermal energy", "Temperature measures volume"], answer: 0, explanation: "Both cups have the same temperature. The fuller cup may have more total thermal energy because it contains more particles." },

  { topic: "real-world", section: "Real world", prompt: "Most materials expand when they are…", choices: ["heated", "cooled", "weighed", "cut"], answer: 0, explanation: "Heating makes particles move more and usually spread slightly farther apart, causing expansion." },
  { topic: "real-world", section: "Real world", prompt: "Why are small gaps left between sections of a bridge?", choices: ["To collect rain", "To let materials expand in hot weather", "To make the bridge lighter only", "To stop all vibration"], answer: 1, explanation: "Expansion joints give bridge materials room to expand when heated without buckling or cracking." },
  { topic: "real-world", section: "Real world", prompt: "A tight metal jar lid may loosen under warm water because the lid…", choices: ["expands slightly", "freezes", "loses all its particles", "turns into a liquid"], answer: 0, explanation: "Warm water heats the metal, making it expand slightly. This can loosen its grip on the jar." },
  { topic: "real-world", section: "Real world", prompt: "Why can water pipes burst when the water inside freezes?", choices: ["Water disappears", "Water expands as it freezes", "Ice becomes warmer than fire", "The pipe loses its mass"], answer: 1, explanation: "Water is unusual: it expands when it freezes. The expanding ice pushes hard against the pipe." },
  { topic: "real-world", section: "Real world", prompt: "Why does ice float on liquid water?", choices: ["Ice has no mass", "Ice is less dense than liquid water", "Ice is always full of air", "Cold objects always float"], answer: 1, explanation: "When water freezes, its particles form an open structure. Ice is therefore less dense than liquid water and floats." },
  { topic: "real-world", section: "Real world", prompt: "Why are overhead power lines installed with some sag?", choices: ["They contract in cold weather", "They turn into liquid", "They grow heavier in sunlight", "They need to collect water"], answer: 0, explanation: "Metal wires contract when cooled. Extra sag helps prevent them from becoming too tight and snapping in cold weather." },

  { topic: "explain-it", section: "Explain it", prompt: "A puddle is gone after a sunny afternoon. What happened?", choices: ["The water was destroyed", "The water evaporated into the air", "The ground turned it into a solid", "The water lost all motion"], answer: 1, explanation: "Sunlight added thermal energy. Water particles escaped from the puddle's surface as water vapour." },
  { topic: "explain-it", section: "Explain it", prompt: "Droplets form on a bathroom mirror after a hot shower. Why?", choices: ["The mirror leaks", "Water vapour cools and condenses", "Glass becomes water", "The room is freezing"], answer: 1, explanation: "Warm water vapour touches the cooler mirror, loses thermal energy, and condenses into liquid droplets." },
  { topic: "explain-it", section: "Explain it", prompt: "A balloon gets smaller when placed in a freezer. What is the best particle explanation?", choices: ["The gas particles cool, move more slowly, and come closer", "The gas particles vanish", "The rubber turns to water", "Cold creates extra gravity"], answer: 0, explanation: "Cooling reduces the motion of gas particles. They collide with the balloon less strongly, so the balloon contracts." },
  { topic: "explain-it", section: "Explain it", prompt: "Which sentence best summarizes a phase change?", choices: ["A new kind of particle is created", "Matter changes state while its particles remain the same substance", "Matter loses all mass", "Temperature always rises"], answer: 1, explanation: "In a physical phase change, the substance stays the same. Its particles change motion, spacing, or arrangement." }
];

const topicInfo = {
  particles: { number: "01", title: "Particles", subtitle: "How matter is built" },
  "heat-phases": { number: "02", title: "Heat + phases", subtitle: "Energy makes matter change" },
  temperature: { number: "03", title: "Temperature", subtitle: "Measuring particle motion" },
  "real-world": { number: "04", title: "Real world", subtitle: "Expansion, contraction, and water" },
  "explain-it": { number: "05", title: "Explain it", subtitle: "Use the model to explain what you see" }
};

const STORAGE_KEY = "matter-lab-grade6-answers-v1";
const quizList = document.getElementById("quizList");
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const scoreText = document.getElementById("scoreText");
const results = document.getElementById("results");
const resultTitle = document.getElementById("resultTitle");
const resultSummary = document.getElementById("resultSummary");
let responses = loadResponses();

function loadResponses() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveResponses() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(responses));
  } catch {
    // Some browsers restrict storage for pages opened directly from disk.
    // The quiz still works for the current session in that case.
  }
}

function buildQuiz() {
  const topics = [...new Set(questions.map(q => q.topic))];
  quizList.innerHTML = topics.map(topic => {
    const info = topicInfo[topic];
    const cards = questions.map((q, index) => ({ q, index })).filter(item => item.q.topic === topic).map(({ q, index }) => questionTemplate(q, index)).join("");
    return `
      <section class="topic-block" id="${topic}" aria-labelledby="${topic}-title">
        <div class="topic-heading">
          <span class="topic-number" aria-hidden="true">${info.number}</span>
          <div><h3 id="${topic}-title">${info.title}</h3><p>${info.subtitle}</p></div>
        </div>
        <div class="questions">${cards}</div>
      </section>`;
  }).join("");

  quizList.addEventListener("change", handleAnswer);
  restoreSelections();
  updateSummary();
}

function questionTemplate(q, index) {
  const options = q.choices.map((choice, choiceIndex) => `
    <label class="answer-option" data-choice="${choiceIndex}">
      <input type="radio" name="question-${index}" value="${choiceIndex}" aria-describedby="feedback-${index}">
      <span class="custom-radio" aria-hidden="true"></span>
      <span>${choice}</span>
    </label>`).join("");
  return `
    <article class="question-card" data-question="${index}">
      <p class="question-label">Question ${index + 1} of ${questions.length}</p>
      <p class="question-text" id="question-${index}">${q.prompt}</p>
      <fieldset class="answers" aria-labelledby="question-${index}">${options}</fieldset>
      <div class="feedback" id="feedback-${index}" role="status" aria-live="polite"></div>
    </article>`;
}

function handleAnswer(event) {
  if (!event.target.matches('input[type="radio"]')) return;
  const card = event.target.closest(".question-card");
  const questionIndex = Number(card.dataset.question);
  responses[questionIndex] = Number(event.target.value);
  saveResponses();
  showFeedback(questionIndex, true);
  updateSummary();
}

function restoreSelections() {
  Object.entries(responses).forEach(([index, value]) => {
    const input = quizList.querySelector(`input[name="question-${index}"][value="${value}"]`);
    if (input) {
      input.checked = true;
      showFeedback(Number(index), false);
    }
  });
}

function showFeedback(index, announce) {
  const q = questions[index];
  const selected = responses[index];
  const card = quizList.querySelector(`[data-question="${index}"]`);
  const feedback = document.getElementById(`feedback-${index}`);
  const optionLabels = card.querySelectorAll(".answer-option");
  const isCorrect = selected === q.answer;

  card.classList.toggle("correct", isCorrect);
  card.classList.toggle("incorrect", !isCorrect);
  optionLabels.forEach((label, optionIndex) => {
    label.classList.toggle("is-wrong", optionIndex === selected && !isCorrect);
    label.classList.toggle("is-correct", optionIndex === selected && isCorrect);
  });

  feedback.className = `feedback visible ${isCorrect ? "correct" : "incorrect"}`;
  if (isCorrect) {
    feedback.innerHTML = `<strong>✓ That's right!</strong><span>You've got it. Keep going.</span>`;
  } else {
    feedback.innerHTML = `<strong>✕ Not quite — try again.</strong><span>${q.explanation}</span>`;
  }

  if (announce) feedback.focus?.();
}

function updateSummary() {
  const answered = Object.keys(responses).filter(key => Number(key) < questions.length).length;
  const correct = Object.entries(responses).filter(([index, value]) => questions[Number(index)] && questions[Number(index)].answer === Number(value)).length;
  progressText.textContent = `${answered} / ${questions.length}`;
  progressBar.style.width = `${(answered / questions.length) * 100}%`;
  scoreText.textContent = `${correct} correct`;

  if (answered === questions.length) {
    const percent = Math.round((correct / questions.length) * 100);
    resultTitle.textContent = percent >= 80 ? "Matter master!" : percent >= 60 ? "Solid progress!" : "Keep experimenting!";
    resultSummary.textContent = `You answered ${correct} of ${questions.length} correctly (${percent}%). You can change any answer above and the score will update instantly.`;
    results.hidden = false;
  } else {
    results.hidden = true;
  }
}

function resetQuiz() {
  responses = {};
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Keep reset functional even when browser storage is unavailable.
  }
  quizList.querySelectorAll('input[type="radio"]').forEach(input => { input.checked = false; });
  quizList.querySelectorAll(".question-card").forEach(card => card.classList.remove("correct", "incorrect"));
  quizList.querySelectorAll(".answer-option").forEach(option => option.classList.remove("is-correct", "is-wrong"));
  quizList.querySelectorAll(".feedback").forEach(feedback => { feedback.className = "feedback"; feedback.innerHTML = ""; });
  updateSummary();
  document.getElementById("quiz").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("resetTop").addEventListener("click", resetQuiz);
document.getElementById("resetBottom").addEventListener("click", resetQuiz);
buildQuiz();
