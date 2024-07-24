import ToDoInput from './components/toDoInput.js';
import ToDoAction from './components/toDoAction.js';
import ToDoFilter from './components/toDoFilter.js';

class ToDoList {
  #container;
  #toDoInput;
  #toDoAction;
  #toDoFilter;

  constructor(container) {
    this.#container = container;

    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
    <h1>todos</h1>

      <div data-component = "userInput"></div>
      <ul class="toDoList" data-component="actionList">
        
        </li>
      </ul>
      <div class="footer none" data-component="filter"></div>


    <div class="small-txt">
        <div>Double-click to edit a todo</div>
        <div>Created by the TodoMVC Team</div>
        <div>Part of TodoMVC</div>
      </div>
      
    `;
  }

  #setup() {
    let inputContainer = this.#container.querySelector(
      '[data-component = "userInput"]'
    );

    this.#toDoInput = new ToDoInput(inputContainer, this.#onValue.bind(this));

    let actionContainer = this.#container.querySelector(
      '[data-component="actionList"]'
    );

    this.#toDoAction = new ToDoAction(actionContainer);

    let filterContainer = this.#container.querySelector(
      '[data-component="filter"]'
    );

    this.#toDoFilter = new ToDoFilter(filterContainer);
  }

  #onValue(userInput) {
    this.#toDoAction.itemSetup(userInput);
    this.#toDoFilter.startUp();
  }
}

let toDoContainer = document.querySelector('.container');
let toDo = new ToDoList(toDoContainer);
