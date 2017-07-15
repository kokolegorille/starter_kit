import 'babel-polyfill';
import '../css/app.css';

import React from 'react';
import { render } from 'react-dom';

import Root from './components/root';

// React
main();

function main() {
  const app = document.getElementById('app');
  render(<Root/>, app);
}