import React from 'react';
import './Form.css';

function Form() {
  return (
    <div>
      <div className="form-format">
        <label>Name</label>
        <input type="text" />
      </div>
      <div className="form-format">
        <label>Age</label>
        <input type="number" min="1" />
      </div>
      <div className="form-format">
        <label>DoB</label>
        <input type="date" />
      </div>
      <div className="form-format">
        <label>About Me</label>
        <textarea className="about-me"></textarea>
      </div>
      <div className="form-format">
        <label>Gender</label>
        <select name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-format">
        <label>Hobbies</label>
        <div className="checkbox-format">
          <div>
            <input type="checkbox" />
            Soccer
          </div>
          <div>
            <input type="checkbox" />
            Video Game
          </div>
          <div>
            <input type="checkbox" />
            Sleep
          </div>
        </div>
      </div>
      <div>
        Are you a code ninja?
        <label>
          <input type="radio" name="codeninja" />
          Yes
        </label>
        <label>
          <input type="radio" name="codeninja" />
          No
        </label>
      </div>
    </div>
  );
}

export default Form;
