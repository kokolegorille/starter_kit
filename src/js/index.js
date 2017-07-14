import {ipcRenderer} from 'electron';

import 'babel-polyfill';
import '../css/app.css';

console.log("Hello Electron!");

// IPC coomunication
ipcRenderer.send('system:ping', null);
ipcRenderer.on('system:pong', () => console.log("got pong!"));