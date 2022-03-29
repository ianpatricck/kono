const { app, BrowserWindow, ipcMain } = require('electron')
const Store = require('electron-store')
const { io } = require('socket.io-client')

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
}

/*
 * Place where the username will be saved
 *
 */

const UserStore = new Store()

/*
 * Socket.io connection
 *
 */

const socket = io.connect("http://localhost:4000")

/*
 * Main process that will receive user data sent from 
 * ipcRenderer 'user'
 *
 */

ipcMain.on('user', (event, username) => UserStore.set('username', username))

/*
 * Process that will receive message and send to server-side
 *
 */

ipcMain.on('send_message', (event, message) => {

    const messageData = {
        from: UserStore.get('username'),
        message: message,
        time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
    }

    socket.emit("send_message", messageData) 
})


/*
 * Start window
 *
 */

app.whenReady().then(() => {
    createWindow()
})

