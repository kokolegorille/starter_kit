// Electron starter point
import electron, {app, BrowserWindow, ipcMain} from 'electron';
import path from 'path';

// Must be defined in the main process!
let mainWindow;

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