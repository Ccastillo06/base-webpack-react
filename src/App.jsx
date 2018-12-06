import React from 'react';
import { hot } from 'react-hot-loader';

import Hello from './components/Hello';

const App = () => <Hello text={process.env.DEVELOPER_NAME || 'developer'} />;

export default (process.NODE_ENV === 'production' ? App : hot(module)(App));
