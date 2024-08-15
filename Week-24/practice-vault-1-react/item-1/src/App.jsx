import React from 'react';
import './App.css';

function App() {
  const onClick = () => {
    alert('A button is clicked');
  };

  return (
    <div className="container">
      <button className="button" onClick={onClick}>
        Clkick me to open an alert
      </button>
    </div>
  );
}

export default App;
