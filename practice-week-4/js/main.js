import QuizSelection from './components/quizSelection.js';
import QuizNaviation from './components/quizNavigation.js';
import QuizContent from './components/quizContent.js';
import Timer from './components/quizTimer.js';
import Report from './components/quizReport.js';

class QuizApp {
  #container;
  #quizSelection;
  #activeQuiz;
  #quizNavigation;
  #quizContent;
  #quizTimer;
  #quizReport;
  #totalScore;

  // When we create an instance of the quizApp
  // We need to provide the HTML DOM element of where we
  // want our quizApp to process / put content in there
  constructor(container) {
    this.#container = container;

    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <div class="container mt-5 text-center">
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
      this.#onQuizSelectChange.bind(this)
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
    this.#quizTimer = new Timer(quizTimer);

    let quizReport = this.#container.querySelector('[data-component="report"]');
    this.#quizReport = new Report(quizReport);
  }

  #onSelectedAnswerChanged(isSelectedAnswerCorrected) {
    console.log('Selected Answer', isSelectedAnswerCorrected);

    if (isSelectedAnswerCorrected) {
      this.$totalScore = this.#totalScore + 1;
    }
  }

  #onNavigationChange(activeIndex) {
    console.log('Current Active Index', activeIndex);
    //main now will tell quizContent which index it should move to
    this.#quizContent.setActiveIndex(activeIndex);
  }

  #onSubmit() {
    this.#quizTimer.stopRunning();
    this.#quizTimer.hide();
    this.#quizContent.hide();
    this.#quizNavigation.hide();

    let score = this.#totalScore;
    let maxScore = this.#activeQuiz.items.length;
    let time = this.#quizTimer.getTime();

    this.#quizReport.show({
      score: score,
      maxScore: maxScore,
      time: time,
    });
  }

  #onQuizSelectChange(selectedValue) {
    console.log(selectedValue);

    this.#quizTimer.stopRunning();
    this.#quizReport.hide();

    //to do fetch we need to know the url we about to fetch
    //1. Construct url so we can fetch
    //what we want: data/javascript-quiz.json
    let url = `data/${selectedValue}.json`;
    console.log(url);
    this.#totalScore = 0;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(
        function (result) {
          //to this point, we know which quiz we have selected

          //we need to save this elected quiz to our #activeQuiz so we can reuse it later
          this.#quizTimer.startRunning();
          this.#activeQuiz = result;
          this.#quizNavigation.setQuizData(this.#activeQuiz);
          this.#quizContent.setQuizData(this.#activeQuiz);
          this.#quizContent.show();
          this.#quizNavigation.show();
          this.#quizTimer.show();
        }.bind(this)
      );
  }
}

let appContainer = document.querySelector('#app');
let app = new QuizApp(appContainer);
