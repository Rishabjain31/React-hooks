
import React from 'react';
import ThemeContext from '../use-context/index';
const C = () => (
  <ThemeContext.Consumer>
    {color => (
      <p style={{ color }}>
        Hello World
      </p>
    )}
  </ThemeContext.Consumer>
);

export default C;