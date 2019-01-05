const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;
let mainWindow;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({    
    autoHideMenuBar: true,
    darkTheme: true,
    vibrancy: 'dark',
    backgroundColor: '#333333',
    fullscreen: false,
    // Note: The following line turns off Node integration to allow 
    // jQuery to work properly. If you need Node integration, please
    // see the Electron FAQ for how to enable this:
    // http://electron.atom.io/docs/faq/
    webPreferences: {
      nodeIntegration: false
    }
  });

  //mainWindow.maximize();
  mainWindow.loadURL(`http://localhost:9000`);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.setTitle(app.getName());
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});