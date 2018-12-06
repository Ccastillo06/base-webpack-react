import '@babel/polyfill';
// When using TypeScript, React and ReactDOM should be imported as *.
// This is solved by setting "allowSyntheticDefaultImports": true in tsconfig.json
import React from 'react';
import ReactDOM from 'react-dom';
import './rhlConfig';

import './styles.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
