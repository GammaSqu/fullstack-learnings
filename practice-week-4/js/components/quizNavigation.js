class QuizNaviation {
  #container;
  #activeIndex;
  #previousButton;
  #nextButton;
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
        `
      <li class="page-item">
      <button class="page-link">${i + 1}</button>
      </li>`;
    }

    this.#container.innerHTML = `<div class="d-flex justify-content-center gap-4 mt-2">
  <div>
    <button class="btn btn-secondary" data-component="previous">
      Previous
    </button>
  </div>
  <ul class="pagination" data-component="pagination">
  ${paginationNavigation}</ul>
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
    let allPaginationButtons = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < allPaginationButtons.length; i++) {
      let currentButton = allPaginationButtons[i];

      currentButton.addEventListener(
        'click',
        this.#onPaginationItemClick.bind(this)
      );
    }

    this.#nextButton = this.#container.querySelector('[data-component="next"]');
    this.#nextButton.addEventListener(
      'click',
      this.#onNextButtonClick.bind(this)
    );

    this.#previousButton = this.#container.querySelector(
      '[data-component="previous"]'
    );
    this.#previousButton.addEventListener(
      'click',
      this.#onPreivousButtonClick.bind(this)
    );
  }

  #onNextButtonClick() {
    //we select the .active button

    let currentText = this.#nextButton.innerHTML;
    if (currentText === 'Submit') {
      //it means we need notify our brain that user is submitting
      console.log('submitting');
      this.#onSubmit();
    } else {
      let newIndex = this.#activeIndex + 1;
      this.#setActivePagination(newIndex);

      console.log('NEXT PLACE');
    }
  }

  hide() {
    this.#container.classList.add('d-none');
  }

  show() {
    this.#container.classList.remove('d-none');
  }

  #onPreivousButtonClick() {
    if (this.#activeIndex > 0) {
      let newIndex = this.#activeIndex - 1;
      this.#setActivePagination(newIndex);
    }
  }

  #onPaginationItemClick(event) {
    let currentButton = event.target;
    let label = currentButton.innerHTML;
    let index = Number(label) - 1;

    this.#setActivePagination(index);

    console.log(currentButton);

    //Remove the calss 'active' from allPaginationButtons
    let allPaginationButtons = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < allPaginationButtons.length; i++) {
      let button = allPaginationButtons[i];

      button.classList.remove('active');
    }

    currentButton.classList.add('active');
  }

  #setActivePagination(index) {
    let allPaginationButtons = this.#container.querySelectorAll('.page-link');
    for (let i = 0; i < allPaginationButtons.length; i++) {
      let currentButton = allPaginationButtons[i];

      if (i === index) {
        currentButton.classList.add('active');
      } else {
        currentButton.classList.remove('active');
      }
    }

    this.#activeIndex = index;

    //when the #activeIndex is larger than 0
    if (this.#activeIndex > 0) {
      //set the previousbutton disabled to false
      this.#previousButton.disabled = false;
    } else {
      //otherwise set the previous button disabled to true
      this.#previousButton.disabled = true;
    }

    //how do we know if the #activeIndex is the last item index?
    let lastIndex = allPaginationButtons.length - 1;
    //when the #activeIndex is equal to allPaginationButtons.length -1
    if (this.#activeIndex === lastIndex) {
      //set the next button text to "SUBMIT"
      this.#nextButton.innerHTML = 'Submit';
    } else {
      //otherise set the Next button to "Next"
      this.#nextButton.innerHTML = 'Next';
    }
    this.#onChange(this.#activeIndex);
  }
}

export default QuizNaviation;
