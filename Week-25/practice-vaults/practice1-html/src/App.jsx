import './App.css';

const messageAlert = () => {
  alert(`Button Clicked!`);
};

function App() {
  return (
    <div className="container">
      <button onClick={messageAlert}>Click me to open an alert</button>
    </div>
  );
}

export default App;
