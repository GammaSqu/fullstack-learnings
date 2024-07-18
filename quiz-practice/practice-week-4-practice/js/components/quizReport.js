import { secondstoHHMMSS } from './quizTimer.js';
class QuizReport {
  #container;
  #data;
  #formatTime;

  constructor(container, formatTime) {
    this.#container = container;
    this.#formatTime = formatTime;
  }

  show(data) {
    let testTimeString = secondstoHHMMSS(data.testTime);

    this.#container.innerHTML = `
    <h2>Quiz Completed!</h2>
    <div class="alert alert-primary mt-2">
        Your Score is <span class="fw-bold">${data.score}/${data.maxScore}</span>
    </div>
    <div class="alert alert-secondary">
        Your test time is <strong>${testTimeString}</strong>
    </div>
    </div>
    `;
  }

  destroy() {
    this.#container.innerHTML = ``;
  }

  //UP TO Slide 175
}

export default QuizReport;
