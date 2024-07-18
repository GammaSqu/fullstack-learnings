class QuizNaviation {
  #container;
  #activeIndex;
  #nextButton;
  #previousButton;
  #onSubmit;
  #onChange;

  constructor(container, onSubmitClicked, onChange) {
    this.#container = container;
    this.#onSubmit = onSubmitClicked;
    this.#onChange = onChange;
  }

  setQuizData(data) {
    console.log('data passing onto navigation', data);
    let paginationNavigation = '';

    for (let i = 0; i <= data.items.length - 1; i++) {
      paginationNavigation =
        paginationNavigation +
        `<li class="page-item" >
  <button class="page-link ">${i + 1}</button>
</li>
`;
    }

    this.#container.innerHTML = `<div class="d-flex justify-content-center gap-4 mt-2">
  <div>
    <button class="btn btn-secondary " data-component="previous" disabled>
      Previous
    </button>
  </div>
  <ul class="pagination" data-component="pagination">
    ${paginationNavigation}
  </ul>
  <div>
    <button class="btn btn-primary" data-component="next">
      Next
    </button>
  </div>
</div>
`;
    this.#setup();
    this.#setActivePagination(0);
  }

  #setup() {
    let paginationItems = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < paginationItems.length; i++) {
      let currentButton = paginationItems[i];
      currentButton.addEventListener(
        'click',
        this.#onPaginationClick.bind(this)
      );
    }

    this.#previousButton = this.#container.querySelector(
      '[data-component="previous"]'
    );
    this.#previousButton.addEventListener(
      'click',
      this.#onPreviousButtonClick.bind(this)
    );

    this.#nextButton = this.#container.querySelector('[data-component="next"]');
    this.#nextButton.addEventListener(
      'click',
      this.#onNextButtonClick.bind(this)
    );
  }

  //for the slide - it's updateNavigation
  #setActivePagination(index) {
    let paginationItems = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < paginationItems.length; i++) {
      let currentButton = paginationItems[i];

      if (i === index) {
        currentButton.classList.add('active');
      } else {
        currentButton.classList.remove('active');
      }
    }
    this.#activeIndex = index;

    if (this.#activeIndex > 0) {
      this.#previousButton.disabled = false;
    } else {
      this.#previousButton.disabled = true;
    }

    let lastIndex = paginationItems.length - 1;

    if (this.#activeIndex === lastIndex) {
      this.#nextButton.innerHTML = 'Submit';
    } else {
      this.#nextButton.innerHTML = 'Next';
    }
    this.#onChange(this.#activeIndex);
  }

  #onPreviousButtonClick() {
    if (this.#activeIndex > 0) {
      let newIndex = this.#activeIndex - 1;
      this.#setActivePagination(newIndex);
    }
  }

  #onNextButtonClick() {
    let currentText = this.#nextButton.innerHTML;
    if (currentText === 'Submit') {
      this.#onSubmit();
      console.log('Submittting!');
    } else {
      let newIndex = this.#activeIndex + 1;

      this.#setActivePagination(newIndex);
      console.log('Next');
    }
  }

  #onPaginationClick(event) {
    let currentButton = event.target;
    let label = currentButton.innerHTML;
    let index = Number(label) - 1;

    this.#setActivePagination(index);
    console.log(currentButton);

    let paginationItems = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < paginationItems.length; i++) {
      let button = paginationItems[i];

      button.classList.remove('active');
    }
    currentButton.classList.add('active');
  }

  destroy() {
    this.#container.innerHTML = ``;
  }
}

export default QuizNaviation;
