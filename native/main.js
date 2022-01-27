const { app, BrowserWindow, ipcMain } = require('electron')

/*
 * electron-reload will update window for each change
 *
 */

require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
})

/*
 * Start the imported BrowserWindow instance 
 * from electron and set some default settings
 *
 */

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  /*
   * Load index HTML file and open the dev tools window
   *
   */

  win.maximize()
  win.loadFile('./html/index.html')

  // win.webContents.openDevTools()
}

/*
 * Main process that will receive username sent from 
 * ipcRenderer 'username'
 *
 */

ipcMain.on('username', (event, data) => {
  console.log(data)
})


/*
 * Start window
 *
 */

app.whenReady().then(() => {
  createWindow()
})

