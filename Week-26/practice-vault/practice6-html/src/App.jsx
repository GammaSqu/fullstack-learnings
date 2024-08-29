import { useState } from 'react';
import './App.css';

const rainbows = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = rainbows[currentColorIndex];
  const nextColor = rainbows[currentColorIndex + 1];
  const onButtonClick = () => {
    // const newIndex =
    //   currentColorIndex + 1 < rainbows.length - 1 ? currentColorIndex + 1 : 0;

    let newIndex;

    if (currentColorIndex + 1 < rainbows.length - 1) {
      newIndex = currentColorIndex + 1;
    } else {
      newIndex = 0;
    }

    setCurrentColorIndex(newIndex);
  };

  return (
    <div className={`container ${currentColor}`} onClick={onButtonClick}>
      <button>
        To
        <span className={nextColor}>{nextColor}</span>
      </button>
    </div>
  );
}

export default App;
