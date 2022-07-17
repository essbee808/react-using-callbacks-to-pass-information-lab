import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import learnSymbol from './data.js'
import Matrix from './Matrix.js'

// Matrix component is rendered
// passes a values prop
// data used to create the divs come from src/data.js and stored as an array of arrays of strings
ReactDOM.render(<Matrix values={learnSymbol} />, document.getElementById('root'));
