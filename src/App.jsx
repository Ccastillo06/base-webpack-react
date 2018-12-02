import React from 'react';
import { hot } from 'react-hot-loader';

const App = () => <div>Hello World!</div>;

export default (process.NODE_ENV === 'production' ? App : hot(module)(App));
