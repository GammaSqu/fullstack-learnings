import QuizSelection from '../../practice-week-4-practice/js/components/quizSelection.js';
import QuizNaviation from '../../practice-week-4-practice/js/components/quizNavigation.js';
import QuizContent from '../../practice-week-4-practice/js/components/quizContent.js';
import QuizTimer, { secondstoHHMMSS } from './components/quizTimer.js';
import QuizReport from './components/quizReport.js';
class QuizApp {
  #container;
  #quizSelection;
  #activeQuiz;
  #quizNavigation;
  #quizContent;
  #quizTimer;
  #quizReport;
  #attempedItems;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `<div class="container mt-5 text-center">
       <div data-component="selection"></div>
       <div data-component="content"></div>
       <div data-component="timer"></div>
       <div data-component="navigation"></div>
       <div data-component="report"></div>
     </div>`;
  }

  #setup() {
    let selectionContainer = this.#container.querySelector(
      '[data-component="selection"]'
    );

    this.#quizSelection = new QuizSelection(
      selectionContainer,
      this.#onQuizSelectionChange.bind(this)
    );

    let navigationContainer = this.#container.querySelector(
      '[data-component="navigation"]'
    );

    this.#quizNavigation = new QuizNaviation(
      navigationContainer,
      this.#onSubmit.bind(this),
      this.#onNavigationChange.bind(this)
    );

    let quizContent = this.#container.querySelector(
      '[data-component="content"]'
    );
    this.#quizContent = new QuizContent(quizContent);

    let quizTimer = this.#container.querySelector('[data-component="timer"]');
    this.#quizTimer = new QuizTimer(quizTimer, this.#onAnwserChange.bind(this));

    let quizReport = this.#container.querySelector('[data-component="report"]');
    this.#quizReport = new QuizReport(quizReport, secondstoHHMMSS);
  }

  #onSubmit() {
    let score = 0;
    let maxScore = this.#activeQuiz.items.length;
    let testTime = this.#quizTimer.getSeconds();

    for (let i = 0; i < this.#attempedItems.length; i++) {
      let currentAttemptedItem = this.#attempedItems[i];

      if (currentAttemptedItem.correct) {
        score = score + 1;
      }
    }

    let reportData = {
      score: score,
      maxScore: maxScore,
      testTime: testTime,
    };

    this.#quizContent.destroy();
    this.#quizNavigation.destroy();
    this.#quizTimer.destroy();
    this.#quizReport.show(reportData);
  }

  #onNavigationChange(activeIndex) {
    console.log('Current Index', activeIndex);
    this.#quizContent.setActiveItem(activeIndex);
  }

  #onQuizSelectionChange(selectedValue) {
    console.log(selectedValue);

    let url = `data/${selectedValue}.json`;
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          console.log('Selected quiz data', result);
          this.#attempedItems = [];
          this.#activeQuiz = result;

          this.#quizNavigation.setQuizData(this.#activeQuiz);
          this.#quizContent.setQuizData(this.#activeQuiz);
          this.#quizTimer.start();
          this.#quizReport.destroy();
        }.bind(this)
      );
  }

  #onAnwserChange(data) {
    this.#attempedItems.push(data);
  }
}

let app = new QuizApp(document.querySelector('#app'));
