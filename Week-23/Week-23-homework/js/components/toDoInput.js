class ToDoInput {
  #container;
  #inputBox;
  #onValue;

  constructor(container, onValue) {
    this.#container = container;
    this.#onValue = onValue;
    this.#render();
  }

  #render() {
    this.#container.innerHTML = ` <input class="mainInput" type="text" placeholder="What needs to be done?" />`;

    this.#inputBox = this.#container.querySelector('input');
    this.#inputBox.addEventListener('keyup', this.#onEnter.bind(this));
  }

  #onEnter(event) {
    if (event.key === 'Enter') {
      this.#checkInput();
    }
  }

  #checkInput() {
    this.userInput = this.#inputBox.value;
    if (this.userInput) {
      console.log(this.userInput);
      this.#inputBox.value = '';
    } else {
      alert(`You didn't put anything there D:`);
    }

    this.#onValue(this.userInput);
  }
}

export default ToDoInput;
