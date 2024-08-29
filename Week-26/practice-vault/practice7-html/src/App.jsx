import './App.css';

function App() {
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    occupation: 'Software engineer',
  };

  return (
    <div className="container">
      <h2 class="title">Personal Details</h2>
      <div class="card">Content is hidden</div>
      <div class="bottom">
        <button>Show Details</button>
      </div>
    </div>
  );
}
export default App;
