class QuizTimer {
  #container;
  #clock;
  #seconds;
  #interval;

  constructor(container) {
    this.#container = container;
    this.#render();
    this.#setup();
  }

  #render() {
    this.#container.innerHTML = `
        <div class="alert alert-info p-1 px-3 mt-3 d-inline-block">
    <i class="bi bi-clock"></i>
    <span data-component="clock">00:00:00</span>
</div>

        `;
  }

  #setup() {
    this.#container.classList.add('d-none');

    this.#clock = this.#container.querySelector('[data-component="clock"]');
  }

  #onInterval() {
    this.#seconds++;
    let formattedTimeString = this.secondstoHHMMSS(this.#seconds);
    this.#clock.innerHTML = formattedTimeString;
  }

  start() {
    this.#seconds = 0;
    this.#interval = setInterval(this.#onInterval.bind(this), 1000);
    this.#container.classList.remove('d-none');
  }

  stop() {
    if (this.#interval) {
      clearInterval(this.#interval);
      this.#seconds = 0;
    }
  }

  getSeconds() {
    return this.#seconds;
  }

  destroy() {
    this.stop();
    this.#container.innerHTML = ``;
  }

  secondstoHHMMSS(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    let hoursText = getTimeStringgFromNumber(hours);
    let minutesText = getTimeStringgFromNumber(minutes);
    let secondsText = getTimeStringgFromNumber(seconds);

    return `${hoursText}:${minutesText}:${secondsText}`;
  }
}

let getTimeStringgFromNumber = function (num) {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export function secondstoHHMMSS(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  let hoursText = getTimeStringgFromNumber(hours);
  let minutesText = getTimeStringgFromNumber(minutes);
  let secondsText = getTimeStringgFromNumber(sec);

  return `${hoursText}:${minutesText}:${secondsText}`;
}

export default QuizTimer;
