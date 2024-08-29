import './App.css';

function App() {
  const fullName = document.querySelector('.output');
  const firstName = document.querySelector('.first');
  const lastName = document.querySelector('.last');

  const getFullName = () => {
    fullName.innerHTML = `Full Name: ${firstName.value} ${lastName.value}`;
  };

  return (
    <div className="container">
      <div>
        <h2 className="title">Enter Your Names</h2>

        <input className="first" type="text" placeholder="First Name" />
        <input className="last" type="text" placeholder="Last Name" />
        <button onClick={getFullName}>Show Full Name</button>

        <div className="output"></div>
      </div>
    </div>
  );
}

export default App;
