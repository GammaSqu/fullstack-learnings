class ToDoAction {
  #container;

  constructor(container) {
    this.#container = container;
  }

  itemSetup(userInput) {
    let itemBox = document.createElement('li');

    itemBox.innerHTML = `
    <li class="item flex" id="action">
          <div class="item-view">
            <input type="checkbox" />
            <label class="item-view">${userInput}</label>
          </div>
          <button class"delete">X</button>

          </li>
    `;

    this.#container.appendChild(itemBox);

    let allDeleteButtons = this.#container.querySelectorAll('li');

    for (let i = 0; i < allDeleteButtons.length; i++) {
      let currentDeleteButton = allDeleteButtons[i];

      currentDeleteButton.addEventListener(
        'click',
        this.#deleteItem.bind(this)
      );
    }
  }

  #deleteItem(event) {
    console.log('button deleting');
    //Not sure why the click occurs TWICE - instead of once...

    let currentSelection = event.target;

    let currentItem = currentSelection.getElementById('action');

    currentItem.remove();
  }
}

export default ToDoAction;
