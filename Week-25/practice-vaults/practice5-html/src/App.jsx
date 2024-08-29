import './App.css';

function App() {
  const colourButton = document.querySelector('.colourChange');
  const sizeButton = document.querySelector('.sizeChange');
  const visibilityButton = document.querySelector('.visibility');

  const box = document.querySelector('.box');
  const changeRed = () => {
    if (box.classList.contains('redColour')) {
      box.classList.remove('redColour');

      colourButton.innerHTML = 'Change the box background to "red"';
    } else {
      box.classList.add('redColour');

      colourButton.innerHTML = 'Change the box background to default colour';
    }
  };

  const changeSize = () => {
    if (box.classList.contains('bigger')) {
      box.classList.remove('bigger');

      sizeButton.innerHTML = 'Make the box become bigger';
    } else {
      box.classList.add('bigger');

      sizeButton.innerHTML = 'Make the box become normal';
    }
  };

  const changeVisible = () => {
    if (box.classList.contains('hidden')) {
      box.classList.remove('hidden');

      visibilityButton.innerHTML = 'Hide the box?';
    } else {
      box.classList.add('hidden');

      visibilityButton.innerHTML = 'SHOW THE BOX!';
    }
  };

  return (
    <div className="container">
      <div>
        <button onClick={changeRed} className="colourChange">
          Change the box background to "red"
        </button>
        <button onClick={changeSize} className="sizeChange">
          Make the box become bigger
        </button>
        <button onClick={changeVisible} className="visibility">
          Hide the box?
        </button>
      </div>
      <div className="box"></div>
    </div>
  );
}

export default App;
