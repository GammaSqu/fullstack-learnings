function formatTime(seconds) {
  const pad = (num) => String(num).padStart(2, '0');

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

class Timer {
  #container;
  #seconds;
  #clock;
  #interval;

  constructor(container) {
    this.#container = container;
  }

  startRunning() {
    this.#container.innerHTML = `<div class="alert alert-info p-1 px-3 mt-3 d-inline-block">
    <i class="bi bi-clock"></i>
    <span data-component="clock">00:00:00</span>
</div>`;

    this.#clock = this.#container.querySelector('[data-component="clock"]');
    this.#startClock();
  }

  #startClock() {
    this.#seconds = 0;
    this.#interval = setInterval(this.#onIntervalTick.bind(this), 1000); //tick every second by 1000ms
  }

  stopRunning() {
    clearInterval(this.#interval);
  }

  getTime() {
    return formatTime(this.#seconds);
  }

  #onIntervalTick() {
    this.#seconds = this.#seconds + 1;

    //we need to convert seconds as a number to 00:00:00
    let humanFriendlyTime = formatTime(this.#seconds);
    this.#clock.innerHTML = humanFriendlyTime;
    console.log('Current Seconds', this.#seconds);
  }

  hide() {
    this.#container.classList.add('d-none');
  }

  show() {
    this.#container.classList.remove('d-none');
  }
}

export default Timer;
