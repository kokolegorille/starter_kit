import 'babel-polyfill';
import '../css/app.css';

import React from 'react';
import { render } from 'react-dom';
import {ipcRenderer} from 'electron';

import Root from './components/root';

// IPC coomunication
ipcRenderer.send('system:ping', null);
ipcRenderer.on('system:pong', () => console.log("got pong!"));

// React
main();

function main() {
  const app = document.getElementById('app');
  render(<Root/>, app);
}