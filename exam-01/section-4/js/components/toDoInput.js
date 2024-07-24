class ToDoInput {
  #container;
  #inputBox;
  #onValue;
  #userInput;

  constructor(container, onValue) {
    this.#container = container;
    this.#onValue = onValue;
    this.#setup();
  }

  #setup() {
    this.#container.innerHTML = `
    <input
        class="heading box-shadow"
        
        type="text"
        placeholder="What needs to be done?"
      />
    `;

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
      alert(`You didn't put anything there :L`);
    }

    this.#onValue(this.userInput);
  }
}

export default ToDoInput;
