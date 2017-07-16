// Electron starter point
import electron, {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';

// Must be defined in the main process!
let mainWindow;

// SQLite and knex
let knex = require('knex')({
  client: "sqlite3",
  connection: {
    filename: "./build/database.sqlite3"
  },
  useNullAsDefault: true
});

const createWindow = () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });
  
  mainWindow.loadURL(`file://${__dirname}/index.html`);
    
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
  
  // Sample knex usage
  let result = knex.select("one").from("tbl1");
  result.then(
    rows => console.log(rows)
  );
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory 
  // even after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // re-create the mainWindow if the dock icon is clicked in OS X 
  // and no other windows were open
  if (! mainWindow) {
    createWindow();
  }
});

// IPC callbacks
ipcMain.on('system:ping', 
  () => mainWindow.webContents.send('system:pong', null)
);