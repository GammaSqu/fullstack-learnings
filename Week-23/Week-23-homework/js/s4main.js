import ToDoFooter from './components/toDoFooter.js';
import ToDoInput from './components/toDoInput.js';
import ToDoItem from './components/toDoItem.js';

class ToDoList {
  #container;
  #toDoInput;
  #toDoItem;
  #toDoFooter;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `<div class="title">todos</div>
      <div data-component="userInput"></div>
      <ul class="toDoList" data-component="itemList"></ul>
      <div class= "footer hidden" data-component="footer"></div>
      <div class="info-txt">
        <div>Double-click to edit a todo</div>
        <div>Created by the TodoMVC Team</div>
        <div>Part of TodoMVC</div>
      </div>`;
  }

  #setup() {
    const inputContainer = this.#container.querySelector(
      '[data-component="userInput"]'
    );
    this.#toDoInput = new ToDoInput(inputContainer, this.#onValue.bind(this));

    const itemContainer = this.#container.querySelector(
      '[data-component="itemList"]'
    );

    this.#toDoItem = new ToDoItem(itemContainer);

    const footerContainer = this.#container.querySelector(
      '[data-component="footer"]'
    );

    this.#toDoFooter = new ToDoFooter(footerContainer);
  }

  #onValue(userInput) {
    this.#toDoItem.itemSetup(userInput);
    this.#toDoFooter.popUp();
  }
}

const appContainer = document.querySelector('#app');
const app = new ToDoList(appContainer);
