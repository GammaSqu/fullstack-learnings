class ToDoItem {
  #container;

  constructor(container) {
    this.#container = container;
  }

  itemSetup(userInput) {
    let itemBox = document.createElement('li');

    itemBox.innerHTML = `
    <li class="item" id="item">
          <div class="item-view">
            <input type="checkbox" />
            <label class="item-view">${userInput}</label>
          </div>
          <button class"delete">X</button>
          </li>
    `;

    this.#container.appendChild(itemBox);
  }
}

export default ToDoItem;
