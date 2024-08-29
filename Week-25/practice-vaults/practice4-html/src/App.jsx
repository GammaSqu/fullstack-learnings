import './App.css';

function App() {
  const textInput = document.querySelector('input');
  const output = document.querySelector('.output');

  const buttonClick = () => {
    output.innerHTML = textInput.value.toUpperCase();
  };

  return (
    <div class="container">
      <h2 class="title">Convert Text to Uppercase</h2>
      <div>
        <input type="text" placeholder="Enter text here" />
      </div>
      <div>
        <button onClick={buttonClick}>Convert to uppercase</button>
      </div>

      <div class="output"></div>
    </div>
  );
}

export default App;
