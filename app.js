document.addEventListener("DOMContentLoaded", () => {
  const SECTIONS = [
    { id: "ancient_history", name: "Ancient History" },
    { id: "medieval_history", name: "Medieval History" },
    { id: "modern_history", name: "Modern History" },
    { id: "indian_geo", name: "Indian Geography" },
    { id: "wb_geo", name: "West Bengal Geography" },
    { id: "arts_culture", name: "Arts & Culture" },
    { id: "polity", name: "Indian Polity" },
    { id: "economy", name: "Indian Economy" },
    { id: "physics", name: "Physics" },
    { id: "chemistry", name: "Chemistry" },
    { id: "biology", name: "Biology" },
    { id: "static_gk", name: "Static GK" },
    { id: "current_affairs", name: "Current Affairs" }
  ];

  let activeQuestions = [];
  let userAnswers = {};
  let currentIndex = 0;
  let timerInterval = null;
  let timeLeft = 0;
  let mode = "quiz";

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const sectionGrid = document.getElementById("sectionGrid");
  const selectAllBtn = document.getElementById("selectAllBtn");
  const clearAllBtn = document.getElementById("clearAllBtn");
  const startTestBtn = document.getElementById("startTestBtn");

  const configSection = document.getElementById("configSection");
  const testSection = document.getElementById("testSection");
  const resultSection = document.getElementById("resultSection");

  const questionCounter = document.getElementById("questionCounter");
  const poolBadge = document.getElementById("poolBadge");
  const sectionBadge = document.getElementById("sectionBadge");
  const commonTagBadge = document.getElementById("commonTagBadge");
  const timerDisplay = document.getElementById("timerDisplay");
  const questionText = document.getElementById("questionText");
  const optionsContainer = document.getElementById("optionsContainer");
  const explanationContainer = document.getElementById("explanationContainer");

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitTestBtn = document.getElementById("submitTestBtn");
  const reviewBtn = document.getElementById("reviewBtn");
  const restartBtn = document.getElementById("restartBtn");

  // Render subject checkboxes
  SECTIONS.forEach((sec) => {
    const label = document.createElement("label");
    label.className = "checkbox-label";
    label.innerHTML = `
      <input type="checkbox" value="${sec.id}" class="section-chk" checked>
      ${sec.name}
    `;
    sectionGrid.appendChild(label);
  });

  selectAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".section-chk").forEach((el) => (el.checked = true));
  });
  clearAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".section-chk").forEach((el) => (el.checked = false));
  });

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
  });

  // Start Test Process
  startTestBtn.addEventListener("click", () => {
    const sourcePool = document.querySelector('input[name="sourcePool"]:checked').value;
    const selectedSections = Array.from(
      document.querySelectorAll(".section-chk:checked")
    ).map((chk) => chk.value);

    if (selectedSections.length === 0) {
      alert("Please select at least one subject section.");
      return;
    }

    mode = document.getElementById("practiceMode").value;
    const minutes = parseInt(document.getElementById("timerSetting").value, 10);
    const limit = parseInt(document.getElementById("questionLimit").value, 10);

    let pool = [];

    // Query from Selected Bank (PYQ, MOCK, or BOTH)
    selectedSections.forEach((secId) => {
      if (sourcePool === "pyq" || sourcePool === "combined") {
        const pyqs = (window.ExamQuestionBank.pyq && window.ExamQuestionBank.pyq[secId]) || [];
        pool = pool.concat(pyqs.map(q => ({ ...q, poolSource: "WBPSC PYQ" })));
      }
      if (sourcePool === "mock" || sourcePool === "combined") {
        const mocks = (window.ExamQuestionBank.mock && window.ExamQuestionBank.mock[secId]) || [];
        pool = pool.concat(mocks.map(q => ({ ...q, poolSource: "Mock Test" })));
      }
    });

    if (pool.length === 0) {
      alert("No questions found in the selected sections for this bank yet.");
      return;
    }

    pool.sort(() => 0.5 - Math.random());
    activeQuestions = !isNaN(limit) && limit > 0 ? pool.slice(0, limit) : pool;

    currentIndex = 0;
    userAnswers = {};

    configSection.classList.add("hidden");
    resultSection.classList.add("hidden");
    testSection.classList.remove("hidden");

    if (!isNaN(minutes) && minutes > 0) {
      timeLeft = minutes * 60;
      timerDisplay.classList.remove("hidden");
      startTimer();
    } else {
      timerDisplay.classList.add("hidden");
    }

    renderQuestion();
  });

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerText();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerText();
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Time is up! Your test is being submitted automatically.");
        submitTest();
      }
    }, 1000);
  }

  function updateTimerText() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timerDisplay.textContent = `⏱️ ${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function renderQuestion() {
    const q = activeQuestions[currentIndex];
    questionCounter.textContent = `Q: ${currentIndex + 1}/${activeQuestions.length}`;
    poolBadge.textContent = q.poolSource || "Test";
    sectionBadge.textContent = q.section || "General";

    // Common Question Highlight
    if (q.common) {
      commonTagBadge.classList.remove("hidden");
      commonTagBadge.title = q.commonNote || "Common Question";
      commonTagBadge.textContent = q.commonNote ? `★ ${q.commonNote}` : "★ Common Question";
    } else {
      commonTagBadge.classList.add("hidden");
    }

    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    explanationContainer.classList.add("hidden");

    const answered = userAnswers[currentIndex] !== undefined;

    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = `${String.fromCharCode(65 + idx)}. ${opt}`;

      if (userAnswers[currentIndex] === idx) {
        btn.classList.add("selected");
      }

      if (mode === "quiz" && answered) {
        if (idx === q.correctAnswer) btn.classList.add("correct");
        if (userAnswers[currentIndex] === idx && idx !== q.correctAnswer) btn.classList.add("wrong");
      }

      btn.addEventListener("click", () => {
        if (mode === "quiz" && answered) return;
        userAnswers[currentIndex] = idx;
        renderQuestion();
      });

      optionsContainer.appendChild(btn);
    });

    if (mode === "quiz" && answered && q.explanation) {
      explanationContainer.innerHTML = `<strong>Explanation:</strong> ${q.explanation}`;
      explanationContainer.classList.remove("hidden");
    }

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === activeQuestions.length - 1;
  }

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) { currentIndex--; renderQuestion(); }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < activeQuestions.length - 1) { currentIndex++; renderQuestion(); }
  });

  submitTestBtn.addEventListener("click", () => {
    if (confirm("Do you want to submit your exam?")) submitTest();
  });

  function submitTest() {
    clearInterval(timerInterval);
    testSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    activeQuestions.forEach((q, idx) => {
      const ans = userAnswers[idx];
      if (ans === undefined) skipped++;
      else if (ans === q.correctAnswer) correct++;
      else wrong++;
    });

    document.getElementById("scoreValue").textContent = `${correct} / ${activeQuestions.length}`;
    document.getElementById("correctCount").textContent = correct;
    document.getElementById("wrongCount").textContent = wrong;
    document.getElementById("unattemptedCount").textContent = skipped;
  }

  reviewBtn.addEventListener("click", () => {
    const list = document.getElementById("reviewList");
    list.classList.toggle("hidden");
    list.innerHTML = "";

    activeQuestions.forEach((q, idx) => {
      const userChoice = userAnswers[idx];
      const isCorrect = userChoice === q.correctAnswer;
      const reviewItem = document.createElement("div");
      reviewItem.className = "review-item";

      reviewItem.innerHTML = `
        <p><strong>Q${idx + 1} (${q.poolSource} - ${q.section}): ${q.question}</strong></p>
        <p>Your Answer: <span class="${isCorrect ? 'text-success' : 'text-danger'}">
          ${userChoice !== undefined ? q.options[userChoice] : "Skipped"}
        </span></p>
        <p>Correct Answer: <strong class="text-success">${q.options[q.correctAnswer]}</strong></p>
        ${q.commonNote ? `<p class="badge badge-warning" style="margin: 0.3rem 0;">${q.commonNote}</p>` : ""}
        ${q.explanation ? `<p class="explanation-box"><strong>Explanation:</strong> ${q.explanation}</p>` : ""}
      `;
      list.appendChild(reviewItem);
    });
  });

  restartBtn.addEventListener("click", () => {
    resultSection.classList.add("hidden");
    configSection.classList.remove("hidden");
  });
});
      
