// Quiz State Management
let quizState = {
  currentQuestion: 0,
  score: 0,
  answered: [],
  user: {
    fullname: '',
    email: '',
    phone: ''
  },
  startTime: null,
  endTime: null
};

// 25 Professional Web Development & JavaScript Questions
const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "High Tech Machine Language"
    ],
    answer: 0
  },
  {
    question: "Which HTML5 element is used for self-contained content?",
    options: [
      "<div>",
      "<article>",
      "<section>",
      "<container>"
    ],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Colorful Style Sheets"
    ],
    answer: 2
  },
  {
    question: "Which CSS property controls text alignment?",
    options: [
      "align-text",
      "text-position",
      "text-align",
      "align-content"
    ],
    answer: 2
  },
  {
    question: "What is the correct syntax for a CSS comment?",
    options: [
      "// comment //",
      "/* comment */",
      "<!-- comment -->",
      "# comment #"
    ],
    answer: 1
  },
  {
    question: "Which HTML tag is used to include an external CSS file?",
    options: [
      "<style>",
      "<link>",
      "<css>",
      "<sheet>"
    ],
    answer: 1
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      "variable x = 5;",
      "var x = 5;",
      "v x = 5;",
      "declare x = 5;"
    ],
    answer: 1
  },
  {
    question: "Which operator is used for string concatenation in JavaScript?",
    options: [
      "&",
      "+",
      "&&",
      "||"
    ],
    answer: 1
  },
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Output Module",
      "Digital Object Management",
      "Document Operation Mode"
    ],
    answer: 0
  },
  {
    question: "How do you select an element by ID in JavaScript?",
    options: [
      "document.getElementByID('id')",
      "document.getElementById('id')",
      "document.selectID('id')",
      "document.query('#id')"
    ],
    answer: 1
  },
  {
    question: "Which method is used to add a class to an HTML element?",
    options: [
      "addClass()",
      "addclass()",
      "classList.add()",
      "setClass()"
    ],
    answer: 2
  },
  {
    question: "What is the purpose of the 'async' attribute in script tags?",
    options: [
      "To make JavaScript run faster",
      "To load script without blocking HTML parsing",
      "To create asynchronous functions",
      "To delay script execution"
    ],
    answer: 1
  },
  {
    question: "Which array method returns a new array with modified elements?",
    options: [
      "filter()",
      "map()",
      "reduce()",
      "forEach()"
    ],
    answer: 1
  },
  {
    question: "What does JSON stand for?",
    options: [
      "Java Script Object Notation",
      "JavaScript Object Notation",
      "Java Syntax Object Notation",
      "JavaScript Open Network"
    ],
    answer: 1
  },
  {
    question: "How do you parse a JSON string in JavaScript?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.decode()"
    ],
    answer: 0
  },
  {
    question: "What is the correct way to write a promise in JavaScript?",
    options: [
      "new Promise(function(resolve, reject) {})",
      "Promise(resolve, reject) {}",
      "promise = new Promise() {}",
      "create Promise(resolve, reject) {}"
    ],
    answer: 0
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: [
      "layer",
      "depth",
      "z-index",
      "stack-order"
    ],
    answer: 2
  },
  {
    question: "What is the default value of the position property in CSS?",
    options: [
      "absolute",
      "relative",
      "static",
      "fixed"
    ],
    answer: 2
  },
  {
    question: "How do you create a function in JavaScript using arrow syntax?",
    options: [
      "function => () {}",
      "const func = () => {}",
      "const => func() {}",
      "arrow func() => {}"
    ],
    answer: 1
  },
  {
    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "The previous object",
      "The current execution context object",
      "The global object always",
      "The parent element"
    ],
    answer: 1
  },
  {
    question: "Which method is used to listen to events in JavaScript?",
    options: [
      "onEvent()",
      "addEventListener()",
      "attachEvent()",
      "bindEvent()"
    ],
    answer: 1
  },
  {
    question: "What is the purpose of the flexbox 'justify-content' property?",
    options: [
      "Aligns items vertically",
      "Aligns items horizontally along the main axis",
      "Controls flex item sizing",
      "Wraps flex items"
    ],
    answer: 1
  },
  {
    question: "How do you prevent form submission in JavaScript?",
    options: [
      "event.stopDefault()",
      "event.preventDefault()",
      "event.stop()",
      "event.block()"
    ],
    answer: 1
  },
  {
    question: "What does REST API stand for?",
    options: [
      "Representational State Transfer API",
      "Remote Execution Service Transfer",
      "Responsive Execution State Transfer",
      "Real-time External Service Transfer"
    ],
    answer: 0
  },
  {
    question: "Which HTTP method is used to retrieve data?",
    options: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    answer: 2
  }
];

// DOM Elements
const registrationSection = document.getElementById('registration-section');
const quizSection = document.getElementById('quiz-section');
const resultsSection = document.getElementById('results-section');
const registrationForm = document.getElementById('registration-form');
const userStatus = document.getElementById('user-status');
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const resultEl = document.getElementById("result");
const progressEl = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");

// Initialize answered array
for (let i = 0; i < quizData.length; i++) {
  quizState.answered[i] = null;
}

// Registration Form Submission
registrationForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const fullname = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  // Validation
  let isValid = true;
  
  if (fullname.length < 3) {
    document.getElementById('error-fullname').textContent = 'Name must be at least 3 characters';
    isValid = false;
  } else {
    document.getElementById('error-fullname').textContent = '';
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('error-email').textContent = 'Please enter a valid email';
    isValid = false;
  } else {
    document.getElementById('error-email').textContent = '';
  }
  
  if (!isValid) return;
  
  quizState.user.fullname = fullname;
  quizState.user.email = email;
  quizState.user.phone = phone;
  
  // Update navbar
  userStatus.textContent = `Welcome, ${quizState.user.fullname}!`;
  
  // Start quiz timer
  quizState.startTime = new Date();
  
  // Show quiz, hide registration
  registrationSection.style.display = 'none';
  quizSection.style.display = 'block';
  
  // Load first question
  loadQuestion();
});

// Load the current question
function loadQuestion() {
  const q = quizData[quizState.currentQuestion];
  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${quizState.currentQuestion + 1} of ${quizData.length}`;
  progressFill.style.width = ((quizState.currentQuestion + 1) / quizData.length * 100) + '%';
  
  optionsEl.innerHTML = "";
  resultEl.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    
    if (quizState.answered[quizState.currentQuestion] !== null) {
      btn.disabled = true;
      const correct = q.answer;
      if (index === correct) {
        btn.classList.add("correct");
      } else if (index === quizState.answered[quizState.currentQuestion] && quizState.answered[quizState.currentQuestion] !== correct) {
        btn.classList.add("incorrect");
      }
    }
    
    btn.onclick = () => checkAnswer(index);
    optionsEl.appendChild(btn);
  });

  updateButtonStates();
}

// Check answer when user clicks an option
function checkAnswer(selected) {
  const correct = quizData[quizState.currentQuestion].answer;
  quizState.answered[quizState.currentQuestion] = selected;
  
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) {
      btn.classList.add("correct");
    } else if (i === selected && i !== correct) {
      btn.classList.add("incorrect");
    }
  });

  if (selected === correct) {
    quizState.score++;
    resultEl.innerHTML = "<p style='color: #28a745; font-weight: 600;'>✓ Correct!</p>";
  } else {
    resultEl.innerHTML = `<p style='color: #dc3545; font-weight: 600;'>✗ Incorrect! The correct answer is: ${quizData[quizState.currentQuestion].options[correct]}</p>`;
  }
  
  updateButtonStates();
}

function updateButtonStates() {
  prevBtn.disabled = quizState.currentQuestion === 0;
  nextBtn.disabled = quizState.answered[quizState.currentQuestion] === null;
}

// Navigate questions
nextBtn.onclick = () => {
  if (quizState.currentQuestion < quizData.length - 1) {
    quizState.currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
};

prevBtn.onclick = () => {
  if (quizState.currentQuestion > 0) {
    quizState.currentQuestion--;
    loadQuestion();
  }
};

// Display the final score and results
function showResult() {
  quizState.endTime = new Date();
  
  // Hide quiz, show results
  quizSection.style.display = 'none';
  resultsSection.style.display = 'block';
  
  const percentage = Math.round((quizState.score / quizData.length) * 100);
  const timeTaken = Math.round((quizState.endTime - quizState.startTime) / 1000);
  const minutes = Math.floor(timeTaken / 60);
  const seconds = timeTaken % 60;
  const formattedTime = `${minutes}m ${seconds}s`;
  
  let message = "";
  let badge = "";
  
  if (percentage === 100) {
    message = "Perfect Score! You're a Web Development Expert!";
    badge = "badge-excellent";
  } else if (percentage >= 80) {
    message = "Excellent! You have strong knowledge!";
    badge = "badge-excellent";
  } else if (percentage >= 60) {
    message = "Good! Keep practicing to improve!";
    badge = "badge-good";
  } else if (percentage >= 40) {
    message = "Fair. Review the basics and practice more!";
    badge = "badge-fair";
  } else {
    message = "Keep learning! You'll get better with practice!";
    badge = "badge-poor";
  }
  
  const resultsHTML = `
    <div class="results-header">
      <div class="user-info">
        <p><strong>Name:</strong> ${quizState.user.fullname}</p>
        <p><strong>Email:</strong> ${quizState.user.email}</p>
        <p><strong>Completion Time:</strong> ${formattedTime}</p>
        <p><strong>Completed At:</strong> ${quizState.endTime.toLocaleString()}</p>
      </div>
    </div>
    
    <div class="score-display">
      <div class="score-circle">
        <div class="score-number">${quizState.score}/${quizData.length}</div>
        <div class="score-label">Score</div>
      </div>
      <div class="score-percentage">${percentage}%</div>
      <span class="performance-badge ${badge}">${message}</span>
    </div>
    
    <div class="completion-info">
      <div class="completion-item">
        <label>Total Questions</label>
        <value>${quizData.length}</value>
      </div>
      <div class="completion-item">
        <label>Correct Answers</label>
        <value>${quizState.score}</value>
      </div>
      <div class="completion-item">
        <label>Accuracy</label>
        <value>${percentage}%</value>
      </div>
      <div class="completion-item">
        <label>Time Taken</label>
        <value>${formattedTime}</value>
      </div>
    </div>
    
    <div class="action-buttons">
      <button onclick="retakeQuiz()" class="btn btn-primary btn-retake">🔄 Retake Quiz</button>
      <button onclick="goHome()" class="btn btn-home">🏠 Back to Home</button>
    </div>
  `;
  
  document.getElementById('results-content').innerHTML = resultsHTML;
}

// Retake Quiz
function retakeQuiz() {
  quizState = {
    currentQuestion: 0,
    score: 0,
    answered: [],
    user: quizState.user,
    startTime: new Date(),
    endTime: null
  };
  
  for (let i = 0; i < quizData.length; i++) {
    quizState.answered[i] = null;
  }
  
  resultsSection.style.display = 'none';
  quizSection.style.display = 'block';
  loadQuestion();
}

// Go Home
function goHome() {
  location.reload();
}
