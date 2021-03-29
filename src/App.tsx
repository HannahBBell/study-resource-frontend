import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/endpoint" method="POST">
        <h2>Add a Resource</h2>
        <input placeholder="Input resource name..."></input>
        <br/>
        <input placeholder="Input author..."></input>
        <br/>
        <input placeholder="Input URL..."></input>
        <br/>
        <input placeholder="Input Description"></input>
        <br/>
        <label>Select Category</label>
        <select name="subject" id="subject">
          <option>Python</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
        </select>
        <br/>
        <label>Select Format</label>
        <select name="content-type" id="content-type">
          <option>Video</option>
          <option>Article</option>
          <option>Course</option>
        </select>
        <br/>
        <label>Select Week</label>
        <select name="week" id="week">
          <option>Week-1</option>
          <option>Week-2</option>
          <option>Week-3</option>
        </select>
        <br/>
        <input placeholder="Input your name..."></input>
        <br/>
        <label>Are you Faculty?</label>
        <input type="checkbox"></input>
        <br/>
        <label>Have you used it?</label>
        <select name="used-it?" id="used-it?">
          <option>Yes</option>
          <option>No</option>
        </select>
        <br/>
      </form>
    </div>
  );
}

export default App;
