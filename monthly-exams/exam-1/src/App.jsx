import { useState } from 'react';
import './App.css';

function App() {
  let rainbow = ['red', 'green', 'blue', 'purple', 'orange', 'black'];
  const [currentColorIndex, setColorIndex] = useState();
  const currentColor = rainbow[currentColorIndex];

  let newIndex;
  const onClickButton = () => {};

  return (
    <div className={`container ${currentColor}`} onClick={onClickButton}>
      {rainbow.map((item, index) => (
        <button key={index} className={item}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default App;
