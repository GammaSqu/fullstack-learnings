import QuizSelection from './components/quizSelection.js';

class QuizApp {
  #container;
  #quizSelection;

  // When we create an instance of the quizApp
  // We need to provide the HTML DOM element of where we
  // want our quizApp to process / put content in there
  constructor(container) {
    this.#container = container;

    this.#render();
    this.#setup();
    this.#onQuizSelectChange();
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
    this.#quizSelection = new QuizSelection(selectionContainer);
    this.#quizSelection.onChange = function (selectedValue) {};
  }

  #onQuizSelectChange(selectedValue) {
    con;
  }
}

let appContainer = document.querySelector('#app');
let app = new QuizApp(appContainer);
