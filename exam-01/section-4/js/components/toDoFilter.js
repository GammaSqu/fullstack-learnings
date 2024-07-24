class ToDoFilter {
  #container;

  constructor(container) {
    this.#container = container;
  }

  startUp() {
    this.#container.innerHTML = `
        <div>1 item left</div>
        <div class="filter flex">
          <div>All</div>
          <div>Active</div>
          <div>Completed</div>
        </div>
        <div>Clear Completed</div>
      `;

    this.#container.classList.remove('none');
    this.#container.classList.add('flex');
  }
}

export default ToDoFilter;
