import './App.css';

function App() {
  const onClick = () => {
    const inputResult = document.querySelector('.resultInput');

    inputResult.value = 'A button is clicked';
  };
  return (
    <div className="container">
      <input className="resultInput" type="text" />
      <button onClick={onClick}>Click me to change the input value</button>
    </div>
  );
}

export default App;
