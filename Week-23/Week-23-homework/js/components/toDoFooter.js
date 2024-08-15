class ToDoFooter {
  #container;

  constructor(container) {
    this.#container = container;
  }

  popUp() {
    this.#container.innerHTML = `
     <div>1 item left</div>
     <div class="filter flex hidden">
          <button class="allBtn">All</button>
          <button class ="activeBtn">Active</button>
          <button class="completedBtn">Completed</button>
        </div>
        <button class="clearBtn">Clear Completed</button>
    `;

    this.#container.classList.remove('hidden');
  }
}

export default ToDoFooter;
