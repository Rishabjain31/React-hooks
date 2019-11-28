import React, { useState, useEffect } from 'react';
import ThemeContext from '../use-context/index';
import C from '../nested-component/index';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState({ text : 'First todo'});

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  console.log("todos",todos);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <C />
    </div>
  );
}

export default Example;