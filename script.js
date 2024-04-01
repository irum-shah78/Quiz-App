const quizData = [
  {
    question: 'How old is JavaScript Programming Language?',
    a: '40',
    b: '30',
    c: '28',
    d: '50',
    correctAnswer: 'c'
  }, {
    question: 'Which is most used Programming Language?',
    a: 'Python',
    b: 'Java',
    c: 'C++',
    d: 'JavaScript',
    correctAnswer: 'd'
  }, {
    question: 'Who is PM of Pakistan?',
    a: 'Imran Khan',
    b: 'Shehbaz Sharif',
    c: 'Asif Ali Zardari',
    d: 'Nawaz Sharif',
    correctAnswer: 'b'
  }, {
    question: 'HTML stands for?',
    a: 'Hypertext Markup Language',
    b: 'Cascading Style Sheet',
    c: 'JavaScript Object Notation',
    d: 'Integrated Developemnt Enviornment',
    correctAnswer: 'a'
  }, {
    question: 'In which JavaScript Launched?',
    a: '1995',
    b: '2010',
    c: '2015',
    d: 'None of Above',
    correctAnswer: 'a'
  }
];

const quiz = document.getElementById('quiz');
const answerElement = document.querySelectorAll('.answer');
const questionEelement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAns();

  const currentQuizData = quizData[currentQuiz];

  questionEelement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerElement.forEach((answerElement) => {
    if (answerElement.checked) {
      answer = answerElement.id;
    }
  });

  return answer;
}

function deSelectAns() {
  answerElement.forEach((answerElement) => {
    answerElement.checked = false;
  });
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correctAnswer) {
      score++;
    }

    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2 class=text-center p-1">You answered correctly at ${score}/${quizData.length} questions.</h2> 
      <div class="d-grid gap-2">
      <button class="btn btn-primary rounded-0 fs-6" type="button" id="submit" onclick="location.reload()">Submit</button>
      </div>`;
    }
  }
});