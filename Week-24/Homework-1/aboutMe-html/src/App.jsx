import Form from './Form';
import Submit from './Button';

function App() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="content">
        <Form></Form>
      </div>

      <div className="submitBtn">
        <Submit></Submit>
      </div>
    </div>
  );
}

export default App;
