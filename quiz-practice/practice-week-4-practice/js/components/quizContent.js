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
    for (let itemIndex = 0; itemIndex < data.items.length; itemIndex++) {
      let currentItem = data.items[itemIndex];

      let answerContent = '';
      for (
        let answerIndex = 0;
        answerIndex < currentItem.answers.length;
        answerIndex++
      ) {
        let currentAnswer = currentItem.answers[answerIndex];

        answerContent =
          answerContent +
          `
        <button class="btn btn-outline-secondary d-block" data-answer="${answerIndex}">${currentAnswer.text}</button>
        `;
      }

      content =
        content +
        `<div data-item="${itemIndex}">
            <div class="mb-3" class="d-none" ><span class="fw-bold " >Question ${
              itemIndex + 1
            }.</span> 
            ${currentItem.question}
        </div>
            <div class="mb-3 d-flex flex-column gap-3 w-100">
                ${answerContent}
            </div>
        </div>`;
    }
    this.#container.innerHTML = `<h1 class="mb-4">${this.#data.title}</h1>
     <div data-component="content" class="mb-3"> ${content}
     </div>`;

    let allAnswers = this.#container.querySelectorAll('[data-answer]');
    for (let i = 0; i < allAnswers.length; i++) {
      let currentButton = allAnswers[i];
      currentButton.addEventListener(
        'click',
        this.#onAnswerSelected.bind(this)
      );
    }

    this.setActiveItem(0);
  }

  setActiveItem(itemIndex) {
    this.#activeIndex = itemIndex;
    let allQuestions = this.#container.querySelectorAll('[data-item]');
    for (let i = 0; i < allQuestions.length; i++) {
      let itemQuestion = allQuestions[i];

      if (i === itemIndex) {
        itemQuestion.classList.remove('d-none');
      } else {
        itemQuestion.classList.add('d-none');
      }
    }
  }

  #onAnswerSelected(event) {
    let currentButton = event.target;
    let answerIndex = currentButton.getAttribute('data-answer');
    let item = this.#data.items[this.#activeIndex];
    let answers = item.answers;
    let selectedAnswer = answers[answerIndex];
    let isAnswerCorrect = selectedAnswer.correct;

    //Now we need to display the result
    let icon = ``;
    currentButton.classList.remove('btn-outline-secondary');
    if (isAnswerCorrect === true) {
      icon = `bi bi-check-circle-fill`;
      currentButton.classList.add('btn-success');
    } else {
      icon = `bi bi-exclamation-circle-fill`;
      currentButton.classList.add('btn-danger');
    }

    currentButton.innerHTML =
      currentButton.innerHTML +
      `
    <i class="${icon}"></i>
    `;

    let parent = currentButton.parentElement;
    let allButtons = parent.querySelectorAll('[data-answer]');
    for (let i = 0; i < allButtons.length; i++) {
      let button = allButtons[i];

      button.disabled = true;
    }
  }

  destroy() {
    this.#container.innerHTML = ``;
  }
}

export default QuizContent;
