class QuizContent {
  #container;
  #activeIndex;
  #data;

  constructor(container) {
    this.#container = container;
  }

  setQuizData(data) {
    console.log(data);
    this.#data = data;

    let content = '';

    for (let i = 0; i < data.items.length; i++) {
      // get the current item at the current position i
      let currentItem = data.items[i];
      let answerContent = '';

      for (let y = 0; y < currentItem.answers.length; y++) {
        // get the current answer at the current index y
        let currentAnswer = currentItem.answers[y];

        answerContent =
          answerContent +
          `<button class="btn btn-outline-secondary d-block" data-answer="${y}">${currentAnswer.text}</button>`;
      }

      content =
        content +
        `<div data-item>
            <div class="mb-3"><span class="fw-bold">Question ${i + 1}.</span> ${
          currentItem.question
        }</div>
            <div class="mb-3 d-flex flex-column gap-3 w-100">
                ${answerContent}
            </div>
        </div>`;
      // render the current item question with the format Question [number] - [content]
      // Where do we render this content ^^
      // this.#container.innerHTML =
    }
    //Having this at the button of the setup is crutical, as it does not have access to content at the
    this.#container.innerHTML = `
     <h1 class="mb-4">${this.#data.title}</h1>
     <div data-component="content" class="mb-3">
        ${content}        
     </div>`;

    let allAnswerButtons = this.#container.querySelectorAll('[data-answer]');

    for (let i = 0; i < allAnswerButtons.length; i++) {
      let currentButton = allAnswerButtons[i];

      currentButton.addEventListener(
        'click',
        this.#onAnswerSelected.bind(this)
      );
    }

    this.setActiveIndex(0);
  }

  setActiveIndex(index) {
    this.#activeIndex = index;

    let allItems = this.#container.querySelectorAll('[data-item]');
    for (let i = 0; i < allItems.length; i++) {
      let currentItem = allItems[i];
      // = means assign or set the value to something (variable)
      // === means comparison so
      //10 === 10 --> true
      //'10' === 10 --> false

      //I want the curretnItem that has i equal inedx to be visible
      if (i === index) {
        //now we have found out the item, we want to make it visible
        currentItem.classList.remove('d-none');
      } else {
        currentItem.classList.add('d-none');
      }
    }
  }

  hide() {
    this.#container.classList.add('d-none');
  }

  show() {
    this.#container.classList.remove('d-none');
  }

  #onAnswerSelected(event) {
    let currentButton = event.target;
    let answerIndex = currentButton.getAttribute('data-answer');
    let item = this.#data.items[this.#activeIndex];
    let answers = item.answers;
    let selectedAnswer = answers[answerIndex];
    let isSelectedAnswerCorrected = selectedAnswer.correct;

    //Display the result
    //1. We need to create an icon and put it in the button
    let iconClass = ``;

    currentButton.classList.remove('btn-outline-secondary');

    if (isSelectedAnswerCorrected) {
      iconClass = `bi bi-check-circle-fill`;
      currentButton.classList.add('btn-success');
    } else {
      iconClass = `bi bi-exclamation-circle-fill`;
      currentButton.classList.add('btn-danger');
    }

    currentButton.innerHTML =
      currentButton.innerHTML +
      `
    <i class="${iconClass}"></i>
    `;
    //Disable all buttons.
    //1. select the parent element of the current button
    let parent = currentButton.parentElement;

    let allButtons = parent.querySelectorAll('[data-answer]');

    for (let i = 0; i < allButtons.length; i++) {
      let button = allButtons[i];

      button.disabled = true;
    }
  }
}

export default QuizContent;
