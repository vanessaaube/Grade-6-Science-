(() => {
  const form = document.getElementById('matterQuiz');
  const units = [...document.querySelectorAll('.check-unit')];
  const total = units.length;
  const headerProgress = document.getElementById('headerProgress');
  const miniFill = document.getElementById('miniFill');
  const progressRing = document.getElementById('progressRing');
  const progressPercent = document.getElementById('progressPercent');
  const progressMessage = document.getElementById('progressMessage');
  const scoreFill = document.getElementById('scoreFill');
  const scoreHeading = document.getElementById('scoreHeading');
  const scoreMessage = document.getElementById('scoreMessage');
  const storageKey = 'matter-lab-grade-6-pages-3-23-v2';

  function selectedValues(unit) {
    const type = unit.dataset.type;
    if (type === 'select') {
      const select = unit.querySelector('select');
      return select && select.value ? [select.value] : [];
    }
    return [...unit.querySelectorAll('input:checked')].map(input => input.value).sort();
  }

  function expectedValues(unit) {
    return unit.dataset.answer.split(',').sort();
  }

  function isAnswered(unit) {
    return selectedValues(unit).length > 0;
  }

  function updateProgress() {
    const answered = units.filter(isAnswered).length;
    const percent = Math.round((answered / total) * 100);
    headerProgress.textContent = `${answered} / ${total}`;
    miniFill.style.width = `${percent}%`;
    progressRing.style.setProperty('--progress', `${percent}%`);
    progressPercent.textContent = `${percent}%`;

    if (answered === 0) progressMessage.textContent = 'Ready when you are.';
    else if (answered < total) progressMessage.textContent = `${total - answered} item${total - answered === 1 ? '' : 's'} left to answer.`;
    else progressMessage.textContent = 'Every auto-checked item has an answer.';
  }

  function saveState() {
    const state = {};
    [...form.elements].forEach(element => {
      if (!element.name) return;
      if (element.type === 'radio') {
        if (element.checked) state[element.name] = element.value;
      } else if (element.type === 'checkbox') {
        state[element.name] ||= [];
        if (element.checked) state[element.name].push(element.value);
      } else {
        state[element.name] = element.value;
      }
    });
    state.__units = units.map(selectedValues);
    localStorage.setItem(storageKey, JSON.stringify(state));
  }

  function restoreState() {
    let state;
    try { state = JSON.parse(localStorage.getItem(storageKey) || '{}'); }
    catch { state = {}; }

    [...form.elements].forEach(element => {
      if (!element.name || !(element.name in state)) return;
      if (element.type === 'radio') element.checked = state[element.name] === element.value;
      else if (element.type === 'checkbox') element.checked = Array.isArray(state[element.name]) && state[element.name].includes(element.value);
      else element.value = state[element.name];
    });

    if (Array.isArray(state.__units)) {
      units.forEach((unit, index) => {
        const values = state.__units[index] || [];
        if (unit.dataset.type === 'select') {
          const select = unit.querySelector('select');
          if (select) select.value = values[0] || '';
        } else {
          unit.querySelectorAll('input').forEach(input => { input.checked = values.includes(input.value); });
        }
      });
    }
  }

  function checkAnswers() {
    let correct = 0;
    let firstIncorrect = null;

    units.forEach(unit => {
      unit.classList.remove('is-correct', 'is-incorrect');
      const selected = selectedValues(unit);
      const expected = expectedValues(unit);
      const matches = selected.length === expected.length && selected.every((value, index) => value === expected[index]);
      unit.classList.add(matches ? 'is-correct' : 'is-incorrect');
      if (matches) correct += 1;
      else if (!firstIncorrect) firstIncorrect = unit;
    });

    const percent = Math.round((correct / total) * 100);
    scoreFill.style.width = `${percent}%`;
    scoreHeading.textContent = `${correct} of ${total} correct · ${percent}%`;

    if (percent === 100) scoreMessage.textContent = 'Excellent work — your particle theory is solid!';
    else if (percent >= 80) scoreMessage.textContent = 'Strong understanding. Review the highlighted items to finish the set.';
    else if (percent >= 60) scoreMessage.textContent = 'Good start. Revisit the highlighted concepts, then check again.';
    else scoreMessage.textContent = 'Keep investigating. Use the particle diagrams and examples, revise, and try again.';

    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'center' });
    saveState();
  }

  function clearFeedback() {
    units.forEach(unit => unit.classList.remove('is-correct', 'is-incorrect'));
    scoreFill.style.width = '0%';
    scoreHeading.textContent = 'Check your answers when you’re ready.';
    scoreMessage.textContent = 'You can revise and check again as many times as you like.';
  }

  function resetAll() {
    const confirmed = window.confirm('Clear every selected and written answer?');
    if (!confirmed) return;
    form.reset();
    localStorage.removeItem(storageKey);
    clearFeedback();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  form.addEventListener('input', () => {
    clearFeedback();
    updateProgress();
    saveState();
  });
  form.addEventListener('change', () => {
    clearFeedback();
    updateProgress();
    saveState();
  });
  form.addEventListener('reset', event => {
    event.preventDefault();
    resetAll();
  });

  document.getElementById('checkAnswers').addEventListener('click', checkAnswers);
  document.getElementById('checkSidebar').addEventListener('click', checkAnswers);
  document.getElementById('resetTop').addEventListener('click', resetAll);
  document.querySelector('[data-scroll-results]').addEventListener('click', () => {
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  restoreState();
  updateProgress();
})();
